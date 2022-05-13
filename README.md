# __Autómata celular__

<p align="left">
  <img height="150" src="./cellularAutomata.gif" />
</p>

Un autómata celular (A.C.) es un `modelo matemático` y `computacional` para un `sistema dinámico` que evoluciona en pasos `discretos`. Es adecuado para modelar sistemas naturales que puedan ser descritos como una colección masiva de objetos simples que `interactúen` localmente unos con otros.

Son sistemas descubiertos dentro del campo de la `física computacional` por [John von Neumann](https://es.wikipedia.org/wiki/John_von_Neumann "John von Neumann") en la década de `1950`. La teoría de los autómatas celulares se inicia con su precursor John von Neumann a finales de la década de 1940 con su libro Theory of Self-reproducing Automata (editado y completado por A. W. Burks).

Aunque John von Neumann puso en práctica los AA.CC., estos fueron concebidos en los años 40 por `Konrad Zuse` y `Stanislaw Ulam`. Zuse pensó en los “espacios de cómputo” (computing spaces), como modelos discretos de sistemas físicos. Las contribuciones de Ulam vinieron al final de los 40, poco después de haber inventado con `Nicholas Metropolis` el `Método de Montecarlo`. 

## Descripción

No existe una definición formal y `matemática` aceptada de autómata celular; sin embargo, se puede describir a un A.C. como una `tupla`, es decir, un conjunto ordenado de objetos caracterizado por los siguientes componentes: 

- Una *rejilla* o *cuadriculado* (`lattice`) de enteros (conjunto *Z*) infinitamente extendida, y con *dimensión* ***d ∈ Z+***. Cada celda de la cuadrícula se conoce como `célula`.
- Cada célula puede tomar un valor en ***Z*** a partir de un *conjunto finito de estados __k__*.
- Cada célula, además, se caracteriza por su __*vecindad*__, un conjunto finito de células en las cercanías de la misma.
- De acuerdo con esto, se aplica a todas las células de la cuadrícula una *función de transición* ( *f* ) que toma como argumentos los valores de la célula en cuestión y los valores de sus vecinos, y regresa el nuevo valor que la célula tendrá en la siguiente etapa de tiempo. Esta función *f* se aplica, como ya se dijo, de forma homogénea a todas las células, por cada paso discreto de tiempo.

## __Condiciones de frontera__

Por definición, un A.C. consiste en una retícula infinita de enteros. Sin embargo, para cuestiones prácticas (como en modelos de sistemas físicos llevados a cabo en ordenadores de memoria finita), se requiere tomar ciertas consideraciones a la hora de implementar un A.C. Por ello, la definición original se modifica para dar cabida a retículas finitas en las que las células del A.C. interactúen. Esto conlleva la consideración extra de lo que debe suceder con aquellas células que se encuentren en los `bordes` de la retícula. A la implementación de una o varias consideraciones específicas se le conoce como *condición de frontera*.

Dentro del ámbito de los A.C., se pueden implementar numerosas condiciones de frontera, en función de lo que el problema real requiera para su modelado. Por ejemplo: 

- __Frontera abierta__: Se considera que fuera de la *lattice* residen células, todas con un valor fijo. En el caso particular del juego de la vida y de otros A.C. con dos estados en su conjunto __*k*__, una frontera se dice *fría* si las células fuera de la frontera se consideran muertas, y *caliente* si se consideran vivas.
- __Frontera periódica__: Se considera a la *lattice* como si sus extremos se tocaran. En una *lattice* de dimensión 1, esto puede visualizarse en dos dimensiones como una `circunferencia`. En dimensión 2, la lattice podría visualizarse en tres dimensiones como un `toroide`.
- __Frontera reflectora__: Se considera que las células fuera de la *lattice* "reflejan" los valores de aquellas dentro de la *lattice*. Así, una célula que estuviera junto al borde de la *lattice* (fuera de ella) tomaría como valor el de la célula que esté junto al borde de la *lattice*, dentro de ella.
- __Sin frontera__: Haciendo uso de implementaciones que hagan crecer dinámicamente el uso de memoria de la *lattice* implementada, se puede asumir que cada vez que las células deben interactuar con células fuera de la *lattice*, esta se hace más grande para dar cabida a estas interacciones. Obviamente, existe un límite (impuesto por la memoria disponible) para esta condición. Es muy importante no confundir esta condición de frontera con la definición original de A.C. cuya *lattice* es inicialmente infinita. En el caso de un A.C. sin frontera, la *lattice* comienza con un tamaño definido y finito, y conforme se requiera va creciendo en el tiempo, lo cual no lo hace necesariamente un modelo más cercano a la realidad, pues si se inicializara la *lattice* aleatoriamente, con esta condición sólo se pueden inicializar las células dentro de la *lattice* inicial finita, mientras que en el caso de la definición original, en teoría todas las células de la *lattice* infinita deberían ser inicializadas.

## __Variaciones__

Los A.C. pueden variar en alguna de las características antes mencionadas, derivando en autómatas celulares no *estándar*.

Por ejemplo, un A.C. estándar tiene una cuadrícula donde se asume que las células son cuadros; es decir, que la retícula tiene una geometría cuadrada. Esto no es necesariamente un requisito, y se puede variar el A.C. para presentar una geometría triangular o hexagonal (en A.C. de 2 dimensiones, el cuadrado, el triángulo y el hexágono son las únicas figuras geométricas que llenan el plano).

También puede variarse el conjunto de estados __*k*__ que cada célula puede tomar, la función de transición __*f*__ de forma que ya no sea homogénea, utilizar elementos estocásticos (aleatoriedad) en __*f*__ (lo que se conoce como A.C. *probabilístico*), variar las vecindades de cada célula, etc. 

## Historia

La historia de los autómatas celulares puede ser clasificada en tres etapas asociadas a los nombres de los científicos que en cada momento marcaron un punto de inflexión en el desarrollo de la teoría: la era de Von Neumann, la era de John Horton Conway y la era de Stephen Wolfram. 