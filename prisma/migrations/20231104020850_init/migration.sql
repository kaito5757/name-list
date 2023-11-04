/*
  Warnings:

  - You are about to drop the column `userId` on the `Teams` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Departments` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_DepartmentsToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DepartmentsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Departments" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DepartmentsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TeamsToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TeamsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Teams" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TeamsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Teams" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "Teams";
DROP TABLE "Teams";
ALTER TABLE "new_Teams" RENAME TO "Teams";
CREATE TABLE "new_Departments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Departments" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "Departments";
DROP TABLE "Departments";
ALTER TABLE "new_Departments" RENAME TO "Departments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentsToUser_AB_unique" ON "_DepartmentsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentsToUser_B_index" ON "_DepartmentsToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TeamsToUser_AB_unique" ON "_TeamsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamsToUser_B_index" ON "_TeamsToUser"("B");
