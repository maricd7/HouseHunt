import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '@/app/supabase';
import { cookies } from 'next/headers';


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


// user data checker 
export async function POST(request: Request) {

    //check if the user data is right on login
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
  
      //declaring relevant data 
      const user = data[0];
      const userName = data[0].username

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }
      
  
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
      
      // if(token){
      //   const cookieStore = cookies()
      //   cookieStore.set('token',token)
      // }
      
      //response payload
      return NextResponse.json({token,userName});

      //error handling 
    } catch (err: unknown) {
      let errorMessage = 'Internal Server Error';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
  }