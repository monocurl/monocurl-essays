# A matrix is a transformation of space

> A 2x2 matrix moves every point of the plane, and its two columns say where the basis arrows land. Linearity is why those four numbers settle everything else.

Series: Linear Algebra (https://www.monocurl.com/monocurl-essays/linear-algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/linear-algebra/matrices-as-transformations/
Keywords: matrix as linear transformation, what does a matrix do, columns of a matrix, linear map definition, rotation matrix, shear matrix, matrix times vector

[Figure 1, animation: The matrix with rows (2, 1) and (0, 1) acting on the plane. Every point moves at once. The blue arrow, which starts as (1, 0), ends at (2, 0), the first column; the orange arrow, which starts as (0, 1), ends at (1, 1), the second column.]

Here is a matrix:

$$
A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}.
$$

What does it *do*? A first course usually answers with a recipe. To multiply $A$ by a vector $(x, y)$, pair each row with the vector and add: the result is $(2x + 1y,\ 0x + 1y) = (2x + y,\ y)$. The recipe is correct and says nothing about why anyone would want it. It also hides a puzzle. The rule moves every point of the plane, infinitely many of them, and yet the whole rule is stored in four numbers. Most ways of moving the points of a plane cannot be stored in four numbers, or in four million. What is special about this kind?

We will find out by treating the recipe as what it is, a function that takes a vector in and gives a vector out, and watching what it does. I assume you know from [the lesson on vectors](@linear-algebra/vectors) that a vector in $\mathbb{R}^2$ is a pair of numbers drawn as an arrow from the origin, that vectors add component by component, that $c\,\mathbf{v}$ scales each component by $c$, and that $(x, y) = x\,\mathbf{i} + y\,\mathbf{j}$ where $\mathbf{i} = (1, 0)$ and $\mathbf{j} = (0, 1)$.

## Feeding points to the rule

Call the function $T$, so that $T(x, y) = (2x + y,\ y)$. Before any theory, compute.

**Pause and try.** Find $T(1, 1)$, $T(-1, 2)$ and $T(2, -1)$. Plot each input and its output on grid paper. Then find $T(1, 0)$ and $T(0, 1)$ and compare them with the matrix $A$.

**Answer.** $T(1, 1) = (2 + 1,\ 1) = (3, 1)$. $T(-1, 2) = (-2 + 2,\ 2) = (0, 2)$. $T(2, -1) = (4 - 1,\ -1) = (3, -1)$. Each point keeps its height and slides sideways. And $T(1, 0) = (2, 0)$, $T(0, 1) = (1, 1)$: these are the two columns of $A$, read downward.

[Figure 2, steps: The rule T(x, y) = (2x + y, y) applied first to three points and then to every whole-number point in view. Each row of points slides sideways and spreads out, and the lines through the points remain straight, parallel and evenly spaced.]

  - step: The rule sends (1, 1) to (2 + 1, 1) = (3, 1).
  - step: It sends (-1, 2) to (0, 2) and (2, -1) to (3, -1). Heights do not change.
  - step: Now move every whole-number point at once.
  - step: Join the moved points. The grid lines are still straight, still parallel, still evenly spaced.
## What the grid keeps

Three things survive the move, and you can check each against the last step of the figure. The origin stays where it is, since $T(0, 0) = (0, 0)$. Straight grid lines land on straight lines. And lines that were parallel and evenly spaced are still parallel and evenly spaced, so the squares of the grid have all become copies of one parallelogram.

That last fact gives a way to find where any vector goes without touching the formula. A vector such as $(1, 2)$ is an address on the grid: one step along $\mathbf{i}$, then two steps along $\mathbf{j}$. If the grid moves as a whole and keeps its even spacing, the address should still be valid on the moved grid, read with the moved arrows.

**Pause and try.** Using only $T(\mathbf{i}) = (2, 0)$ and $T(\mathbf{j}) = (1, 1)$, predict where $(1, 2)$ lands. Then check with the formula $T(x, y) = (2x + y, y)$.

**Answer.** One step of the moved $\mathbf{i}$ and two of the moved $\mathbf{j}$: $1\,(2, 0) + 2\,(1, 1) = (4, 2)$. The formula agrees: $T(1, 2) = (2 + 2,\ 2) = (4, 2)$.

[Figure 3, steps: Following the vector (1, 2) through the transformation. Before, it is 1 step of \mathbf{i} and 2 steps of \mathbf{j}. Afterwards it is 1 step of the moved \mathbf{i} and 2 steps of the moved \mathbf{j}, which is 1(2, 0) + 2(1, 1) = (4, 2).]

  - step: The vector (1, 2) is 1 step of i (blue) and then 2 steps of j (orange).
  - step: Apply the matrix. The grid moves, and the path of three arrows moves with it.
  - step: It is still 1 step of the moved i and 2 steps of the moved j: 1(2, 0) + 2(1, 1) = (4, 2).
So the two arrows $T(\mathbf{i})$ and $T(\mathbf{j})$ seem to control everything, which would explain how four numbers can describe the fate of every point. But the argument leaned on a phrase, "the grid moves as a whole and keeps its even spacing", that we read off a picture. To turn it into a proof we have to say exactly which property of $T$ we used.

## The property behind the picture

Look at what the prediction for $(1, 2)$ assumed. We split the input as $1\,\mathbf{i} + 2\,\mathbf{j}$ and claimed

$$
T(1\,\mathbf{i} + 2\,\mathbf{j}) = 1\,T(\mathbf{i}) + 2\,T(\mathbf{j}).
$$

Two separate things happened there. A sum inside $T$ became a sum outside, and a scalar inside $T$ became a scalar outside. Those are the two properties to demand.

**Definition.** A function $T$ from $\mathbb{R}^2$ to $\mathbb{R}^2$ is a **linear map** (or **linear transformation**) if for all vectors $\mathbf{u}, \mathbf{v}$ in $\mathbb{R}^2$ and all real numbers $c$,

$$
T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}) \qquad\text{and}\qquad T(c\,\mathbf{v}) = c\,T(\mathbf{v}).
$$

The first property is called **additivity** and the second **homogeneity**.

In pictures, additivity says that a parallelogram with sides $\mathbf{u}$ and $\mathbf{v}$ is carried to the parallelogram with sides $T(\mathbf{u})$ and $T(\mathbf{v})$, diagonal to diagonal. Homogeneity says that points along a line through the origin keep their relative spacing: the point twice as far out lands twice as far out. Taking $c = 0$ in the second property gives $T(\mathbf{0}) = \mathbf{0}$, so a linear map always fixes the origin.

Plenty of reasonable-looking maps fail. The shift $S(x, y) = (x + 1, y)$ keeps every line straight, but $S(0, 0) = (1, 0)$, so it is not linear. A subtler failure is $N(x, y) = (x,\ y + 0.3x^2)$, which fixes the origin. Here $N(1, 0) = (1, 0.3)$ and $N(2, 0) = (2, 1.2)$, while homogeneity would require $N(2, 0) = 2\,N(1, 0) = (2, 0.6)$.

[Figure 4, animation: The map N(x, y) = (x, y + 0.3x^2), which is not linear. The origin stays put, but horizontal grid lines bend into parabolas, and N(2, 0) (black dot) misses the point 2N(1, 0) (red ring) where homogeneity would put it.]

Our $T$ passes both tests, and the check is worth doing once by hand. For $\mathbf{u} = (u_1, u_2)$ and $\mathbf{v} = (v_1, v_2)$,

$$
T(\mathbf{u} + \mathbf{v}) = \bigl(2(u_1 + v_1) + (u_2 + v_2),\ u_2 + v_2\bigr) = (2u_1 + u_2,\ u_2) + (2v_1 + v_2,\ v_2) = T(\mathbf{u}) + T(\mathbf{v}),
$$

and $T(c\,\mathbf{v}) = (2cv_1 + cv_2,\ cv_2) = c\,(2v_1 + v_2,\ v_2) = c\,T(\mathbf{v})$. It worked because each output component is a sum of constant multiples of the inputs, with no squares, no products $xy$ and no added constants.

## Two arrows determine everything

Now the observation from the grid can be proved, for every linear map at once.

**Theorem.** Let $T$ be a linear map from $\mathbb{R}^2$ to $\mathbb{R}^2$. Then for every vector $(x, y)$,

$$
T(x, y) = x\,T(\mathbf{i}) + y\,T(\mathbf{j}).
$$

In particular, two linear maps that agree on $\mathbf{i}$ and on $\mathbf{j}$ agree everywhere.

**Proof.** Write $(x, y) = x\,\mathbf{i} + y\,\mathbf{j}$. By additivity, $T(x\,\mathbf{i} + y\,\mathbf{j}) = T(x\,\mathbf{i}) + T(y\,\mathbf{j})$. By homogeneity, $T(x\,\mathbf{i}) = x\,T(\mathbf{i})$ and $T(y\,\mathbf{j}) = y\,T(\mathbf{j})$. Together these give the formula. If $T'$ is another linear map with $T'(\mathbf{i}) = T(\mathbf{i})$ and $T'(\mathbf{j}) = T(\mathbf{j})$, the same formula holds for $T'$ with the same right-hand side, so $T'(x, y) = T(x, y)$ for all $(x, y)$.

The theorem says a linear map has no freedom left once $T(\mathbf{i})$ and $T(\mathbf{j})$ are chosen. Name the choices: say $T(\mathbf{i}) = (a, c)$ and $T(\mathbf{j}) = (b, d)$. Then

$$
T(x, y) = x\begin{pmatrix} a \\ c \end{pmatrix} + y\begin{pmatrix} b \\ d \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}.
$$

The recipe from the first paragraph has appeared on its own, and its four numbers are the components of the two landing spots. It remains to check that any four numbers are allowed.

**Theorem.** Let $a, b, c, d$ be any real numbers. The function $T(x, y) = (ax + by,\ cx + dy)$ is a linear map, with $T(\mathbf{i}) = (a, c)$ and $T(\mathbf{j}) = (b, d)$.

**Proof.** *Additivity.* The first component of $T(\mathbf{u} + \mathbf{v})$ is $a(u_1 + v_1) + b(u_2 + v_2) = (au_1 + bu_2) + (av_1 + bv_2)$, the sum of the first components of $T(\mathbf{u})$ and $T(\mathbf{v})$. The second component is the same with $c, d$ in place of $a, b$. *Homogeneity.* The first component of $T(k\,\mathbf{v})$ is $a(kv_1) + b(kv_2) = k(av_1 + bv_2)$, and likewise for the second. Finally, putting $(x, y) = (1, 0)$ gives $T(\mathbf{i}) = (a, c)$, and $(x, y) = (0, 1)$ gives $T(\mathbf{j}) = (b, d)$.

**Definition.** A **$2 \times 2$ matrix** is an array of four real numbers $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. Its **columns** are the vectors $(a, c)$ and $(b, d)$. The product of $A$ with a vector is defined by

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = x\begin{pmatrix} a \\ c \end{pmatrix} + y\begin{pmatrix} b \\ d \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}.
$$

The two theorems together say that linear maps of the plane and $2 \times 2$ matrices are the same objects in two notations. Every matrix gives a linear map $\mathbf{v} \mapsto A\mathbf{v}$, every linear map comes from a matrix, and different matrices give different maps because their columns are the images of $\mathbf{i}$ and $\mathbf{j}$.

**Key idea.** The columns of a matrix are where the basis vectors $\mathbf{i}$ and $\mathbf{j}$ land. Every other vector $(x, y)$ lands at $x$ times the first column plus $y$ times the second, because the map is linear.

This answers the puzzle from the start. Four numbers suffice because linearity is a severe restriction: once you know where two arrows go, additivity and homogeneity dictate the rest.

## Reading and writing matrices

The key statement works in both directions. Given a matrix, read its columns to see the motion. Given a motion that you know to be linear, find where $\mathbf{i}$ and $\mathbf{j}$ go and write those down as columns.

**Worked example.** **The matrix of a quarter turn.** Rotate the plane by $90^\circ$ counterclockwise about the origin. The arrow $\mathbf{i} = (1, 0)$ turns to point straight up: $(0, 1)$. The arrow $\mathbf{j} = (0, 1)$ turns to point left: $(-1, 0)$. Writing these as columns,

$$
R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \qquad R\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix}.
$$

*Check.* $(3, 1)$ should go to a vector of the same length at right angles to it. $R(3, 1) = (-1, 3)$, of length $\sqrt{10}$ like $(3, 1)$, and the slopes $\frac13$ and $-3$ multiply to $-1$.

That example used the claim that a rotation is linear, and the claim needs a reason. A rotation about the origin is a rigid motion: it carries every figure to a congruent figure. So it carries the parallelogram with sides $\mathbf{u}, \mathbf{v}$ and diagonal $\mathbf{u} + \mathbf{v}$ to a parallelogram with sides $R(\mathbf{u}), R(\mathbf{v})$, whose diagonal is therefore $R(\mathbf{u}) + R(\mathbf{v})$; that is additivity. And it carries the point $c$ times as far along a ray to the point $c$ times as far along the rotated ray (for negative $c$, along the opposite ray, which rotates to the opposite of the rotated ray), which is homogeneity. The argument is geometric: it rests on the properties of rigid motions, which we take as known from geometry, and it is complete once those are granted.

For a rotation by a general angle $\theta$, the [unit circle](@trigonometry/unit-circle) supplies the columns. The point reached by turning $(1, 0)$ through $\theta$ is $(\cos\theta, \sin\theta)$ by the definition of cosine and sine. And $\mathbf{j}$ is a quarter turn ahead of $\mathbf{i}$, so it lands a quarter turn ahead of $(\cos\theta, \sin\theta)$, at $(-\sin\theta, \cos\theta)$, using the quarter-turn rule $(x, y) \mapsto (-y, x)$ from the example. Hence

$$
R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}.
$$

[Figure 5, animation: Rotation of the plane by an angle that grows to 30^\circ and then to 90^\circ. The blue arrow is at (\cos\theta, \sin\theta) and the orange one at (-\sin\theta, \cos\theta), and those are the columns of the matrix shown.]

Here are four more transformations to read from their columns.

**Pause and try.** Write down the matrix of (a) the reflection across the line $y = x$, which swaps the two coordinates of every point, and (b) the projection onto the horizontal axis, $(x, y) \mapsto (x, 0)$. For each, decide first where $\mathbf{i}$ and $\mathbf{j}$ land.

**Answer.** (a) Swapping coordinates sends $\mathbf{i} = (1, 0)$ to $(0, 1)$ and $\mathbf{j} = (0, 1)$ to $(1, 0)$, so the matrix is $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. (b) $\mathbf{i}$ is already on the axis and stays at $(1, 0)$; $\mathbf{j}$ drops to $(0, 0)$. The matrix is $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. Both appear in the last two steps of the next figure.

[Figure 6, steps: Four linear maps and their matrices, applied to the grid and to a letter F: a shear, a scaling with different factors along the two axes, a reflection, and a projection that flattens the plane onto a line. In the last step the grey outline is where the F started and the thick green segment is all that is left of it.]

  - step: A shear: i stays at (1, 0) and j leans over to (1, 1). Each point slides sideways by its height.
  - step: A scaling: i stretches to (2, 0) and j shrinks to (0, 0.5).
  - step: A reflection across the line y = x: i lands on (0, 1) and j on (1, 0). The F is now mirrored.
  - step: A projection onto the horizontal axis: i stays and j goes to (0, 0). The plane is flattened onto a line.
The procedure also works when the information given is about vectors other than $\mathbf{i}$ and $\mathbf{j}$.

**Worked example.** **Recovering a matrix from two other vectors.** A linear map $T$ satisfies $T(1, 1) = (3, 1)$ and $T(1, -1) = (1, -1)$. Find its matrix.

We need $T(\mathbf{i})$ and $T(\mathbf{j})$, so we express $\mathbf{i}$ and $\mathbf{j}$ through the vectors we know about. Adding the two known inputs gives $(2, 0)$, so $\mathbf{i} = \frac12\bigl[(1, 1) + (1, -1)\bigr]$; subtracting gives $(0, 2)$, so $\mathbf{j} = \frac12\bigl[(1, 1) - (1, -1)\bigr]$. By linearity,

$$
T(\mathbf{i}) = \tfrac12\bigl[(3, 1) + (1, -1)\bigr] = (2, 0), \qquad T(\mathbf{j}) = \tfrac12\bigl[(3, 1) - (1, -1)\bigr] = (1, 1).
$$

The matrix has these as columns: it is the matrix $A$ this lesson began with.

*Check.* $A(1, 1) = (2 + 1,\ 1) = (3, 1)$ and $A(1, -1) = (2 - 1,\ -1) = (1, -1)$.

## Lines go to lines

We saw grid lines stay straight. The definition of linearity mentions sums and scalars, not lines, so this deserves a proof, and the proof shows the one way it can go wrong.

A line in the plane can be described by a point $\mathbf{p}$ on it and a nonzero direction vector $\mathbf{d}$: it is the set of all points $\mathbf{p} + t\,\mathbf{d}$ as $t$ runs through the real numbers.

**Theorem.** Let $T$ be a linear map of $\mathbb{R}^2$ and let $L$ be the line of points $\mathbf{p} + t\,\mathbf{d}$, with $\mathbf{d} \neq \mathbf{0}$. If $T(\mathbf{d}) \neq \mathbf{0}$, the image of $L$ is the line through $T(\mathbf{p})$ with direction $T(\mathbf{d})$. If $T(\mathbf{d}) = \mathbf{0}$, the image of $L$ is the single point $T(\mathbf{p})$.

**Proof.** By additivity and homogeneity, $T(\mathbf{p} + t\,\mathbf{d}) = T(\mathbf{p}) + t\,T(\mathbf{d})$ for every real $t$. As $t$ runs through the real numbers, the right-hand side runs through exactly the points of the line through $T(\mathbf{p})$ with direction $T(\mathbf{d})$ when $T(\mathbf{d}) \neq \mathbf{0}$, and it stays at $T(\mathbf{p})$ when $T(\mathbf{d}) = \mathbf{0}$.

The formula $T(\mathbf{p}) + t\,T(\mathbf{d})$ carries more than the statement. The parameter $t$ is unchanged, so equally spaced points on $L$ go to equally spaced points on the image. And two parallel lines share a direction $\mathbf{d}$, so their images share the direction $T(\mathbf{d})$ and are parallel as well. That is the even, parallel grid we observed.

[Figure 7, animation: The line through (0, -1) with direction (0.5, 1), and its image under A. The four marked points, at t = 0, 1, 2, 3, stay evenly spaced, and the image is the line through A(0, -1) = (-1, -1) with direction A(0.5, 1) = (2, 1).]

The exceptional case really occurs. For the projection $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ from the last step of the gallery, $P(x, y) = (x, 0)$, so the direction $\mathbf{d} = \mathbf{j}$ has $P(\mathbf{d}) = \mathbf{0}$, and every vertical line is crushed to one point of the horizontal axis. So the accurate statement is "lines go to lines or to points", and the second happens exactly for directions that the map sends to zero.

**Common mistake.** **Reading the rows as the landing spots.** For $A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$ it is tempting to say "$\mathbf{i}$ goes to $(2, 1)$ and $\mathbf{j}$ goes to $(0, 1)$", because we read text in rows. Test it: $A\,\mathbf{i} = (2 \cdot 1 + 1 \cdot 0,\ 0 \cdot 1 + 1 \cdot 0) = (2, 0)$, the first *column*. The rows have a different job: each row produces one component of the output.

**Common mistake.** **Calling every straight-line formula linear.** In school algebra $f(x) = 2x + 3$ is called a linear function. In linear algebra it is not a linear map, since $f(0) = 3 \neq 0$ and $f(1 + 1) = 7$ while $f(1) + f(1) = 10$. The same goes for the shift $(x, y) \mapsto (x + 1, y)$. A linear map has no constant term; maps of the form "linear plus a constant" are called *affine*.

Step back to see what was hard. Computing a matrix times a vector was the easy part. The work was in finding the property, linearity, that makes the recipe inevitable and lets two arrows speak for a whole plane. From here on, a matrix can be read as a picture: look at the columns, imagine the grid following them. [The next lesson](@linear-algebra/matrix-multiplication) uses that picture to explain what it means to multiply two matrices.

**Check yourself.** A linear map sends $\mathbf{i}$ to $(1, 3)$ and $\mathbf{j}$ to $(-2, 0)$. Where does it send $(2, 1)$?
Answer: $(0, 6)$ $2\,(1, 3) + 1\,(-2, 0) = (2 - 2,\ 6 + 0) = (0, 6)$: two steps of the moved $\mathbf{i}$ and one of the moved $\mathbf{j}$.

**Recap.** - A map $T$ of the plane is linear when $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(c\,\mathbf{v}) = c\,T(\mathbf{v})$. Such a map fixes the origin.
- A linear map is determined by $T(\mathbf{i})$ and $T(\mathbf{j})$: $T(x, y) = x\,T(\mathbf{i}) + y\,T(\mathbf{j})$.
- Writing $T(\mathbf{i})$ and $T(\mathbf{j})$ as columns gives the matrix of $T$, and every $2 \times 2$ matrix arises this way: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}$.
- Rotation by $\theta$ has columns $(\cos\theta, \sin\theta)$ and $(-\sin\theta, \cos\theta)$. Shears, scalings, reflections and projections are read off the same way.
- A linear map sends the line $\mathbf{p} + t\,\mathbf{d}$ to the line $T(\mathbf{p}) + t\,T(\mathbf{d})$, or to a single point if $T(\mathbf{d}) = \mathbf{0}$. Parallel lines stay parallel and even spacing stays even.

## Problems

The first three are direct practice, the next three need linearity used with some thought, and the last two ask for short proofs.

**Problem 1.** Let $M = \begin{pmatrix} 1 & 2 \\ 3 & -1 \end{pmatrix}$. Where does $M$ send $\mathbf{i}$ and $\mathbf{j}$? Compute $M(2, 1)$ and $M(-1, 3)$.

**Solution.** The columns give $M\mathbf{i} = (1, 3)$ and $M\mathbf{j} = (2, -1)$. Then $M(2, 1) = 2\,(1, 3) + 1\,(2, -1) = (4, 5)$ and $M(-1, 3) = -1\,(1, 3) + 3\,(2, -1) = (-1 + 6,\ -3 - 3) = (5, -6)$. By rows, as a check: $(1 \cdot 2 + 2 \cdot 1,\ 3 \cdot 2 - 1 \cdot 1) = (4, 5)$.

**Problem 2.** A linear map sends $\mathbf{i}$ to $(0, 2)$ and $\mathbf{j}$ to $(-1, 1)$. Write its matrix and find the image of $(3, 2)$.

**Solution.** The landing spots are the columns: $\begin{pmatrix} 0 & -1 \\ 2 & 1 \end{pmatrix}$. The image of $(3, 2)$ is $3\,(0, 2) + 2\,(-1, 1) = (-2,\ 6 + 2) = (-2, 8)$.

**Problem 3.** Describe in words what each matrix does to the plane: (a) $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$, (b) $\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$, (c) $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$.

**Solution.** (a) $\mathbf{i}$ goes to $(-1, 0)$ and $\mathbf{j}$ stays: $(x, y) \mapsto (-x, y)$, the reflection across the vertical axis. (b) Both basis vectors are tripled: $(x, y) \mapsto (3x, 3y)$, an enlargement by the factor 3 about the origin. (c) $\mathbf{i}$ goes to $(0, -1)$, pointing down, and $\mathbf{j}$ goes to $(1, 0)$, pointing right. Each has turned a quarter turn clockwise, so this is the rotation by $90^\circ$ clockwise, $(x, y) \mapsto (y, -x)$.

**Problem 4.** Decide whether each map is linear. If it is, give its matrix. If not, show a specific failure. (a) $T(x, y) = (3x - y,\ x)$. (b) $T(x, y) = (x + 2,\ y)$. (c) $T(x, y) = (xy,\ y)$. (d) $T(x, y) = (|x|,\ y)$.

**Solution.** (a) Linear: it has the form $(ax + by, cx + dy)$ with matrix $\begin{pmatrix} 3 & -1 \\ 1 & 0 \end{pmatrix}$. (b) Not linear: $T(0, 0) = (2, 0) \neq \mathbf{0}$. (c) Not linear: $T(1, 1) = (1, 1)$ but $T(2, 2) = (4, 2)$, which is not $2\,T(1, 1) = (2, 2)$. (d) Not linear: $T(1, 0) + T(-1, 0) = (1, 0) + (1, 0) = (2, 0)$, while $T\bigl((1, 0) + (-1, 0)\bigr) = T(0, 0) = (0, 0)$. Note that (d) fixes the origin and satisfies $T(c\,\mathbf{v}) = c\,T(\mathbf{v})$ for $c \geq 0$, yet additivity fails.

**Problem 5.** A linear map $T$ satisfies $T(2, 1) = (1, 4)$ and $T(1, 1) = (0, 3)$. Find its matrix.

**Solution.** Express the basis vectors through the known inputs. $\mathbf{i} = (2, 1) - (1, 1)$, so $T(\mathbf{i}) = (1, 4) - (0, 3) = (1, 1)$. And $\mathbf{j} = (1, 1) - \mathbf{i}$, so $T(\mathbf{j}) = (0, 3) - (1, 1) = (-1, 2)$. The matrix is $\begin{pmatrix} 1 & -1 \\ 1 & 2 \end{pmatrix}$. Check: it sends $(2, 1)$ to $(2 - 1,\ 2 + 2) = (1, 4)$ and $(1, 1)$ to $(1 - 1,\ 1 + 2) = (0, 3)$.

**Problem 6.** Write the matrix of the rotation by $60^\circ$ counterclockwise. Find the images of $(2, 0)$ and $(0, 2)$, and verify that both images have length 2.

**Solution.** With $\cos 60^\circ = \frac12$ and $\sin 60^\circ = \frac{\sqrt3}{2}$, the matrix is $\begin{pmatrix} \frac12 & -\frac{\sqrt3}{2} \\ \frac{\sqrt3}{2} & \frac12 \end{pmatrix}$. The image of $(2, 0)$ is twice the first column, $(1, \sqrt3)$, of length $\sqrt{1 + 3} = 2$. The image of $(0, 2)$ is twice the second column, $(-\sqrt3, 1)$, of length $\sqrt{3 + 1} = 2$. A rotation changes no lengths, as expected.

**Problem 7.** Find the equation of the image of the line $y = x + 1$ under $A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$. Then find a line whose image under the projection $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ is the single point $(4, 0)$.

**Solution.** The line $y = x + 1$ passes through $\mathbf{p} = (0, 1)$ with direction $\mathbf{d} = (1, 1)$. Its image passes through $A\mathbf{p} = (1, 1)$ with direction $A\mathbf{d} = (3, 1)$, so it has slope $\frac13$ and equation $y - 1 = \frac13(x - 1)$, that is, $y = \frac13 x + \frac23$. Check with another point: $(1, 2)$ is on the original line and goes to $(4, 2)$, and $\frac43 + \frac23 = 2$. For the second part we need a direction with $P\mathbf{d} = \mathbf{0}$; since $P(x, y) = (x, 0)$, that means $\mathbf{d} = (0, 1)$ up to scaling, a vertical line. The vertical line $x = 4$ consists of the points $(4, t)$, all of which go to $(4, 0)$.

**Problem 8.** Let $T$ be a linear map of $\mathbb{R}^2$ whose two columns $T(\mathbf{i})$ and $T(\mathbf{j})$ are not parallel. Prove that $T$ never sends two different vectors to the same place. (Use the fact from the lesson on vectors: if two vectors are not parallel, the only combination $a\,\mathbf{u} + b\,\mathbf{v}$ equal to $\mathbf{0}$ is the one with $a = b = 0$.) What goes wrong for the projection $P$ of the previous problem?

**Solution.** Suppose $T(\mathbf{v}) = T(\mathbf{w})$. By linearity $T(\mathbf{v} - \mathbf{w}) = T(\mathbf{v}) + T(-\mathbf{w}) = T(\mathbf{v}) - T(\mathbf{w}) = \mathbf{0}$. Write $\mathbf{v} - \mathbf{w} = (x, y)$. Then $\mathbf{0} = T(x, y) = x\,T(\mathbf{i}) + y\,T(\mathbf{j})$. Since $T(\mathbf{i})$ and $T(\mathbf{j})$ are not parallel, they form a basis, and $\mathbf{0}$ has only the one expression $0\,T(\mathbf{i}) + 0\,T(\mathbf{j})$; hence $x = y = 0$, so $\mathbf{v} = \mathbf{w}$. For $P$ the columns are $(1, 0)$ and $(0, 0)$, which are parallel because the zero vector is a multiple of anything. The argument breaks at the last step, and indeed $P(4, 1) = P(4, 2) = (4, 0)$.
