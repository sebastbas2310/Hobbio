import { NextResponse } from "next/server";

type User = {
  id: number;
  username: string;
  email: string;
};

let users: User[] = [
  { id: 1, username: "isaac", email: "isaac@example.com" },
  { id: 2, username: "luisa", email: "luisa@example.com" },
];

// GET → listar todos
export async function GET() {
  return NextResponse.json(users);
}

// POST → crear
export async function POST(req: Request) {
  const body = await req.json();
  const newUser: User = {
    id: Date.now(), // temporal
    username: body.username,
    email: body.email,
  };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
