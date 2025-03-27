# **Guia Rápido do SQLite** com os **principais comandos** para referência rápida

Este guia cobre os comandos essenciais do SQLite para interagir com o banco de dados, criar tabelas, manipular dados e utilizar funcionalidades-chave do SQL.

---

## Linguagem de Definição de Dados (DDL)

### Criar Banco de Dados

O SQLite cria automaticamente um banco de dados ao tentar abri-lo.

```sh
sqlite3 meubanco.db
```

### Criar Tabela

Cria uma nova tabela com colunas e tipos de dados.

```sql
CREATE TABLE umatabela (
    um_numero INTEGER,
    um_decimal REAL,
    um_texto TEXT,
    um_arquivo BLOB
);
```

### Alterar Tabela

Adicionar uma coluna a uma tabela existente.

```sql
ALTER TABLE umatabela ADD COLUMN id INTEGER;
```

Adicionar uma chave estrangeira a uma tabela existente.

```sql
ALTER TABLE umatabela ADD COLUMN umatabela_id INTEGER REFERENCES umatabela(id);
```

### Excluir Tabela

Remove uma tabela do banco de dados.

```sql
DROP TABLE umatabela;
```

---

## Restrições no SQLite

### Chave Primária

Define uma chave primária para uma coluna.

```sql
CREATE TABLE categoria (
    rotulo TEXT PRIMARY KEY
);
```

### Autoincremento

Usar `AUTOINCREMENT` com `INTEGER PRIMARY KEY` para gerar valores únicos automaticamente.

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_usuario TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    data_nascimento TEXT,
    criado_em TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### Restrição Única

Garante que todos os valores de uma coluna sejam únicos.

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE
);
```

### Restrição NOT NULL

Garante que uma coluna não possa ter valores `NULL`.

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY,
    nome_usuario TEXT NOT NULL
);
```

### Chave Estrangeira

Define uma chave estrangeira para impor relacionamentos entre tabelas.

```sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    usuario_id INTEGER NOT NULL,
    criado_em TEXT DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TEXT DEFAULT CURRENT_TIMESTAMP CHECK(atualizado_em >= criado_em),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

### Restrição CHECK

Adiciona uma validação de dados na entrada.

```sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    atualizado_em TEXT DEFAULT CURRENT_TIMESTAMP CHECK(atualizado_em >= criado_em)
);
```

---

## Linguagem de Manipulação de Dados (DML)

### Inserir Dados

Inserir um novo registro em uma tabela.

```sql
INSERT INTO usuarios (nome_usuario, email)
VALUES ('maria_silva', 'maria@silva.com.br');
```

Inserir vários registros de uma vez.

```sql
INSERT INTO usuarios (nome_usuario, email, data_nascimento)
VALUES
    ('francisca_pereira', 'francisca@pereira.com', '2002-11-05'),
    ('jose_santos', 'jose@santos.com', '2004-02-29'),
    ('joao_souza', 'joao@souza.com', '2001-12-31'),
    ('ana_oliveira', 'ana@oliveira.com', '2002-11-05');

INSERT INTO posts (titulo, conteudo, usuario_id)
VALUES
    ('primeiro artigo', 'conteúdo do primeiro artigo', 1),
    ('segundo artigo', 'conteúdo do segundo artigo', 2),
    ('terceiro artigo', 'conteúdo do terceiro artigo', 2),
    ('quarto artigo', 'conteúdo do quarto artigo', 1),
    ('quinto artigo', 'conteúdo do quinto artigo', 2);
```

### Atualizar Dados

Atualizar um registro existente.

```sql
UPDATE posts SET atualizado_em = '2025-03-28 00:00:00' WHERE id = 1;
```

### Excluir Dados

Excluir um registro de uma tabela.

```sql
DELETE FROM usuarios WHERE nome_usuario = 'maria_silva';
```

---

## Linguagem de Consulta de Dados (DQL)

### Selecionar Dados

Recuperar todos os registros de uma tabela.

```sql
SELECT * FROM usuarios;
```

### Selecionar Colunas Específicas

Recuperar colunas específicas de uma tabela.

```sql
SELECT nome_usuario, email FROM usuarios;
```

### Filtro com WHERE

Filtrar resultados com base em condições.

```sql
SELECT * FROM usuarios WHERE nome_usuario = 'maria_silva';
```

### Ordenação (ORDER BY)

Ordenar os resultados por uma ou mais colunas.

Ordenar por `nome_usuario` em ordem ascendente (padrão).

```sql
SELECT * FROM usuarios ORDER BY nome_usuario;
```

Ordenar por `data_nascimento` em ordem descendente.

```sql
SELECT * FROM usuarios ORDER BY data_nascimento DESC;
```

Ordenar primeiro por `data_nascimento` em ordem descendente e, em seguida, por `email` em ordem ascendente.

```sql
SELECT * FROM usuarios ORDER BY data_nascimento DESC, email ASC;
```

### Paginação (LIMIT e OFFSET)

Recuperar os primeiros 10 usuários.

```sql
SELECT * FROM usuarios LIMIT 10;
```

Pular os primeiros 10 usuários e recuperar os próximos 10.

```sql
SELECT * FROM usuarios LIMIT 10 OFFSET 10;
```

### Ordenação e Paginação Juntas

Ordenar usuários pelo `nome_usuario` e paginar os resultados para obter os primeiros 10 registros.

```sql
SELECT * FROM usuarios ORDER BY nome_usuario ASC LIMIT 10 OFFSET 0;
```

Paginação por páginas:

```sql
-- Página 1
SELECT * FROM usuarios ORDER BY nome_usuario ASC LIMIT 10 OFFSET 0;

-- Página 2
SELECT * FROM usuarios ORDER BY nome_usuario ASC LIMIT 10 OFFSET 10;

-- Página 3
SELECT * FROM usuarios ORDER BY nome_usuario ASC LIMIT 10 OFFSET 20;
```

---

## Joins (Junções de Tabelas)

### INNER JOIN

Combinar registros de duas tabelas com base em uma condição.

```sql
SELECT posts.titulo, usuarios.nome_usuario
FROM usuarios
INNER JOIN posts ON usuarios.id = posts.usuario_id;
```

### LEFT JOIN

Retornar todos os registros da tabela à esquerda e os correspondentes da direita.

```sql
SELECT posts.titulo, usuarios.nome_usuario
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuario_id;
```

### RIGHT JOIN (Simulado)

O SQLite não suporta `RIGHT JOIN`, mas é possível inverter a ordem das tabelas usando `LEFT JOIN`.

```sql
SELECT posts.titulo, usuarios.nome_usuario
FROM posts
LEFT JOIN usuarios ON usuarios.id = posts.usuario_id;
```

---

## Agregação e Agrupamento

### Contagem

Conta o número de linhas.

```sql
SELECT COUNT(*) FROM usuarios;
```

### Agrupar por

Agrupa linhas com base em uma ou mais colunas.

```sql
SELECT usuario_id, COUNT(*) FROM posts GROUP BY usuario_id;
```

### Soma

Soma os valores de uma coluna.

```sql
SELECT SUM(total) FROM pedidos;
```

### Máximo/Mínimo

Encontra o maior ou menor valor em uma coluna.

```sql
SELECT MAX(data_nascimento) FROM usuarios;
SELECT MIN(data_nascimento) FROM usuarios;
```

## Transações

### Iniciar Transação

Inicia uma transação.

```sql
BEGIN TRANSACTION;
```

### Confirmar

Confirma a transação atual.

```sql
COMMIT;
```

### Reverter

Desfaz a transação atual.

```sql
ROLLBACK;
```

---

## Índices e Otimização

### Criar Índice

Criar um índice para acelerar as consultas.

```sql
CREATE INDEX idx_nome_usuario ON usuarios (nome_usuario);
```

### Remover Índice

Excluir um índice existente.

```sql
DROP INDEX idx_nome_usuario;
```

---

### Exportando e Importando Dados

#### Exportando para arquivo SQL

Exportar o banco de dados para um arquivo SQL.

```sql
.output dump.sql
.dump
```

#### Importando de arquivo SQL

Importando o banco de dados de um arquivo SQL.

```sql
.read dump.sql
```

---

## Comandos do SQLite Shell

### Listar Tabelas

Mostrar todas as tabelas do banco de dados.

```sql
.tables
```

### Exibir Estrutura da Tabela

Mostrar a estrutura de uma tabela.

```sql
.schema usuarios
```

### Sair do SQLite

Sai do SQLite Shell.

```sql
.exit
```

---
