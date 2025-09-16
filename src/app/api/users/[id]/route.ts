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

// GET → obtener por id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const user = users.find(u => u.id === Number(params.id));
  return user
    ? NextResponse.json(user)
    : NextResponse.json({ error: "Not found" }, { status: 404 });
}

// PUT → actualizar
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const idx = users.findIndex(u => u.id === Number(params.id));
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  users[idx] = { ...users[idx], ...body };
  return NextResponse.json(users[idx]);
}

// DELETE → eliminar
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  users = users.filter(u => u.id !== Number(params.id));
  return NextResponse.json({ ok: true });
}
