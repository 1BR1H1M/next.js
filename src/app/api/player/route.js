import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { createPlayer } from "@/models/Player";

export async function POST(request) {
    try {
        const data = await request.json ()
        const player = await prisma.createPlayer.create(({
            data:data
        }))
        return new NextResponse(JSON.stringify(player),{
            headers:{"Content-Type":"application/json"},
            status:201
        })
    } catch (error) {
        return new NextResponse(error.message, {status:500})
    }
}

export async function GET(){
    try {
        const player = await prisma.player.findMany();
        return NextResponse.json({data:player}, {status:200});
    } catch (error) {
        return new NextResponse(error.message, {status:500})
    }
}