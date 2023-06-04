-- Active: 1685714140743@@127.0.0.1@3306

CREATE TABLE
    users(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT(DATETIME())
    );
INSERT 
    id,
    name,
    price,
    description,
    image_url
    created_at
 INTO users
VALUES (
        "a001",
        "LALI-ESPOSITO",
        "track@lali-esposito.count",
        "laliADD.music"
    ), (
        "a002",
        "ANITTA",
        "track@anita.count",
        "anitaADD.music"
    ), (
        "a003",
        "LUIZA-SONZA",
        "track@luiza-sonza.count",
        "sonzaADD.music"
    ), (
        "a004",
        "DUA-LIPA",
        "track@dua-lipa.count",
        "dualipaADD.music"
    ), (
        "a005",
        "PK",
        "track@pk.count",
        "pkADD.music"
    );
SELECT * FROM users;

CREATE TABLE
    accounts(
        id TEXT PRIMARY KEY UNIQUE NOT NULL type TEXT
    )
CREATE TABLE
    products (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT NOT NULL
    );

SELECT * FROM products;

CREATE TABLE
    purchases (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        buyer TEXT NOT NULL,
        total_price REAL NOT NULL,
        created_at TEXT NOT NULL DEFAULT(DATETIME()),
        FOREIGN KEY (buyer) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

SELECT * FROM purchases;

DROP TABLE purchases;

CREATE TABLE
    purchases_products(
        purchase_id TEXT,
        product_id TEXT,
        quantity INTEGER,
        FOREIGN KEY (purchase_id) REFERENCES purchases(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

SELECT * FROM purchases_products;