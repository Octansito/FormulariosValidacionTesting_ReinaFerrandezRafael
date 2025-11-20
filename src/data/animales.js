"use strict";
//Lista de animales
const animales = {
  perros: [
    {
      id: 1,
      nombre: "Tobby",
      genero: "Macho",
      edad: "10 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4261/a_42611762361309.jpg",
      ubicacion: "Parque Río Verde, zona peatonal",
      tamaño: "Mediano - grande",
      chip: "Sí",
      numChip: "ES7A-93K2-LF82",
      descripcion:
        "Perro de mirada noble y carácter equilibrado. Es fuerte, fiel y muy sociable con las personas. Perfecto para familias que busquen un compañero leal, cariñoso y con ganas de formar parte de un hogar donde recibir y dar mucho amor.",
      raza: "Tipo American Staffordshire / Mestizo similar",
    },
    {
      id: 2,
      nombre: "Dumbo",
      genero: "Hembra",
      edad: "12 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_3938/a_39381752000737.jpg",
      ubicacion: "Camino Viejo de Catral, zona del polígono",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES4P-11XZ-9K72",
      descripcion:
        "Perra mayor con un corazón enorme y un carácter increíblemente dulce. Le encanta la compañía humana y disfruta de cada caricia. Ideal para un hogar tranquilo que quiera ofrecerle una jubilación feliz llena de cariño y cuidados. Es agradecida, noble y muy tierna.",
      raza: "Mestizo tipo pastor",
    },
    {
      id: 3,
      nombre: "Rocky",
      genero: "Macho",
      edad: "5 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4390/a_43901758462904.jpg",
      ubicacion: "Camino San Isidro, zona de naves",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES9M-44QZ-2T81",
      descripcion:
        "Perro joven, afectuoso y con una personalidad tranquila. Aunque al principio pueda parecer tímido, se acerca con mucha dulzura cuando siente confianza. Perfecto para un hogar que quiera un compañero noble, calmado y muy agradecido. Se adapta muy bien a nuevos ambientes.",
      raza: "Mestizo",
    },
    {
      id: 4,
      nombre: "Kira",
      genero: "Hembra",
      edad: "6 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4225/a_42251744224273.jpg",
      ubicacion: "Calle Molino Norte, zona urbanizaciones",
      tamaño: "Mediano",
      chip: "No",
      numChip: "",
      descripcion:
        "Perra sensible y muy fiel, con una nobleza que se nota en su mirada. Es tranquila, observador y necesita un hogar donde sentirse segura. Con cariño, se convierte en un perro muy dependiente y agradecido. Ideal para personas que busquen un compañero especial y leal.",
      raza: "Mestizo podenco",
    },
    {
      id: 5,
      nombre: "Zeus",
      genero: "Macho",
      edad: "2 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_3663/a_36631746962651.jpg",
      ubicacion: "Camino del Saladar, zona descampado",
      tamaño: "Grande",
      chip: "Sí",
      numChip: "ES3V-77PL-0H94",
      descripcion:
        "Perro adorable, alegre y sociable que disfruta cada momento con las personas. Tiene buen carácter, es inteligente y siempre está dispuesto a recibir cariño. Perfecto para familias activas que busquen un perro noble, cariñoso y muy agradecido, que llenará la casa de alegría.",
      raza: "American Bully",
    },
  ],
  gatos: [
    {
      id: 6,
      nombre: "Luffy",
      genero: "Macho",
      edad: "5 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4444/a_44441762532025.jpg",
      ubicacion: "Calle Los Cipreses, zona residencial",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES9K-33LM-7P41",
      descripcion:
        "Gato muy cariñoso, juguetón y sociable. Luffy es un compañero ideal para cualquier familia: le encanta la compañía humana, se adapta bien a los hogares y muestra un carácter dulce y agradecido. Perfecto para quienes busquen un gato noble, activo y lleno de ternura.",
      raza: "Mestizo tipo europeo bicolor",
    },
    {
      nombre: "Curro",
      genero: "Macho",
      edad: "3 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_3102/a_31021737768303.jpg",
      ubicacion: "Calle Los Naranjos, zona residencial",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES8K-22RM-7F51",
      descripcion:
        "Gato atigrado de ojos verdes, muy expresivo y con gesto juguetón sacando la lengua. Pelaje corto y bien cuidado, postura relajada y comportamiento sociable.",
      raza: "Gato europeo",
      id: 7,
    },
    {
      id: 8,
      nombre: "Botas",
      genero: "Macho",
      edad: "7 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4403/a_44031759084574.jpg",
      ubicacion: "Avenida del Prado, zona de chalets",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES5L-90TZ-3K18",
      descripcion:
        "Gato de pelaje largo y suave, muy cariñoso y sociable. Tiene unos ojos dorados preciosos y una expresión dulce que enamora. Es tranquilo, disfruta de la compañía humana y es perfecto como compañero para un hogar donde quieran un gato afectuoso y noble.",
      raza: "Mestizo tipo bosque de Noruega / europeo de pelo largo",
    },
    {
      id: 9,
      nombre: "Magdalena",
      genero: "Hembra",
      edad: "1 año",
      imagen:
        "https://protectorabaix.org/imas/animales/_4300/a_43001749660808.jpg",
      ubicacion: "Calle Olmos, zona centro",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES7Q-14MP-8Z32",
      descripcion:
        "Gata atigrada preciosa, con un pelaje brillante y muy llamativo. Aunque aparece tranquila y observadora, es una gata noble que solo necesita un hogar donde sentirse segura. Ideal para familias que quieran una compañera calmada, limpia y con carácter dulce. Con un poquito de cariño, se convierte en un gato muy fiel y agradecido.",
      raza: "Gato europeo común",
    },
    {
      id: 10,
      nombre: "Misu",
      genero: "Hembra",
      edad: "2 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4220/a_42201747663392.jpg",
      ubicacion: "Barrio San Pascual, zona parque",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES6V-55KT-2M09",
      descripcion:
        "Gata tricolor preciosa, con una carita muy expresiva y un carácter encantador. Es curiosa, dulce y se acerca con confianza. Perfecta para un hogar que busque una compañera tranquila, limpia y muy cariñosa. Su mirada tierna y su personalidad noble hacen que sea facilísima de querer.",
      raza: "Mestiza",
    },
    {
      id: 11,
      nombre: "Tom",
      genero: "Macho",
      edad: "4 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4195/a_41951746962795.jpg",
      ubicacion: "Urbanización La Palmera, zona ajardinada",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES2H-83LP-6W41",
      descripcion:
        "Gato de pelaje dorado muy suave, con mirada tranquila y expresiva. Es un gato observador, noble y de carácter equilibrado. Ideal para un hogar que busque un compañero calmado, limpio y muy cariñoso cuando coge confianza. Es un gato fácil de manejar y perfecto para una familia que quiera un amigo sereno y afectuoso.",
      raza: "Europeo común carey",
    },
    {
      id: 12,
      nombre: "Nina",
      genero: "Hembra",
      edad: "3 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4337/a_43371757013778.jpg",
      ubicacion: "Calle Jardines del Sur, zona tranquila",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES9T-61KP-4B20",
      descripcion:
        "Gata tricolor preciosa, con un pelaje muy limpio y unos ojos amarillos que enamoran. Es una gata dulce, curiosa y muy tranquila dentro de casa. Le encanta estar cerca de las personas y es una compañera ideal para quien quiera una gata cariñosa, educada y muy buena. Perfecta para cualquier familia que busque una amiga tranquila y afectuosa.",
      raza: "Mestiza tipo europeo tricolor",
    },
    {
      id: 13,
      nombre: "Cleo",
      genero: "Hembra",
      edad: "15 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4421/a_44211760638368.jpg",
      ubicacion: "Plaza Mayor, zona arbolada",
      tamaño: "Mediano",
      chip: "No",
      numChip: "",
      descripcion:
        "Gata atigrada muy simpática, con unos ojos verdes preciosos y una expresión dulce. Es sociable, se acerca con confianza y disfruta de la compañía humana. Ideal para un hogar que busque una compañera tranquila, cariñosa y muy agradecida. Perfecto para familias que quieran un gato noble y fácil de querer.",
      raza: "Mestizo tipo europeo",
    },
    {
      id: 14,
      nombre: "Pistacho",
      genero: "Macho",
      edad: "3 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4436/a_44361761417177.jpg",
      ubicacion: "Calle Ventorrillo, zona residencial",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES4W-73KL-9P12",
      descripcion:
        "Gato blanco y negro con una carita muy especial y expresiva. Es un gato dulce, observador y con un carácter tranquilo. Ideal para un hogar que busque un compañero cariñoso, limpio y muy noble. Se adapta bien y crea un fuerte vínculo con quienes le dan cariño.",
      raza: "Mestizo tipo europeo",
    },
  ],
  adoptados: [
    {
      id: 15,
      nombre: "Leo",
      genero: "Macho",
      edad: "17 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4282/a_42821748367462.jpg",
      ubicacion: "Calle San Marcos, zona tranquila",
      tamaño: "Mediano",
      chip: "No",
      numChip: "",
      descripcion:
        "Gata blanca y negra de mirada dulce y tranquila. Aunque al principio pueda mostrarse tímida, es una gatita noble que solo necesita un hogar donde sentirse segura. Ideal para una familia que quiera darle una segunda oportunidad a una compañera tranquila, agradecida y muy fácil de querer. Con cariño y paciencia, se convierte en una gata muy fiel.",
      raza: "Mestiza tipo europeo",
    },
    {
      id: 16,
      nombre: "Oreo",
      genero: "Macho",
      edad: "7 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_3918/a_39181713285770.jpg",
      ubicacion: "Calle Río Segura, zona de viviendas",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES1J-84TM-2Q67",
      descripcion:
        "Gato bicolor muy elegante, con una expresión dulce y tranquila. Es una gata sociable, educada y muy limpia, perfecta para convivir en un hogar familiar. Le encanta observarlo todo y se adapta fácilmente a nuevos entornos. Ideal para quien busque una compañera calmada, cariñosa y muy agradecida.",
      raza: "Mestiza tipo europeo bicolor",
    },
    {
      id: 17,
      nombre: "Tron",
      genero: "Macho",
      edad: "12 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_2854/a_28541676287543.jpg",
      ubicacion: "Camino de las Viñas, zona rural",
      tamaño: "Grande",
      chip: "Sí",
      numChip: "ES7P-33KL-8V10",
      descripcion:
        "Perro de aspecto noble y muy expresivo, con un carácter cariñoso y alegre. Es sociable, inteligente y disfruta muchísimo de la compañía humana. Ideal para una familia activa que busque un compañero leal, protector y muy agradecido. Su mirada y su actitud dulce hacen que sea imposible no quererlo.",
      raza: "Meztizo Pastor Malinois / Pastor Alemán",
    },
    {
      id: 18,
      nombre: "Sombra",
      genero: "Hembra",
      edad: "2 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4124/a_41241753809280.jpg",
      ubicacion: "Camino del Molino, zona vecinal",
      tamaño: "Mediano",
      chip: "No",
      numChip: "",
      descripcion:
        "Gata negra preciosa, de ojos amarillos intensos y carácter extremadamente dulce. Le encanta tumbarse cerca de las personas y disfrutar de las caricias. Es tranquila, noble y muy cariñosa cuando coge confianza. Ideal para un hogar que busque un compañero fiel, calmado y muy agradecido. Perfecto para convivir en familia y recibir todo el amor que merece.",
      raza: "Mestizo tipo europeo de pelo corto",
    },
    {
      id: 19,
      nombre: "Luna",
      genero: "Hembra",
      edad: "2 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4288/a_42881752771453.jpg",
      ubicacion: "Camino de la Ermita, zona de campo",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES6R-12KP-7B94",
      descripcion:
        "Perra blanca encantadora, con una expresión alegre y noble. Es muy sociable, cariñosa y siempre dispuesta a recibir mimos. Tiene una energía equilibrada: disfruta de los paseos, pero también sabe relajarse y estar tranquila. Ideal para una familia que busque una compañera fiel, buena y agradecida. Su mirada dulce lo dice todo: solo quiere un hogar donde dar y recibir cariño.",
      raza: "Mestizo tipo pastor / terrier",
    },
    {
      id: 20,
      nombre: "Nube",
      genero: "Macho",
      edad: "5 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4200/a_42001741459770.jpg",
      ubicacion: "Calle Mayor, zona histórica",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES6M-81KP-4V33",
      descripcion:
        "Nube es un gato tranquilo, dulce y extremadamente noble. Tiene un pelaje crema muy suave y una mirada tierna que derrite a cualquiera. Le encanta la calma del hogar, es limpio, educado y se adapta muy bien a la convivencia. Perfecto para familias que busquen un compañero cariñoso, sereno y muy agradecido. Es un gato que crea un vínculo muy especial con quienes le ofrecen amor y seguridad.",
      raza: "Mestizo tipo europeo ",
    },
    {
      id: 21,
      nombre: "Tiger",
      genero: "Macho",
      edad: "1 año",
      imagen:
        "https://protectorabaix.org/imas/animales/_4442/a_44421762197789.jpg",
      ubicacion: "Avenida del Palmeral, zona residencial",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES3J-67LP-1A90",
      descripcion:
        "Tiger es un gato joven, dulce y muy sociable. Tiene un pelaje naranja precioso y una personalidad tranquila y cariñosa. Le encanta estar acompañado y se adapta fácilmente a los hogares. Ideal para una familia que busque un compañero juguetón, noble y muy agradecido. Perfecto para convivir con otros animales y personas.",
      raza: "Mestizo tipo europeo",
    },
    {
      id: 22,
      nombre: "Nala",
      genero: "Hembra",
      edad: "1 año",
      imagen:
        "https://protectorabaix.org/imas/animales/_4143/a_41431737659634.jpg",
      ubicacion: "Camino de Las Lomas, zona rural",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES4V-29KT-8M62",
      descripcion:
        "Nala es una perrita joven, muy dulce y noble. Tiene una mirada tierna que refleja lo buena que es. Es cariñosa, tranquila y agradecida; solo necesita un hogar donde sentirse segura y querida. Perfecta para familias que busquen una compañera fiel, sensible y llena de amor por dar.",
      raza: "Mestiza tipo pastor / mastín",
    },
    {
      id: 23,
      nombre: "Mishka",
      genero: "Hembra",
      edad: "4 años",
      imagen:
        "https://protectorabaix.org/imas/animales/_4409/a_44091759615069.jpg",
      ubicacion: "Camino del Altillo, zona rural",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES8L-44KP-1Q30",
      descripcion:
        "Gata de pelaje largo y blanco, muy dulce y sociable. Tiene una carita adorable y una mirada curiosa que enamora al instante. A pesar de estar en exterior, demuestra ser un gato cariñoso, confiado y deseoso de recibir atención. Ideal para una familia que quiera un compañero tierno, elegante y muy agradecido. Con un hogar estable, será un gato extremadamente amoroso.",
      raza: "Mestizo tipo angora turco / europeo",
    },
    {
      id: 24,
      nombre: "Magdalena",
      genero: "Hembra",
      edad: "1 año",
      imagen: "https://protectorabaix.org/ficha-4446",
      bicacion: "Calle La Higuera, zona residencial",
      tamaño: "Mediano",
      chip: "Sí",
      numChip: "ES6B-27QL-5H11",
      descripcion:
        "Gata joven muy cariñoso y sociable. Tiene un pelaje precioso blanco y atigrado, y una mirada llena de curiosidad y dulzura. Es un gato equilibrado, limpio y perfecto para convivir en casa. Le encanta estar acompañado y disfrutar de las caricias. Ideal para una familia que busque un compañero noble, tierno y agradecido.",
      raza: "Mestizo tipo europeo",
    },
  ],
};

export default animales;
