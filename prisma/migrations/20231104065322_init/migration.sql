-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "main_image_url" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "full_name_kana" TEXT NOT NULL,
    "official_position" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "mail_address" TEXT NOT NULL,
    "slack_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_User" ("created_at", "full_name", "full_name_kana", "id", "mail_address", "main_image_url", "occupation", "official_position", "slack_name", "updated_at") SELECT "created_at", "full_name", "full_name_kana", "id", "mail_address", "main_image_url", "occupation", "official_position", "slack_name", "updated_at" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_Department" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Department" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "Department";
DROP TABLE "Department";
ALTER TABLE "new_Department" RENAME TO "Department";
CREATE TABLE "new_Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Team" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
