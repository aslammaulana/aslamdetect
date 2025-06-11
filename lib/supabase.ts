// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://raoijaufniiwfljaqnqp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhb2lqYXVmbmlpd2ZsamFxbnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NTk2MDIsImV4cCI6MjA2NTIzNTYwMn0.NTd1DWgd9bYtQlX9J-oI6Ga4LRK3GGGY-bNry6v-WvY';

export const supabase = createClient(supabaseUrl, supabaseKey);
