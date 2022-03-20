/*
  Warnings:

  - You are about to drop the `TagOnBookmark` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagUuid` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "tagUuid" TEXT NOT NULL;

-- DropTable
DROP TABLE "TagOnBookmark" CASCADE;

-- CreateIndex
CREATE INDEX "Tag_uuid_idx" ON "Tag"("uuid");
