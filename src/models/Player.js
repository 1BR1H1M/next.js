// Importa el cliente Prisma y crea una instancia
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Función para crear un estudiante
async function createPlayer(name, age) {
  return await prisma.player.create({
    data: {
      name,
      age,
    },
  });
}

// Función para obtener todos los estudiantes
async function getAllPlayer() {
  return await prisma.player.findMany();
}


// Función para actualizar un estudiante
async function updatePlayer(id, data) {
  return await prisma.player.update({
    where: {
      id,
    },
    data,
  });
}


// Exporta las funciones para usarlas en otras partes de tu aplicación
export { createPlayer, getAllPlayer, updatePlayer, };
