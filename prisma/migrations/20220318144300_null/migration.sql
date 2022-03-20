/*
  Warnings:

  - Made the column `title` on table `Bookmark` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bookmark" ALTER COLUMN "title" SET NOT NULL;
