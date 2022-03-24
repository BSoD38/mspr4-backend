import { Injectable } from '@nestjs/common';
import database = require('better-sqlite3');

@Injectable()
export class AppService {
  db;

  constructor() {
    this.db = database('newsletter.db');
    this.db.exec(
      'CREATE TABLE IF NOT EXISTS newsletter(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE)',
    );
  }

  getAll(): any[] {
    return this.db.prepare(`SELECT * FROM newsletter`).all();
  }

  insertNewsletter({ name, email }): boolean {
    this.db.exec(
      `insert into newsletter(name, email) VALUES('${name}', '${email}')`,
    );
    return true;
  }
}
