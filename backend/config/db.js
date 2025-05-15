import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);
// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

//  postgresql://neondb_owner:npg_UZ5Civ1YyLKD@ep-lingering-rain-a1cmplh8-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
