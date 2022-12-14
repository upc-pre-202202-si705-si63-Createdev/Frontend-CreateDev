
module.exports = function () {
  var data = {
    Usuarios: [
      {
        id: 1,
        emailUsuarios: "knnth2312@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Kenneth",
        lastnameUsuarios: "Guzman Benavidez",
        telefonoUsuarios: "879233892",
        direccionUsuarios: "Av. Benavides 2340, Surco"
      }, {
        id: 2,
        emailUsuarios: "sebas@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Sebastian",
        lastnameUsuarios: "Torres",
        telefonoUsuarios: "35346234",
        direccionUsuarios: "av. Cesar Canevaro 399"
      }, {
        id: 3,
        emailUsuarios: "petercasanova@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Peter",
        lastnameUsuarios: "Casanova",
        telefonoUsuarios: "567567567",
        direccionUsuarios: "Av. Caminos del Inca 1404"
      }, {
        id: 4,
        emailUsuarios: "sgodoy@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "sergio",
        lastnameUsuarios: "godoy",
        telefonoUsuarios: "939870566",
        direccionUsuarios: "calle vilcanota 160"
      }, {
        id: 5,
        emailUsuarios: "chupetintrujillo@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Chupetin",
        lastnameUsuarios: "Trujillo",
        telefonoUsuarios: "43534656",
        direccionUsuarios: "Prolongación Primavera 2390"
      }, {
        id: 6,
        emailUsuarios: "pcastillito@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Peter",
        lastnameUsuarios: "Castle Terrores",
        telefonoUsuarios: "34242343",
        direccionUsuarios: "pasaje Sarratea 240"
      }, {
        id: 7,
        emailUsuarios: "sideral@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "sideral",
        lastnameUsuarios: "carrion",
        telefonoUsuarios: "324242453",
        direccionUsuarios: "comas cuadra 20"
      }, {
        id: 8,
        emailUsuarios: "cookie_pounds@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Grecia",
        lastnameUsuarios: "Ordoñez",
        telefonoUsuarios: "56465463",
        direccionUsuarios: "Larcomar 2343"
      }, {
        id: 9,
        emailUsuarios: "jhonny@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "jhonny",
        lastnameUsuarios: "deep",
        telefonoUsuarios: "987654321",
        direccionUsuarios: " Av. Washington"
      }, {
        id: 10,
        emailUsuarios: "kiara@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "kiara",
        lastnameUsuarios: "diaz",
        telefonoUsuarios: "65757557",
        direccionUsuarios: " Av. wilson cuadra 3"
      }, {
        id: 11,
        emailUsuarios: "bruno@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "bruno",
        lastnameUsuarios: "pinnasco",
        telefonoUsuarios: "345634534",
        direccionUsuarios: " Av. canal 4"
      }, {
        id: 12,
        emailUsuarios: "jorge@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "jorge",
        lastnameUsuarios: "curioso",
        telefonoUsuarios: "868768423",
        direccionUsuarios: " Av. las americas "
      }, {
        id: 13,
        emailUsuarios: "RamiroM2304@createdev.com",
        contrasenaUsuarios: "upc2022",
        nameUsuarios: "Ramiro",
        lastnameUsuarios: "Mezada",
        telefonoUsuarios: "45645645",
        direccionUsuarios: " Av. Colonial 334"
      }
    ],
    Artesanos: [
      {
        id: 1,
        informacion: "responsable, creativo, trabajador",
        provincia: "Lambayeque",
        Usuarios: {
          id: 1
        }
      }, {
        id: 2,
        informacion: "Soy un artesano que le gusta mucho diseñar artesanías  para hacer notar la variedad artistica de mi pais",
        provincia: "Huancayo",
        Usuarios: {
          id: 2
        }
      }, {
        id: 3,
        informacion: "Me gusta mi trabajo y disfruto crear artesanias para todos mi clientes",
        provincia: "La Libertad",
        Usuarios: {
          id: 3
        }
      }, {
        id: 4,
        informacion: "un gran artesano con habilidades unicas",
        provincia: "junin",
        Usuarios: {
          id: 4
        }
          }, {
        id: 5,
        informacion: "Hombre dedico al arte peruano con ganas de expandir su arte a todo el mundo",
        provincia: "Moquegua",
        Usuarios: {
          id: 5
        }
      }

      ],
      Tipo_Producto:[
        {
          id:1,
          tipo:"Artesania"
        },{
          id:2,
          tipo:"Disenio"
        }
      ],
      Producto:[
        {
          id:1,
          nombre:"Destello Boreal",
          descripcion:"modelo grande color naranja",
          stock:4,
          peso:7.00,
          precio_unitario:13.00,
          material:"madera",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"huanuco"     
        },{
          id:2,
          nombre:"Arte unico",
          descripcion:"modelo pequeño color rojizo oscuro",
          stock:6,
          peso:10.00,
          precio_unitario:18.00,
          material:"madera",
          fecha_creacion:"11/04/2022",
          lugar_fabricacion:"pasco"
        },{
          id:3,
          nombre:"mate-burilado4",
          descripcion:"bañado en oro color dorado",
          stock:1,
          peso:100.00,
          precio_unitario:250.00,
          material:"calabaza",
          fecha_creacion:"11/04/2022",
          lugar_fabricacion:"junin"
        },{
          id:4,
          nombre:"Dia Soleado",
          descripcion:"Mate burilado de forma ovalada, con colores amarillo, verde y azul",
          stock:10,
          peso:45.00,
          precio_unitario:23.00,
          material:"burilado",
          fecha_creacion:"10/08/2022",
          lugar_fabricacion:"libertad"
        },{
          id:5,
          nombre:"Una sola vez",
          descripcion:"Mate burilado de forma en forma de rosa, colores utilizados blanco, rojo y naranja",
          stock:16,
          peso:10.00,
          precio_unitario:27.00,
          material:"burilado",
          fecha_creacion:"10/09/2022",
          lugar_fabricacion:"Huancan"
        },{
          id:6,
          nombre:"Sol de primavera",
          descripcion:"Mate burilado de forma de basija, colores utilizados blanco, negro y amarillo",
          stock:5,
          peso:12.00,
          precio_unitario:29.00,
          material:"burilado",
          fecha_creacion:"05/09/2022",
          lugar_fabricacion:"Huancan"
        },{
          id:7,
          nombre:"mate-burilado-extra",
          descripcion:"modelo grande color rosado",
          stock:4,
          peso:7.00,
          precio_unitario:13.00,
          material:"madera",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"libertad"
        },{
          id:8,
          nombre:"mate-burilado dios",
          descripcion:"modelo bañado en arena rosada ",
          stock:4,
          peso:10.00,
          precio_unitario:180.00,
          material:"calabaza",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"piura"
        },{
          id:9,
          nombre:"mate-burilado dios",
          descripcion:"modelo bañado en arena rosada ",
          stock:4,
          peso:10.00,
          precio_unitario:18.00,
          material:"calabaza",
          fecha_creacion:"01/01/2022",
          lugar_fabricacion:"piura"
        },{
          id:10,
          nombre:"Mate burilado en fondo negro",
          descripcion:"En esta pieza se representan los paisajes andinos",
          stock:7,
          peso:10.00,
          precio_unitario:25.00,
          material:"burilado",
          fecha_creacion:"14/09/2022",
          lugar_fabricacion:"Acobamba"
        },{
          id:11,
          nombre:"Mate Selva Morado",
          descripcion:"En esta pieza se representan los animales de la selva",
          stock:2,
          peso:12.00,
          precio_unitario:200.00,
          material:"burilado",
          fecha_creacion:"04/07/2022",
          lugar_fabricacion:"Acobamba"
        },{
          id:12,
          nombre:"Mate Selva Virgen",
          descripcion:"En esta pieza se representa la flora de la selva peruana",
          stock:4,
          peso:14.00,
          precio_unitario:120.00,
          material:"burilado",
          fecha_creacion:"26/08/2022",
          lugar_fabricacion:"Acobamba"
        },{
          id:13,
          nombre:"Paseo del lago",
          descripcion:"Mate burilado de forma de vasija con tonos de azul claro y oscuro",
          stock: 10,
          peso:18.00,
          precio_unitario:20.00,
          material:"burilado",
          fecha_creacion:"07/04/2022",
          lugar_fabricacion:"Lambayeque"
        },{
          id:14,
          nombre:"Amanecer en los andes",
          descripcion:"Mate burilado de forma de tazón de colores cálidos con tonos oscuros",
          stock:5,
          peso:10.00,
          precio_unitario:25.00,
          material:"burilado",
          fecha_creacion:"08/02/2022",
          lugar_fabricacion:"Lambayeque"
        },{
          id:15,
          nombre:"Bastion del inca",
          descripcion:"Mate burilado de forma de tazón con colores monoliticos",
          stock:10,
          peso:10.00,
          precio_unitario:35.00,
          material:"burilado",
          fecha_creacion:"16/06/2022",
          lugar_fabricacion:"Lambayeque"}
    ],
    Clientes: [
      {
        Usuarios: {
          id: 6
        },
        dni: 56564563
      }, {
        Usuarios: {
          id: 7
        },
        dni: 43523123
      }, {
        Usuarios: {
          id: 8
        },
        dni: 56342345
      }, {
        Usuarios: {
          id: 9
        },
        dni: 54622111
      }, {
        Usuarios: {
          id: 10
        },
        dni: 32455323
      }, {
        Usuarios: {
          id: 11
        },
        dni: 34543225
      }, {
        Usuarios: {
          id: 12
        },
        dni: 67844234
      },
      {
        Usuarios: {
          id: 13
        },
        dni: 68744555
      }
    ],
    Tipo_Comprobante: [
      {
        id: 1,
        tipo: "boleta"
      }, {
        id: 2,
        tipo: "factura"
      }
    ],
    
    Solicitud_Diseño: [
      {
        id: 1,
        Clientes: {
          Usuarios: {
            id: 3
          }
        },
        Artesanos: {
          Usuarios: {
            id: 7
          }
        },
        Pedido: {
          id: 1
        },
        fecha: "23/03/2022"
      }
    ],
    Pedido: [
      {
        id: 101,
        estado: "Aceptado",
        nombre: "Catedral de Lima",
        caracteristicas: "Me gustaria que tenga colores intensos como el rojo y que resalte mucho los bordes negro"
      },
      {
        id: 102,
        estado: "Pendiente",
        nombre: "La dama pintada",
        caracteristicas: "Quisiera que tenega tonos rojos y morado y representen a una mujer"
      },
      {
        id: 103,
        estado: "Pendiente",
        nombre: "Hermanos del lago",
        caracteristicas: "Quiero que tenga diferentes tono de azul y celeste con niños en un lago jugando"
      },
      {
        id: 104,
        estado: "Rechazado",
        nombre: "Amanecer Rojo",
        caracteristicas: "Quiero un cielo rojo con toques de amarillo y naranja con gente gritando"
      },
      {
        id: 105,
        estado: "Aceptado",
        nombre: "Cueva de los amantes",
        caracteristicas: "Deseo que tenga colores calidos con tonos oscuros que simbolizen a una pereja"
      },
      {
        id: 106,
        estado: "Aceptado",
        nombre: "Trono del Inca",
        caracteristicas: "Quiero que sea monocromatico que muestre la silueta de un inca en su trono"
      }
    ],
    Compra: [
      {
        id: 1,
        nombre_Cliente: "Alexandra",
        cantidad_total: 1,
        precio_total: 23.00,
        peso_total: 5,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "23-04-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 2,
        nombre_Cliente: "Ramiro",
        cantidad_total: 4,
        precio_total: 128.00,
        peso_total: 10,
        Tipo_Comprobante: 2,
        fecha_cancelacion: "28-07-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 3,
        nombre_Cliente: "Felicia",
        cantidad_total: 2,
        precio_total: 56.00,
        peso_total: 8,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "15-07-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 4,
        nombre_Cliente: "Carlos",
        cantidad_total: 1,
        precio_total: 32.00,
        peso_total: 4,
        Tipo_Comprobante: 2,
        fecha_cancelacion: "11-02-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 5,
        nombre_Cliente: "Deysi",
        cantidad_total: 4,
        precio_total: 135.00,
        peso_total: 10,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "14-04-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 6,
        nombre_Cliente: "Adrian",
        cantidad_total: 5,
        precio_total: 160.00,
        peso_total: 15,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "12-03-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 7,
        nombre_Cliente: "Peter",
        cantidad_total: 1,
        precio_total: 30.00,
        peso_total: 3,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "19-09-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 8,
        nombre_Cliente: "Alonso",
        cantidad_total: 8,
        precio_total: 180.00,
        peso_total: 18,
        Tipo_Comprobante: 2,
        fecha_cancelacion: "20-09-2022",
        Solicitud_Diseño: 0
      },
      {
        id: 9,
        nombre_Cliente: "Stiven",
        cantidad_total: 3,
        precio_total: 63.00,
        peso_total: 6,
        Tipo_Comprobante: 1,
        fecha_cancelacion: "12-04-2022",
        Solicitud_Diseño: 0
      }
    ],
    Detalle_Compra: [
      {
        id: 1,
        Producto: {
          id: 14
        },
        cantidad: 1,
        Compra: {
          id: 1
        }
      }
    ]
  }
  return data
}
