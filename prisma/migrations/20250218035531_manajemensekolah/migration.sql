-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
