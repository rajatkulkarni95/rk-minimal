/*
  Warnings:

  - Made the column `tagUuid` on table `Bookmark` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bookmark" ALTER COLUMN "tagUuid" SET NOT NULL;
