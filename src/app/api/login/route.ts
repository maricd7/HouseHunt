import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '@/app/supabase';


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


// user data checker 
export async function POST(request: Request) {
    try {
      const { email, password }: { email: string; password: string } = await request.json();
  
      const { data, error } = await supabase
        .from('users')
        .select()
        .eq('email', email);
  
      if (error) {
        throw new Error(error.message);
      }
  
      if (!data || !data.length) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }
  
      const user = data[0];
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }
  
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
      

      return NextResponse.json({ token });
    } catch (err: unknown) {
      let errorMessage = 'Internal Server Error';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
  }