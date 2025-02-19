/*
  Warnings:

  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_teacher_id_fkey";

-- DropTable
DROP TABLE "classes";

-- CreateTable
CREATE TABLE "Classes" (
    "id" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
