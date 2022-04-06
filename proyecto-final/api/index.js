const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('express/lib/response');
const jsonParser = bodyParser.json();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('db.sqlite');

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('');
});

app.get('/equipos', (req, res) => {
  console.log('consultando equipos');
  db.all('select * from equipo order by nombre', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('equipos:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/equipo/:id', (req, res) => {
  console.log('consultando equipo id', req.params.id);
  db.get('select * from equipo where id = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('equipo:\n', rows);
      res.send(rows);
    }
  });
});

app.put('/equipo/:id', jsonParser, (req, res) => {
  console.log('actualizando equipo:\n', req.body);
  db.run(
    `update equipo set 
    fecha_afiliacion = ?, 
    capitan = ?, 
    descripcion = ?, 
    email_contacto = ?, 
    telefono_contacto = ? 
    where id = ?`,
    [
      req.body.fecha_afiliacion,
      req.body.capitan,
      req.body.descripcion,
      req.body.email_contacto,
      req.body.telefono_contacto,
      req.params.id
    ],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else {
        console.log(`Equipo actualizado ok`);
        let result = {};
        result.ok = true;
        res.send(result);
      }
    });
});

app.get('/equipo/:id/jugadores', (req, res) => {
  console.log('consultando jugadores del equipo id', req.params.id);
  db.all('select * from jugador where equipo = ? order by nombre', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('jugadores:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/jugadores', (req, res) => {
  console.log('consultando jugadores');
  db.all('select * from jugador', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('jugadores:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/jugador/:id', (req, res) => {
  console.log('consultando jugador id', req.params.id);
  db.get('select * from jugador where id = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('jugador:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/jugador/:id/estadisticas', (req, res) => {
  console.log('consultando estadísticas del jugador id', req.params.id);
  db.get('select * from estadisticas_jugador where jugador = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('estadísticas:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/programacion-partidos', (req, res) => {
  console.log('consultando programación de partidos');
  db.all('select * from programacion_partidos order by fecha_hora', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('programación:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/programacion/:id', (req, res) => {
  console.log('consultando programación id', req.params.id);
  db.get('select * from programacion_partidos where id = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('programación:\n', rows);
      res.send(rows);
    }
  });
});

app.delete('/programacion/:id', (req, res) => {
  console.log('borrando programación id', req.params.id);
  db.get('delete from programacion_partidos where id = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('programación borrada ok');
      let result = {};
      result.ok = true;
      res.send(result);
    }
  });
});

app.put('/programacion/:id', jsonParser, (req, res) => {
  console.log('actualizando programación id', req.params.id, req.body);
  db.run(
    `update programacion_partidos set 
    equipo_local = ?, 
    equipo_visita = ?, 
    cancha = ?, 
    fecha_hora = ?, 
    arbitro = ? 
    where id = ?`,
    [
      req.body.equipo_local,
      req.body.equipo_visita,
      req.body.cancha,
      req.body.fecha_hora,
      req.body.arbitro,
      req.params.id
    ],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else {
        console.log(`Programación actualizada ok`);
        let result = {};
        result.ok = true;
        res.send(result);
      }
    });
});

app.post('/programacion', jsonParser, (req, res) => {
  console.log('nueva programación', req.body);
  db.run(
    `insert into programacion_partidos (equipo_local, equipo_visita, cancha, fecha_hora, arbitro) 
    values (?, ?, ?, ?, ?)`,
    [
      req.body.equipo_local,
      req.body.equipo_visita,
      req.body.cancha,
      req.body.fecha_hora,
      req.body.arbitro
    ],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else {
        console.log(`Programación creada ok con id`, this.lastID);
        let result = {};
        result.ok = true;
        res.send(result);
      }
    });
});

app.get('/cancha/:id', (req, res) => {
  console.log('consultando cancha id', req.params.id);
  db.get('select * from cancha where id = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('cancha:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/canchas', (req, res) => {
  console.log('consultando canchas');
  db.all('select * from cancha order by nombre', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('canchas:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/arbitro/:id', (req, res) => {
  console.log('consultando arbitro id', req.params.id);
  db.get('select * from arbitro where id = ?', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('arbitro:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/arbitros', (req, res) => {
  console.log('consultando arbitros');
  db.all('select * from arbitro order by nombre', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('arbitros:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/clasificacion', (req, res) => {
  console.log('consultando clasificacion');
  db.all('select * from clasificacion order by puntos desc', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('clasificacion:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/partidos/:ronda', (req, res) => {
  console.log('consultando partidos ronda', req.params.ronda);
  db.all('select * from partidos where ronda = ? order by fecha', [req.params.ronda], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('partidos:\n', rows);
      res.send(rows);
    }
  });
});

app.get('/rondas', (req, res) => {
  console.log('consultando rondas');
  db.all('select distinct(ronda) from partidos order by ronda', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('rondas:\n', rows);
      let rondas = [];
      for (let r of rows) {
        rondas.push(r.ronda);
      }
      console.log(rondas);
      res.send(rondas);
    }
  });
});

app.get('/frase-del-dia', (req, res) => {
  console.log('consultando frase del dia');
  db.get('select frase from frase_diaria order by random() limit 1', [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log('frase:\n', rows);
      res.send(rows);
    }
  });
});

/**************************************************/
/**************************************************/
/**************************************************/
app.listen(port, () => {
  console.log('--------------------');
});
