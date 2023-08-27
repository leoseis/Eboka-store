import sqlite3
conn = sqlite3.connect('facebook.db')
cursor = conn.cursor()

cursor.execute("CREATE TABLE Users (Id INTEGER, Email TEXT, Password TEXT, Friends INTEGER)")

cursor.execute("INSERT INTO Users VALUES(1, 'ca@avengers.com', 'iAmOld', 65)")

conn.commit()
conn.close()
