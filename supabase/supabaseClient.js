import { createClient } from "supabase";

const supabaseUrl = "https://qaxuwnfaumbbkundeddj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFheHV3bmZhdW1iYmt1bmRlZGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5NDQwOTcsImV4cCI6MjA0NzUyMDA5N30.qiN6X072LejvHb_kF5GT338dCkb8nf3N0kMG6IdzWjU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);