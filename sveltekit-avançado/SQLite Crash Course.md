# SQLite Crash Course Cheat Sheet** with the **top commands** for quick reference

This cheat sheet covers the essential SQLite commands you need to interact with your database, create tables, manipulate data, and use key SQL functionalities.

### Data Definition Language (DDL)

#### Create Database

SQLite automatically creates a database when you try to open it.

```
sqlite3 mydatabase.db
```

#### Create Table

Create a new table with columns and data types.

```sql
CREATE TABLE atable (
    anumber INTEGER,
    afloat REAL,
    atext TEXT,
    ablob BLOB
);
```

#### Alter Table

Add a column to an existing table.

```sql
ALTER TABLE atable ADD COLUMN id INTEGER;
```

Add a foreign key column to an existing table.

```sql
ALTER TABLE atable ADD COLUMN atable_id INTEGER REFERENCES atable(id);
```

#### Drop Table

Remove a table from the database.

```sql
DROP TABLE atable;
```

### SQLite Constraints

#### Primary Key

Define a primary key on a column.

```sql
CREATE TABLE category (
    label TEXT PRIMARY KEY
);
```

#### Autoincrement

Use `AUTOINCREMENT` with `INTEGER PRIMARY KEY` to automatically generate unique values.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    birthdate TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

#### Unique Constraint

Ensure all values in a column are unique.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE
);
```

#### Not Null Constraint

Ensure a column cannot have `NULL` values.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL
);
```

#### Foreign Key

Define a foreign key to enforce relationships between tables.

```sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP CHECK(updated_at >= created_at),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### Check Constraint

Add a check to validate data input.

```sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP CHECK(updated_at >= created_at)
);
```

### Data Manipulation Language (DML)

#### Insert Data

Insert a new record into a table.

```sql
INSERT INTO users (username, email) 
VALUES ('maria_silva', 'maria@silva.com.br');
```

Insert several records into a table.

```sql
INSERT INTO users (username, email, birthdate)
VALUES
    ('francisca_pereira','francisca@pereira.com', '2002-11-05'),
    ('jose_santos','jose@santos.com', '2004-02-29'),
    ('joao_souza','joao@souza.com', '2001-12-31'),
    ('ana_oliveira', 'ana@oliveira.com', '2002-11-05');

INSERT INTO posts (title, body, user_id)
VALUES
    ('primeiro artigo','conteúdo do primeiro artigo', '1'),
    ('segundo artigo','conteúdo do segundo artigo', '2'),
    ('terceiro artigo','conteúdo do terceiro artigo', '2'),
    ('quarto artigo','conteúdo do quarto artigo', '1'),
    ('quinto artigo','conteúdo do quinto artigo', '2');
```

#### Update Data

Update an existing record.

```sql
UPDATE posts SET updated_at = '2025-03-28 00:00:00' WHERE id = 1;
```

#### Delete Data

Delete a record from the table.

```sql
DELETE FROM users WHERE username = 'maria_silva';
```

### Data Query Language (DQL)

#### Select Data

Retrieve data from a table.

```sql
SELECT * FROM users;
```

#### Select Specific Columns

Retrieve specific columns from a table.

```sql
SELECT username, email FROM users;
```

#### Where Clause

Filter results based on conditions.

```sql
SELECT * FROM users WHERE username = 'maria_silva';
```

#### Order By

Sort the result set by one or more columns.

Sort by the `username` column in ascending order (default).

```sql
SELECT * FROM users ORDER BY username;
```

Sort by the `birthdate` column in descending order.

```sql
SELECT * FROM users ORDER BY birthdate DESC;
```

Sort first by `birthdate` in descending order, then by `email` in ascending order.

```sql
SELECT * FROM users ORDER BY birthdate DESC, email ASC;
```

#### Pagination

Retrieve the first 10 users.

```sql
SELECT * FROM users LIMIT 10;
```

To skip the first 10 users and retrieve the next 10, you can use `LIMIT` with `OFFSET`.

```sql
SELECT * FROM users LIMIT 10 OFFSET 10;
```

#### Order By and Pagination Together

Retrieve users sorted by `username` in ascending order, and paginate the results to get the first 10 users.

```sql
SELECT * FROM users ORDER BY username ASC LIMIT 10 OFFSET 0;
```

Retrieve users sorted by `username` in ascending order and paginate through the pages.

```sql
-- Page 1
SELECT * FROM users ORDER BY username ASC LIMIT 10 OFFSET 0;

-- Page 2
SELECT * FROM users ORDER BY username ASC LIMIT 10 OFFSET 10;

-- Page 3
SELECT * FROM users ORDER BY username ASC LIMIT 10 OFFSET 20;
```

### Joins

#### Inner Join

Combine rows from two tables based on a condition.

```sql
SELECT posts.title, users.username
FROM users
INNER JOIN posts ON users.id = posts.user_id;
```

#### Left Join

Return all rows from the left table, and matching rows from the right table.

```sql
SELECT posts.title, users.username
FROM users
LEFT JOIN posts ON users.id = posts.user_id;
```

#### Right Join

Return all rows from the right table, and matching rows from the left table. (SQLite doesn't support `RIGHT JOIN`, but you can achieve similar results using `LEFT JOIN` by switching the table order.)

```sql
SELECT posts.title, users.username
FROM posts
LEFT JOIN users ON users.id = posts.user_id;
```

### Aggregates & Grouping

#### Count

Count the number of rows.

```sql
SELECT COUNT(*) FROM users;
```

#### Group By

Group rows based on column(s).

```sql
SELECT user_id, COUNT(*) FROM posts GROUP BY user_id;
```

#### Sum

Sum the values in a column.

```sql
SELECT SUM(amount) FROM orders;
```

#### Max/Min

Find the maximum or minimum value in a column.

```sql
SELECT MAX(birthdate) FROM users;
SELECT MIN(birthdate) FROM users;
```

### Transactions

#### Begin Transaction

Start a transaction.

```sql
BEGIN TRANSACTION;
```

#### Commit

Commit the current transaction.

```sql
COMMIT;
```

#### Rollback

Rollback the current transaction.

```sql
ROLLBACK;
```


### Indexing & Performance

#### Create Index

Create an index to speed up queries.

```sql
CREATE INDEX idx_username ON users (username);
```

#### Drop Index

Remove an index.

```sql
DROP INDEX idx_username;
```

### Exporting & Importing Data

#### Export to SQL file

Export the database content into an SQL file.

```sql
.output dump.sql
.dump
```

#### Import from SQL file

Import SQL file into the database.

```sql
.read dump.sql
```

### SQLite Shell Commands

#### List Tables

Display all tables in the database.

```sql
.tables
```

#### Show Schema

Show the schema (structure) of a table.

```sql
.schema users
```

#### Exit SQLite

Exit the SQLite shell.

```sql
.exit
```
