using Juegardos.Website.Data;

namespace Juegardos.Website.Services;

public class GameService : IGameService
{
    private readonly List<Game> _games = new()
    {
        new() { Category = GameCategoryOptions.Action, Name = "Subway Clash 2", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/69357/webp_subway-clash-200x120.webp?1638519599", Description = "Tu próxima misión está a punto de comenzar en Subway Clash 2. Coge tu equipo, revisa tu armamento y dirígete a la batalla en este emocionante juego en línea. En este juego de acción, tú y tu equipo tendréis que asaltar un antiguo depósito de metro en Moscú que sirve de escondite actual a los Testigos de Illyich. Se trata de una secta de fanáticos religiosos liderada por el infame terrorista Bonch-Buyevich, cuyo objetivo es detonar una serie de bombas sucias en túneles del metro de toda la ciudad.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Archers.io", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/69447/webp_Archers-io-200x120.webp?1639488403", Description = "Una guerra está a punto de comenzar en Archers.io. ¿Vencerás a tus oponentes o te harán morder el polvo en este emocionante juego .io? Desafía a otros jugadores de todo el mundo en este juego de peleas mientras tomas el control de un solo arquero. ¡Necesitará hacer amigos y rápido! Reúne a tantos arqueros como puedas antes de intentar acabar con los clanes de los otros jugadores.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Angry Sharks", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/25230/jpeg_200X120_177873_1623330185.jpg?1630790870", Description = "Son grandes, malos, ¡y tienen muy malas pulgas! ¡Prepárate para unirte a ellos en Angry Sharks! ¡Los peces gordos de este juego de tiburones son de armas tomar! Acompáñalos mientras se comen todo lo que se les pone a tiro e intentan crecer aun más. ¡Tendrás que ayudarlos a evitar peces globo, formaciones de coral afiladas y mucho bidones de material tóxico!", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Miami Crime Simulator 3D", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24226/jpeg_200X120_175074_1553002332.jpg?1630789565", Description = "Las calles de esta archiconocida metrópolis están a rebosar de delincuentes. Ayuda a poner fin a la oleada de crímenes en Miami Crime Simulator 3D. Solo tú puedes cazar y eliminar a todos los criminales que se dedican a aterrorizar a los ciudadanos. ¡Y tienes que conseguirlo sin ayuda de nadie! Defiéndete con pistolas, granadas y otras armas alucinantes en esta locura de juego de acción.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Boxing Random", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/25249/webp_200X120_177892_1624970487.webp?1630790892", Description = "¡Prepárate para pelear en Boxing Random! ¿Te convertirás en el próximo rey o reina del ring en este loco juego de deportes? Lucharás contra tus oponentes en todas partes, desde gimnasios hasta cimas de montañas nevadas. ¡Tampoco usarás solo tus puños! ¡Hay al menos algunas armas que aparecerán mientras juegas este juego de acción retro!", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Combat Strike 2", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/22837/webp_200X120_170449_1502203702.webp?1630787765", Description = "Únete al equipo y ponte manos a la obra en este juego de disparos en primera persona. Tendrás que perseguir y eliminar a tus rivales en una serie de arenas mortales. En cada misión podrás usar una gran variedad de armas alucinantes para superar los desafíos en templos antiguos, ubicaciones exóticas, ¡y hasta edificios de oficinas y un casino en Las Vegas!", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Stree Rage Fighter", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23831/webp_200X120_173556_1540545884.webp?1630789035", Description = "¡La única forma de dominar estas calles es con tus propios puños! Ah, y con tus pies... y tal vez con algunos cuchillos. Busca todo tipo de armas mientras luchas por recuperar la ciudad de una despiadada pandilla de forajidos en este juego de acción retro.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Squid Game 2", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/69379/webp_squid-game-2-200x120.webp?1638792139", Description = "Prepárate para más desafíos mortales en Squid Game 2. ¿Llegarás a la ronda final de este juego en línea basado en la popular serie de Netflix? Estás totalmente en la ruina, así que parece que tendrás que convertirte en un jugador de la próxima edición de El juego del calamar. Hay mucho dinero en efectivo que ganar, pero tendrás que llegar hasta el final de varias versiones increíblemente peligrosas de juegos infantiles populares.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Bullet Party", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24651/webp_200X120_176700_1567519486.webp?1630790123", Description = "¡De más está decir que esta fiesta será muy alocada y un poco peligrosa! ¿Cuánto tiempo lograrás sobrevivir cuando te enfrentes a jugadores de todo el mundo en este juego de disparos en primera persona? Participa en varias peleas para eliminarlos a todos. Hay ciertos objetivos que debes alcanzar en cada batalla repleta de acción.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Action, Name = "Short Life", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24115/webp_200X120_174643_1550669207.webp?1630789419", Description = "Este tipo valiente está intentando abrirse camino a través de una serie de peligrosas pistas de obstáculos en este intenso juego de acción. Cada vez se vuelven más peligrosas así que necesita de tu ayuda. Únete a él mientras salta por encima de cuchillas, esquiva barriles explosivos e intenta evitar pisar cualquier pincho superafilado!", Likes = 867, Dislikes = 12 },

        new() { Category = GameCategoryOptions.Adventure, Name = "Uphill Rush 8", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/61098/webp_200X120_178179_1634906266.webp?1635516245", Description = "Es una nueva y emocionante entrega de la serie de juegos Uphill Rush. Elige un flotador y deslízate por los toboganes más locos del parque acuático. En este juego de aventuras, puedes recorrer los toboganes más extravagantes con unos flotadores todavía más estrambóticos. Trata de guardar el equilibrio, pues caerte de uno de estos toboganes tan imponentes podría ser fatal.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Impostor", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/25083/webp_200X120_177703_1611403044.webp?1630790684", Description = "Alguien está haciendo fechorías en el corazón de este laboratorio. En Impostor, ¡ese alguien eres tú! Tu objetivo es sembrar el caos por todas partes en este juego de supervivencia multijugador inspirado en el popular juego para dispositivos móviles Among Us. Ataca a tus compañeros de trabajo, escabúllete a través de conductos de ventilación y sabotea distintos equipos. ", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Adam and Eve: GO 3", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/25265/webp_200X120_177908_1624369182.webp?1630790911", Description = "Únete al habilidoso hombre de las cavernas en otra increíble aventura en Adam and Eve: GO 3. En esta entrega de la divertida y desafiante serie de Adam and Eve, Adam va en busca de montones de fruta deliciosa. ¡Tendrás que ayudarle a idear soluciones inteligentes mientras se ocupa de exploradores hambrientos, serpientes peligrosas y otros hombres de las cavernas inmersos en sus propias aventuras!", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Blob Giant 3D", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/25293/webp_200X120_177942_1624970580.webp?1630790944", Description = "Este tipo gelatinoso está decidido a seguir creciendo en Blob Giant 3D. ¿Puedes ayudarlo a alcanzar sus metas en este juego de correr de gigantes? Está decidido a convertirse en una masa lo más grande posible en este juego de plataformas 3D. ¡Acompáñalo mientras absorbe masas más pequeñas y corre hacia la línea de meta al final de cada nivel!", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Rex en Río", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24128/webp_200X120_174704_1550668897.webp?1630789436", Description = "¡Este tiranosaurio está listo para viajar Río! Pero no le interesa ir a la playa, ¡sino que prefiere pasar sus vacaciones devorando trabajadores para probar la comida local! Únete a este diabólico dinosaurio mientras destruye la famosa ciudad costera en este salvaje juego de acción.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Construcción", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23826/webp_200X120_173524_1540473820.webp?1630789029", Description = "En este juego en línea, puedes construir, diseñar y personalizar un mundo entero. Dale rienda suelta a tu imaginación mientras pruebas todas las herramientas, paisajes y otras funciones.", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Amazing Spider Police", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24202/webp_200X120_174982_1553698277.webp?1630789534", Description = "Este valiente policía combate enemigos en ambos lados de la ley en este alocado y delirante juego de acción. ¿Puedes ayudarlo a capturar criminales y policías mientras recorre la ciudad y se roba algún que otro auto?", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "World Crafts", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23796/webp_200X120_173420_1539938785.webp?1630788988", Description = "Ingresa a un mundo 3D repleto de maravillas en este juego en línea. ¡Puedes construirlo, personalizarlo y hacerlo tuyo! ¡Deja volar tu imaginación!", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Subway Surf", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23662/webp_200X120_172886_1536003916.webp?1630788815", Description = "¡Un oficial de tránsito está persiguiendo de cerca a este patinador! Por suerte, ¡el chico cuenta con una tabla voladora futurista! ¿Puedes ayudarlo a evitar que el policía lo envíe a prisión en este loco juego de skate en línea?", Likes = 867, Dislikes = 12 },
        new() { Category = GameCategoryOptions.Adventure, Name = "Fuerzas especiales", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24272/webp_200X120_175223_1554475025.webp?1630789624", Description = "Puedes atacar sin piedad a tus enemigos o defender tu territorio en este juego de disparos en primera persona. Sube a las colinas y prepárate para la batalla de tu vida mientras intentas derrotar a tus enemigos con una ametralladora.", Likes = 867, Dislikes = 12 },

        new() { Category = GameCategoryOptions.Beauty, Name = "Extreme Makeover", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/39340/webp_200X120_178066_1630404890.webp?1634219592", Description = "Hay una chica con estilo a la que le vendría muy bien tu ayuda en Extreme Makeover. Es hora de crear un nuevo e increíble look para ella en este genial juego en línea." },
        new() { Category = GameCategoryOptions.Beauty, Name = "Year Round Fashionista: Curly", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/61408/webp_200X120_178060_1630399468.webp?1637764582", Description = "¡Prepárate para 12 meses de estilismo en Year Round Fashionista: Curly! ¿Cuántos conjuntos increíbles puedes crear en este juego de diseño en línea? ¡Esta amante de la moda quiere encontrar ropa que vaya bien con su fabuloso pelo rizado! ¿Puedes ayudarla a crear un look impresionante para cada mes del año en este juego de moda?", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Boda de ensueño", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24185/webp_200X120_174929_1551966712.webp?1630789511", Description = "¡Ya es hora de que comience el casamiento de esta novia y está llegando muy tarde! Lo que es peor, perdió su vestido y accesorios. ¿Puedes ayudarla e encontrarlos rápidamente y a prepararse para el gran día en este juego de vestidos y objectos ocultos?", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Peinados de unicornio", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24456/webp_200X120_175931_1560946806.webp?1630789868", Description = "A esta chica le fascinan los unicornios y estuvo pensando hacerse un nuevo peinado. ¡Quiere uno que no sea nada convencional! ¿Podrías ayudarla a hacerse un peinado que sea totalmente mágico en este juego de cambio de imagen?", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Arte de pintura de uñas", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24013/webp_200X120_174271_1547025289.webp?1630789284", Description = "Puedes crear cientos de estilos increíbles en el salón de manicura en este juego de maquillaje en línea. Dale rienda suelta a tu imaginación mientras experimentas diferentes tipos y colores de pinturas para uñas. Pero primero, deberás darle a tus clientes una rápida manicura.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Diseñadora de zapatos", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24042/webp_200X120_174370_1547556711.webp?1630789322", Description = "Esta atareada diseñadora tiene todo tipo de proyectos en los que trabajar. Necesita tu ayuda en este juego de diseño en línea. Ingresa a su estudio donde está a punto de comenzar a crear su próxima colección increíble de zapatos. ¡Puedes darle algunos consejos mientras diseña desde clásicos zapatos de tacones a zapatos completamente alocados!", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Moda de celebridades", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24268/webp_200X120_175204_1554722248.webp?1630789619", Description = "Ya es hora de que estas cinco celebridades asistan a un excluvio evento de moda. Quieres verse espléndidas en este juego de vestidos. ¿puedes ayudar a cada una con su peinado, maquillaje y vestido?", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Supermuñeca: transformación", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24581/webp_200X120_176419_1565782009.webp?1630790030", Description = "Esta famosa superheroína quiere probar un fabuloso cambio de imagen. ¿Podrás crear un nuevo estilo tan extraño como fantástico en este increíble juego de cambio de imagen? ¡Pero primero necesita deshacerse de unos molestos granitos!", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Pintura facial", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24425/webp_200X120_175827_1560418535.webp?1630789828", Description = "Es hora de que esta chica a la moda cree un nuevo estilo en este juego de maquillaje. Probará algunos productos geniales para pintarse la cara de forma alocada. También quiere probarse muchas prendas a la moda.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Beauty, Name = "Princesas: concurso de moda", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/22644/webp_200X120_169997_1498053263.webp?1630787519", Description = "¿Cuál de todas estas famosas princesas ganará el concurso? Averigua quién merece ser la amante de la moda más grandiosa en este juego de vestir para chicas.", Likes = 5646, Dislikes = 31 },

        new() { Category = GameCategoryOptions.Races, Name = "Evo-F2 Racing", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24330/webp_200X120_175458_1557318850.webp?1630789701", Description = "En este increíble juego de carreras 3D, puedes probar diferentes vehículos. ¡Usa un genial auto deportivo o prueba acelerar al máximo una vieja camioneta o hasta una pala mecánica!", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Rally Point 4", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/57037/webp_200X120_178157_1634137649.webp?1634799687", Description = "¡Alcanza la máxima velocidad en Rally Point 4! ¿Cómo de rápido llegarás a la meta en este emocionante juego en línea? Tendrás que moverte rápido para vencer al reloj en este juego de carreras. Supera los puntos de control mientras intentas llegar a la meta en cada zona al volante de coches, camiones y demás. ¡Irás a toda velocidad por carreteras que te llevarán a través de desiertos y selvas, así como a lo largo de los bordes de los acantilados de una montaña cubierta de nieve!", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Speed Boat Extreme Racing", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/69291/webp_200X120_178224_1637596600.webp?1638186079", Description = "Alcanza la máxima velocidad y despega de las rampas en Speed Boat Extreme Racing. ¿Será tu embarcación la primera en cruzar la línea de meta en este emocionante juego en línea? Toma el control de una de las diferentes lanchas superrápidas al comenzar cada intensa competición. Puedes enfrentarte a un amigo o al ordenador en este juego de carreras en 3D.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Highway Bike Simulator", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24675/webp_200X120_176798_1569327787.webp?1630790155", Description = "Podrás correr a toda velocidad por geniales autopistas y superar a cualquier vehículo que intente retrasarte en este juego de conducir en 3D. Súbete a una motocicleta y prepárate para recorrer fantásticos desiertos, bosques y valles nevados. Puedes probar cuatro motocicletas distintas, y hay muchos modos de juego tan diferentes como desafiantes que pondrás a prueba tus habilidades.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Camiones monstruos extremos", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24601/webp_200X120_176485_1565781519.webp?1630790056", Description = "En este juego de carreras en 3D te esperan cinco fabulosos camiones monstruos distintos. Siéntate al volante para conducir a toda velocidad por un desierto y luego un bosque lleno de rampas, colinas y otros obstáculos tan extremos como alocados. Hay decenas de pistas en ambas áreas que pondrán a prueba tus habilidades de conducir un vehículo virtual.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "City Bus Simulator", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23928/webp_200X120_173903_1543485950.webp?1630789173", Description = "¡Manejar un autobús es mucho más difícil de lo que parece! ¿Pero puedes hacerte cargo, cierto? Inténtalo en este juego de simulación. ¿Puedes conducir este vehículo por todas estas rutas con curvas sin chocar nada?", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Moto X3M: Bike Racing", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23684/webp_200X120_172979_1534764969.webp?1630788841", Description = "La emoción nunca falta en Moto X3M. ¡Prepárate para correr por tu vida atravesando aros, sobrevolando chuchillas giratorias gigantes y mucho más! Toma el control de uno de estos temerarios pilotos, salta en moto y supera decenas de desafiantes y peligrosas pistas de obstáculos. Correrás por playas y cuevas mientras te enfrentas a peligros muy locos.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Agame Stunt Cars", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23793/webp_200X120_173404_1556006840.webp?1630788984", Description = "Las posibilidades son infinitas en este asombroso juego de carrera. Personaliza tu auto antes de recorrer las pistas y hacerlo volar por los aires.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "MX Off-Road Mountain Bike", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/25136/webp_200X120_177760_1615556371.webp?1630790752", Description = "Prepárate para la carrera de tu vida en MX Off-Road Mountain Bike. Es hora de poner los pies en polvorosa. Bueno, ¡en este caso las ruedas! ¿Llegarás al final de todas estas increíbles pistas forestales de este juego de bicis tan realista? Tendrás que evitar piedras y otros peligros a la vez que impides que tu ciclista se caiga por una colina, se choque contra una roca o acabe en una situación mucho peor que precise la asistencia del equipo de rescate de montaña.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Races, Name = "Crazy Stunt Cars 2", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/23514/webp_200X120_172295_1527498770.webp?1630788627", Description = "En este alocado juego de conducir, puedes personalizar algunos autos potentes, vehículos militares y más. Cámbiales la pintura y mejora su manejo antes de salir volando por las rampas y averigua si puedes lograr algunos épicos giros de 360°.", Likes = 5646, Dislikes = 31 },

        new() { Category = GameCategoryOptions.Classics, Name = "Mahjong EZ", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24353/webp_200X120_175581_1557746795.webp?1630789731", Description = "Esta es una versión del clásico juego de mesa que es ideal para jugadores principiantes y expertos por igual. ¿Qué tan rápido lograrás unir todas las fichas? Incluso puedes deshacer movimientos si piensas en una mejor jugada.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Classics, Name = "Ludo de 4 jugadores", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24550/webp_200X120_176291_1564410375.webp?1630789991", Description = "En esta versión del ludo, se puede jugar de hasta cuatro jugadores. Desafía a tus amigos y familiares en el clásico juego de mesa. ¿Lograrás llevar tus cuatro fichas hasta el triángulo de llegada antes que los demás?", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Classics, Name = "Tic Tac Toe Paper", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24701/webp_200X120_176940_1570013609.webp?1630790187", Description = "En esta versión en línea del clásico juego puedes desafiar a la computadora o a un amigo. ¿Jugarás con las X o las O? ¡Intenta vencer a tu rival en un desafío al mejor de 3, 5 o 10!", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Classics, Name = "Leyenda de las damas", Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24338/webp_200X120_175511_1556787324.webp?1630789711", Description = "¿Lograrás convertirte en una leyenda en esta versión en línea del clásico juego de mesa? Enfréntate a diferentes oponentes virtuales mientras dominas los modos fácil, medio y difíciles.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Classics, Name = "Leyenda del solitario", IsFavourite = true, Image = "https://gamesgamescdn.com/system/static/thumbs/spil_thumb_big/24242/webp_200X120_175119_1553697527.webp?1630789585", Description = "¿Lograrás convertirte en una leyenda en esta versión en línea del clásico juego? No pierdas de vista el reloj mientras reúnen las cartas lo más rápido que puedas.", Likes = 5646, Dislikes = 31 },
        new() { Category = GameCategoryOptions.Classics, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Classics, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Classics, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Classics, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Classics, Name = "Carto" },

        new() { Category = GameCategoryOptions.Click, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Click, Name = "Contra" },
        new() { Category = GameCategoryOptions.Click, Name = "Counter" },
        new() { Category = GameCategoryOptions.Click, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Click, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Click, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Click, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Click, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Click, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Click, Name = "Carto" },

        new() { Category = GameCategoryOptions.Sports, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Sports, Name = "Contra" },
        new() { Category = GameCategoryOptions.Sports, Name = "Counter" },
        new() { Category = GameCategoryOptions.Sports, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Sports, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Sports, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Sports, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Sports, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Sports, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Sports, Name = "Carto" },

        new() { Category = GameCategoryOptions.Puzzle, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Contra" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Counter" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Call Of Duty" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Puzzle, Name = "Carto" },

        new() { Category = GameCategoryOptions.Shots, Name = "Bubble Shot", IsFavourite = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Contra" },
        new() { Category = GameCategoryOptions.Shots, Name = "Counter" },
        new() { Category = GameCategoryOptions.Shots, Name = "Call Of Duty", Description = "Call of Duty: Civil War transporta a los jugadores al corazón de la volátil batalla geopolítica de la Guerra Fría, a principios de la década de 1980.", IsOutstanding = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Stardew Valley", IsFavourite = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Hollow Knight" },
        new() { Category = GameCategoryOptions.Shots, Name = "Dark Souls" },
        new() { Category = GameCategoryOptions.Shots, Name = "Outer Wilds", IsFavourite = true },
        new() { Category = GameCategoryOptions.Shots, Name = "Dead Cells" },
        new() { Category = GameCategoryOptions.Shots, Name = "Carto" },
    };

    public async Task<List<GameCategory>> GetCategoriesWithGames()
    {
        await Task.Delay(1000);
        var gameCategories = new List<GameCategory>();
        gameCategories.Add(new() { Name = "Acción", Games = _games.Where(x => x.Category == GameCategoryOptions.Action).ToList() });
        gameCategories.Add(new() { Name = "Aventura", Games = _games.Where(x => x.Category == GameCategoryOptions.Adventure).ToList() });
        gameCategories.Add(new() { Name = "Belleza", Games = _games.Where(x => x.Category == GameCategoryOptions.Beauty).ToList() });
        gameCategories.Add(new() { Name = "Carrera", Games = _games.Where(x => x.Category == GameCategoryOptions.Races).ToList() });
        gameCategories.Add(new() { Name = "Clásicos", Games = _games.Where(x => x.Category == GameCategoryOptions.Classics).ToList() });
        gameCategories.Add(new() { Name = "Click", Games = _games.Where(x => x.Category == GameCategoryOptions.Click).ToList() });
        gameCategories.Add(new() { Name = "Deportes", Games = _games.Where(x => x.Category == GameCategoryOptions.Sports).ToList() });
        gameCategories.Add(new() { Name = "Puzzle", Games = _games.Where(x => x.Category == GameCategoryOptions.Puzzle).ToList() });
        gameCategories.Add(new() { Name = "Tiros", Games = _games.Where(x => x.Category == GameCategoryOptions.Shots).ToList() });
        return gameCategories;
    }

    public async Task<Game?> GetGame(string name)
    {
        await Task.Delay(1000);
        foreach (var game in _games)
            if (game.Name.ToLower().Contains(name.ToLower()))
                return game;
        return null;
    }

    public async Task<Game?> GetOutstandingGame()
    {
        await Task.Delay(1000);
        foreach (var game in _games)
            if (game.IsOutstanding)
                return game;
        return null;
    }

    public async Task<List<Game>> SearchGames(string nameOrCategory, GameFilters? filters = null)
    {
        await Task.Delay(1000);
        var games = new List<Game>();
        foreach (var game in _games)
            if (game.Name.ToLower().Contains(nameOrCategory.ToLower()) || game.Category.ToLower().Contains(nameOrCategory.ToLower()))
                games.Add(game);

        if (filters is null)
            return games;

        if (!string.IsNullOrWhiteSpace(filters.Category))
            games = games.Where(x => x.Category == filters.Category).ToList();

        if (!string.IsNullOrWhiteSpace(filters.Popularity))
        {
            if (filters.Popularity == GamePopularityOptions.MorePopulars)
                games = games.OrderByDescending(x => x.Likes).ToList();
            else if (filters.Popularity == GamePopularityOptions.LessPopulars)
                games = games.OrderByDescending(x => x.Dislikes).ToList();
        }

        if (!string.IsNullOrWhiteSpace(filters.Order))
        {
            if (filters.Order == GameOrderOptions.Ascendant)
                games = games.OrderBy(x => x.Name).ToList();
            else if (filters.Order == GameOrderOptions.Descendant)
                games = games.OrderByDescending(x => x.Name).ToList();
        }
            
        return games;
    }
}
