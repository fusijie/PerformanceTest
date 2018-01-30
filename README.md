# PerformanceTest
---

## 1.Setup

##### 1. Create mysql table.

* execute **mysql/create_performance_test_tabel.sql** to setup mysql table.

##### 2. Setup server.

* run `node server/index.js`, please run `npm install` before that.
* the mysql config file is **config.json**.
* the server port is **30000**.

##### 3. Setup web server.

* run `node echarts/index.js`, please run `npm install` before that.
* the server port is **30001**.

## 2.