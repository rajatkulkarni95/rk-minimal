/*
  Warnings:

  - You are about to drop the column `description` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `border` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Tag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "border",
DROP COLUMN "color";

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_tagUuid_fkey" FOREIGN KEY ("tagUuid") REFERENCES "Tag"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
