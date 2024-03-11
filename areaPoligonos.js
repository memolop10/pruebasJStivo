
//{
//  tipo: 'triangulo',
//  base: 8,
//  altura: 9
//}

function areaPoligono(poligono) {
    
    let area = 0 

    if ( poligono.tipo === 'cuadrado' && poligono.lado) {
        area = poligono.lado * poligono.lado
    } else if( poligono.tipo === 'rectangulo' && poligono.base && poligono.altura ) {
        area = poligono.base * poligono.altura
    } else if ( poligono.tipo === 'triangulo' && poligono.base && poligono.altura ) {
        area = (poligono.base * poligono.altura) / 2
    }

    return area
}

console.log(areaPoligono({ tipo: 'triangulo', base: 8, altura: 9 }))
console.log(areaPoligono({ tipo: 'cuadrado', lado: 8 }))
console.log(areaPoligono({ tipo: 'rectangulo', base: 8, altura: 9 }))