'use server';

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '@/app/supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

interface FormData {
  email: string;
  password: string;
}

export const loginUser = async (formData: FormData) => {
  const { email, password } = formData;

  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email', email);

    if (error) {
      throw new Error(error.message);
    }

    if (!data || !data.length) {
      return {
        status: 401,
        json: { message: 'Invalid credentials' },
      };
    }

    const user = data[0];
    const userName = user.username;

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return {
        status: 401,
        json: { message: 'Invalid credentials' },
      };
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return {
      status: 200,
      json: { token, userName },
    };
  } catch (err: unknown) {
    let errorMessage = 'Internal Server Error';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return {
      status: 500,
      json: { message: errorMessage },
    };
  }
};