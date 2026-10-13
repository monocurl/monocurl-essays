# The determinant is how much area gets scaled

> A matrix multiplies every area in the plane by one number, ad - bc. That explains its sign, why det(AB) = det(A)det(B), and which matrices can be undone.

Series: Linear Algebra (https://www.monocurl.com/monocurl-essays/linear-algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/linear-algebra/determinant/
Keywords: determinant meaning, determinant as area, ad - bc, why is determinant ad minus bc, determinant of a product, inverse of a 2x2 matrix, determinant zero, negative determinant

[Figure 1, animation: The unit square (dashed) under a matrix that changes in three stages, ending at the matrix with columns (3, 1) and (1, 2). The green region is where the square has gone, and the number is its area: 1 at the start, 5 at the end.]

Take the matrix

$$
A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}
$$

and apply it to a shape in the plane: a square, a disc, the outline of a country on a map. The shape is stretched and slanted, and its area changes. Here is a claim that ought to sound too strong. The area is multiplied by 5, whichever shape you chose and wherever it was. And the 5 can be read off the entries: $3 \cdot 2 - 1 \cdot 1$.

That one number is the determinant of $A$. Most courses introduce it as the formula $ad - bc$ and leave its meaning for later. We go the other way: start from the question "how much does this matrix scale area?", find that the answer is $ad - bc$, and get the determinant's main properties from the meaning.

Here is what I use from the earlier lessons. A $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is a [transformation of the plane](@linear-algebra/matrices-as-transformations): it sends $\mathbf{i} = (1, 0)$ to its first column $(a, c)$, sends $\mathbf{j} = (0, 1)$ to its second column $(b, d)$, and sends $(x, y)$ to $x\,(a, c) + y\,(b, d)$. Such a map $T$ is linear, meaning $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(k\,\mathbf{v}) = k\,T(\mathbf{v})$. [The product $AB$](@linear-algebra/matrix-multiplication) is the matrix of "apply $B$, then $A$", so $(AB)\mathbf{v} = A(B\mathbf{v})$.

## One square speaks for all of them

Why should a single number describe what $A$ does to every area? Start with the simplest region, the **unit square** with corners $(0, 0)$, $(1, 0)$, $(1, 1)$, $(0, 1)$. Its sides are $\mathbf{i}$ and $\mathbf{j}$, so $A$ sends it to the parallelogram whose sides are the two columns of $A$. In the animation that is the green region.

Now take any other square with horizontal and vertical sides: say its lower-left corner is at $\mathbf{p}$ and its side is $s$. Its points are $\mathbf{p} + x\,\mathbf{i} + y\,\mathbf{j}$ with $0 \le x, y \le s$, and linearity sends them to $A\mathbf{p} + x\,A\mathbf{i} + y\,A\mathbf{j}$. That is the parallelogram with sides $s\,A\mathbf{i}$ and $s\,A\mathbf{j}$, moved to start at $A\mathbf{p}$. It is the green parallelogram scaled by $s$ and shifted, so its area is $s^2$ times the green area. The square's own area was $s^2$. So every such square, large or small, has its area multiplied by the same factor: the area of the image of the unit square.

A region that can be cut into squares therefore scales by that factor too, and a curved region can be approximated by many small squares. We will come back to make this precise. First we need the factor itself.

**Pause and try.** The image of the unit square under $A$ is the parallelogram with corners $(0, 0)$, $(3, 1)$, $(4, 3)$ and $(1, 2)$. Find its area with school geometry. One way: draw the smallest rectangle with horizontal and vertical sides that contains it, and subtract what is not parallelogram.

**Answer.** The rectangle runs from $(0, 0)$ to $(4, 3)$ and has area 12. Outside the parallelogram it contains two right triangles with legs 3 and 1 (area 1.5 each), two right triangles with legs 1 and 2 (area 1 each), and two unit squares in the corners. So the parallelogram has area $12 - 3 - 2 - 2 = 5$.

[Figure 2, steps: The area of the parallelogram with sides (3, 1) and (1, 2), found by boxing it in a 4 by 3 rectangle and removing two pairs of triangles and two corner squares: 12 - 3 - 2 - 2 = 5.]

  - step: The unit square has gone to the parallelogram with sides (3, 1) and (1, 2).
  - step: Box it in. The rectangle from (0, 0) to (4, 3) has area 4 x 3 = 12.
  - step: Remove two triangles with legs 3 and 1. Each has area 1.5.
  - step: Remove two triangles with legs 1 and 2. Each has area 1.
  - step: Remove the two corner squares, each 1 by 1.
  - step: What is left is the parallelogram: 12 - 3 - 2 - 2 = 5.
## The formula ad - bc

Run the same dissection with letters. Let the columns be $(a, c)$ and $(b, d)$, and suppose for now that the picture looks like the one above: all four numbers positive and the second column steeper than the first. The bounding rectangle is $a + b$ wide and $c + d$ tall. The triangles under and over the first column have legs $a$ and $c$; the triangles beside the second column have legs $b$ and $d$; the corner pieces are $b$ by $c$ rectangles. So

$$
\text{area} = (a + b)(c + d) - 2 \cdot \tfrac12 ac - 2 \cdot \tfrac12 bd - 2bc = ac + ad + bc + bd - ac - bd - 2bc = ad - bc.
$$

For our matrix, $3 \cdot 2 - 1 \cdot 1 = 5$. If you have read [the lesson on vectors](@linear-algebra/vectors), this is the number $D = u_1 v_2 - u_2 v_1$ that decided whether two vectors $\mathbf{u}, \mathbf{v}$ form a basis.

This is a derivation for one arrangement of the picture, and you should distrust it for others. If $b$ is negative the second column leans left and the pieces sit differently. If the second column is *less* steep than the first, the formula gives a negative number, which cannot be an area. Try $\begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix}$, our matrix with its columns swapped: the parallelogram is the same one, of area 5, yet $ad - bc = 1 - 6 = -5$. So $ad - bc$ carries a sign that the area does not, and the sign reacted to the order of the columns. We need an argument that handles every case and explains the sign.

## A proof for every case, and what the sign means

The argument uses a different fact about parallelograms: the area is base times height, so sliding one side along its own direction changes nothing. Let $\mathbf{u} = (a, c)$ be the first column and $\mathbf{v} = (b, d)$ the second, and take $\mathbf{u}$ as the base. Slide the opposite side along the direction of $\mathbf{u}$ until the parallelogram stands upright as a rectangle.

[Figure 3, animation: Sliding the top side of the parallelogram parallel to the base \mathbf{u} = (3, 1). The base and the height (dashed) do not change, so neither does the area. At the end the orange side is perpendicular to the base and the region is a rectangle.]

To compute the upright side we need the direction perpendicular to $\mathbf{u}$. Turning $\mathbf{u} = (a, c)$ a quarter turn counterclockwise gives $\mathbf{n} = (-c, a)$, which has the same length as $\mathbf{u}$ and points to the *left* of $\mathbf{u}$. Any $\mathbf{v}$ can be split into a part along $\mathbf{u}$ and a part along $\mathbf{n}$, say $\mathbf{v} = s\,\mathbf{u} + h\,\mathbf{n}$. The number $h$ tells us how far $\mathbf{v}$ sticks out sideways, in units of $|\mathbf{n}|$, and it is positive when $\mathbf{v}$ is on the left of $\mathbf{u}$ and negative when it is on the right. We say the pair $\mathbf{u}, \mathbf{v}$ is **positively oriented** in the first case and **negatively oriented** in the second.

**Definition.** The **determinant** of $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, written $\det A$, is the signed area of the parallelogram spanned by its columns $\mathbf{u} = (a, c)$ and $\mathbf{v} = (b, d)$: its absolute value is the area of that parallelogram, and its sign is $+$ if $\mathbf{v}$ lies to the left of $\mathbf{u}$, $-$ if $\mathbf{v}$ lies to the right, with $\det A = 0$ when the parallelogram has no area.

**Theorem.** For every $2 \times 2$ matrix, $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$.

**Proof.** If $\mathbf{u} = \mathbf{0}$ the parallelogram is flat, and $ad - bc = 0 \cdot d - b \cdot 0 = 0$. So let $\mathbf{u} \neq \mathbf{0}$ and $\mathbf{n} = (-c, a)$. We look for $s, h$ with $s\,\mathbf{u} + h\,\mathbf{n} = \mathbf{v}$, that is, $sa - hc = b$ and $sc + ha = d$. Multiply the second equation by $a$, the first by $c$, and subtract: $h(a^2 + c^2) = ad - bc$. Since $a^2 + c^2 = |\mathbf{u}|^2 \neq 0$,

$$
h = \frac{ad - bc}{a^2 + c^2}, \qquad\text{and similarly}\qquad s = \frac{ab + cd}{a^2 + c^2}.
$$

(Substituting back confirms both equations.) The parallelogram spanned by $\mathbf{u}$ and $\mathbf{v}$ and the one spanned by $\mathbf{u}$ and $h\,\mathbf{n}$ have the same base $\mathbf{u}$, and their opposite sides lie on the same line parallel to $\mathbf{u}$, because $\mathbf{v}$ and $h\,\mathbf{n}$ differ by the multiple $s\,\mathbf{u}$. Equal base and equal height give equal area. The second one is a rectangle, since $\mathbf{n}$ is perpendicular to $\mathbf{u}$, with side lengths $|\mathbf{u}|$ and $|h|\,|\mathbf{n}| = |h|\,|\mathbf{u}|$. Its area is

$$
|h|\,|\mathbf{u}|^2 = \frac{|ad - bc|}{a^2 + c^2}\,(a^2 + c^2) = |ad - bc|.
$$

The sign of $ad - bc$ is the sign of $h$, which is positive exactly when $\mathbf{v}$ lies to the left of $\mathbf{u}$, and $ad - bc = 0$ exactly when $h = 0$, when $\mathbf{v}$ is a multiple of $\mathbf{u}$ and the parallelogram is flat.

The proof takes one fact from school geometry on trust, that the area of a parallelogram is base times height. Everything else is the algebra shown. It also explains the swapped columns: exchanging $\mathbf{u}$ and $\mathbf{v}$ keeps the parallelogram and reverses which one is on the left of the other.

The sign has a visible meaning for the whole transformation. Before the map, $\mathbf{j}$ is to the left of $\mathbf{i}$. If $\det A > 0$ the images keep that arrangement, and if $\det A < 0$ they reverse it, which means the plane has been turned over like a sheet of paper: text comes out mirrored.

[Figure 4, animation: The second column swings around while the first stays at (2, 1). The signed area shrinks to 0 when the two columns line up and becomes negative once the orange arrow is to the right of the blue one. From then on the letter F is mirror-reversed.]

**Pause and try.** Without the formula, by picturing the unit square, find the determinant of: (a) a rotation by any angle; (b) the shear $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$; (c) the reflection $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, which swaps $\mathbf{i}$ and $\mathbf{j}$; (d) the projection $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. Then check each with $ad - bc$.

**Answer.** (a) A rotation moves the square rigidly and does not turn it over: $\det = 1$. Formula: $\cos\theta \cdot \cos\theta - (-\sin\theta)\sin\theta = \cos^2\theta + \sin^2\theta = 1$. (b) A shear slides the top of the square along itself; base and height stay 1, so $\det = 1$. Formula: $1 \cdot 1 - 1 \cdot 0 = 1$. (c) The square lands on itself, turned over: $\det = -1$. Formula: $0 \cdot 0 - 1 \cdot 1 = -1$. (d) The square is flattened onto a segment: $\det = 0$. Formula: $1 \cdot 0 - 0 \cdot 0 = 0$.

## From the unit square to every region

We argued that every square with horizontal and vertical sides has its area multiplied by the area of the green parallelogram, which we now know is $|\det A|$. To pass to arbitrary regions we have to say what we assume about area.

- Shifting a region does not change its area.
- If a region is cut into finitely many pieces that overlap only along edges, its area is the sum of the areas of the pieces.
- A bounded region $R$ *has an area* when it can be squeezed between unions of small grid squares: the total area of the squares of side $s$ lying inside $R$, and the total area of those that touch $R$, approach a common value as $s \to 0$. That value is the area of $R$.

Property 3 is how area is defined for curved regions in analysis (it is called Jordan content), and polygons, discs and regions bounded by smooth curves all have an area in this sense.

**Theorem.** **(Area scaling.)** Let $A$ be a $2 \times 2$ matrix and $R$ a region of the plane that has an area. Then the image of $R$ under $A$ has area $|\det A| \cdot \text{area}(R)$.

**Proof.** *For a union of grid squares.* A square of side $s$ goes to a shifted copy of the parallelogram spanned by $s\,\mathbf{u}$ and $s\,\mathbf{v}$, where $\mathbf{u}, \mathbf{v}$ are the columns of $A$. By the formula just proved, that parallelogram has area $|(sa)(sd) - (sb)(sc)| = s^2\,|\det A|$, and by property 1 so does its shifted copy. A union of such squares overlapping only along edges goes to a union of parallelograms overlapping only along edges (when $\det A \neq 0$ the columns are not parallel, so no two different points have the same image, and the images overlap only where the squares did), so by property 2 its area is multiplied by $|\det A|$. (If $\det A = 0$ the pieces all lie on one line instead, which has area 0, and the claim holds trivially.)

*For a general region.* Let $R_{\text{in}}$ be the union of the grid squares of side $s$ inside $R$, and $R_{\text{out}}$ the union of those touching $R$, so that $R_{\text{in}}$ is contained in $R$ and $R$ in $R_{\text{out}}$. Their images are nested in the same way, so the area of the image of $R$ lies between $|\det A| \cdot \text{area}(R_{\text{in}})$ and $|\det A| \cdot \text{area}(R_{\text{out}})$. As $s \to 0$ both of these approach $|\det A| \cdot \text{area}(R)$ by property 3.

The first half is a complete proof. The second half is complete given two things I have not shown: that the image of $R$ has an area in the sense of property 3, and that a region contained in another has no larger area. Both are true and are proved in a course on integration, where this theorem is the linear case of the change-of-variables formula.

[Figure 5, animation: A disc approximated by small squares of side 0.25, transformed by the matrix with columns (1.5, 0.5) and (0.5, 1), whose determinant is 1.25. Every small square becomes a small parallelogram with 1.25 times the area, so the total is multiplied by 1.25 as well.]

**Key idea.** The determinant of a matrix is the factor by which it multiplies every area, with a minus sign if it turns the plane over. For $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ that factor is $ad - bc$.

**Worked example.** **The area of a triangle from its corners.** Find the area of the triangle with corners $(1, 1)$, $(4, 2)$ and $(2, 3)$.

Two sides leaving the corner $(1, 1)$ are the vectors $(4 - 1, 2 - 1) = (3, 1)$ and $(2 - 1, 3 - 1) = (1, 2)$. The triangle is half of the parallelogram spanned by them, and that parallelogram has area $|3 \cdot 2 - 1 \cdot 1| = 5$. So the triangle has area $2.5$.

*Check.* Box the triangle in the rectangle from $(1, 1)$ to $(4, 3)$, of area 6. The three right triangles outside it have legs 3 and 1, legs 2 and 1, and legs 1 and 2, with areas $1.5 + 1 + 1 = 3.5$. And $6 - 3.5 = 2.5$.

## The determinant of a product

Suppose $B$ doubles areas and $A$ triples them. Applying $B$ and then $A$ should multiply areas by 6. That one-line thought is the most used property of determinants, and with the area scaling theorem in hand it is nearly a proof.

[Figure 6, steps: The unit square is sent by B (columns (2, 0) and (1, 1), determinant 2) to a parallelogram of area 2, and that parallelogram is sent by A (columns (1, 1) and (-1, 1), determinant 2) to one of area 4. The combined map is AB, so \det(AB) = 2 \times 2 = 4.]

  - step: The unit square has area 1.
  - step: Apply B. The square becomes a parallelogram of area 2, the determinant of B.
  - step: Apply A to that parallelogram. A multiplies the area of every region by its determinant, 2.
  - step: In total the unit square went to a region of area 4, and the map that did it is AB.
**Theorem.** For all $2 \times 2$ matrices $A$ and $B$: $\det(AB) = \det(A)\det(B)$.

**Proof.** *Sizes.* Let $Q$ be the unit square. Its image under $B$ is a parallelogram of area $|\det B|$. Applying $A$ to that parallelogram multiplies its area by $|\det A|$, by the area scaling theorem (a parallelogram is cut by a diagonal into two triangles and has an area in the sense of property 3). So the image of $Q$ under "$B$, then $A$" has area $|\det A|\,|\det B|$. But "$B$, then $A$" is the matrix $AB$, and the image of $Q$ under $AB$ has area $|\det(AB)|$. Hence $|\det(AB)| = |\det A|\,|\det B|$.

*Signs.* A matrix with positive determinant keeps the plane face up and one with negative determinant turns it over. Turning over twice puts it face up again, and turning over once leaves it turned. So the sign of $\det(AB)$ is the product of the signs. This part is a sketch, since "turns the plane over" was defined only through the columns, and the size argument leans on the area scaling theorem, whose second half we did not fully prove. The next paragraph removes any doubt.

*Proof by algebra.* The identity can also be verified directly, with no appeal to area, and this computation is a complete proof by itself. With $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ and $B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$, the product is $\begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$, and

$$
(ae + bg)(cf + dh) - (af + bh)(ce + dg) = adeh + bcfg - adfg - bceh = (ad - bc)(eh - fg),
$$

where the terms $acef$ and $bdgh$ appear in both products and cancel.

The algebra settles the theorem in three lines, and on its own it would leave you wondering why the terms arrange themselves so neatly. The area argument is the reason: two scalings in a row multiply.

## Determinant zero: no way back

Go back to $A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$ and slide its second column toward a multiple of the first.

[Figure 7, animation: The second column of the matrix slides from (1, 2) to (1.5, 0.5), which is half the first column. The parallelogram loses all its area and the whole grid closes onto one line. The black dot is where (0.5, 0) goes and the red ring is where (0, 1) goes: at the end, two different inputs have the same output.]

When the determinant reaches 0 the columns are parallel, and the image of the plane is a line (or, for the zero matrix, a point). A map like that cannot be undone. If two different inputs land on the same output, no rule can send that output back to both of them. A transformation that can be undone is called invertible, and in matrix terms the definition is this.

**Definition.** A $2 \times 2$ matrix $A$ is **invertible** if there is a matrix $B$ with $AB = BA = I$, where $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ is the identity matrix. Such a $B$ is called the **inverse** of $A$ and written $A^{-1}$.

There is at most one inverse: if $B$ and $B'$ both qualify, then $B = BI = B(AB') = (BA)B' = IB' = B'$, using associativity.

To find $A^{-1}$ when it exists, ask what it must do. Its first column is where it sends $\mathbf{i}$, which must be the vector $\mathbf{x}$ that $A$ sends to $\mathbf{i}$. Writing $\mathbf{x} = (x_1, x_2)$, the condition $A\mathbf{x} = \mathbf{i}$ is the [linear system](@algebra/systems-of-equations) $ax_1 + bx_2 = 1$, $cx_1 + dx_2 = 0$. Multiply the first equation by $d$, the second by $b$, and subtract: $(ad - bc)x_1 = d$. Multiply the second by $a$, the first by $c$, and subtract: $(ad - bc)x_2 = -c$. The determinant has turned up in the denominator.

**Theorem.** The matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is invertible if and only if $\det A \neq 0$, and in that case

$$
A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.
$$

**Proof.** *If $\det A \neq 0$.* Let $C = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$. Multiplying,

$$
AC = \begin{pmatrix} ad - bc & -ab + ba \\ cd - dc & -cb + da \end{pmatrix} = (ad - bc)\,I, \qquad CA = \begin{pmatrix} da - bc & db - bd \\ -ca + ac & -cb + ad \end{pmatrix} = (ad - bc)\,I.
$$

Dividing every entry of $C$ by the nonzero number $ad - bc$ divides both products by it, giving a matrix $B$ with $AB = BA = I$.

*If $A$ is invertible.* Then $AB = I$ for some $B$, so by the product theorem $\det(A)\det(B) = \det(I) = 1 \cdot 1 - 0 \cdot 0 = 1$. A product of two numbers that equals 1 has no zero factor, so $\det A \neq 0$.

The second half of the proof is the product theorem at work, and it says something sensible: if $A$ multiplies areas by 5, its inverse must multiply them by $\frac15$, and no factor undoes a multiplication by 0.

The theorem also settles when a matrix can be cancelled from a product. If $\det A \neq 0$ and $AB = AC$, multiply both sides on the left by $A^{-1}$ to get $B = C$. If $\det A = 0$ cancellation can fail: $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ have $AB = A0$ with $B \neq 0$.

**Worked example.** **Inverting $A$ and solving a system with it.** For $A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$ we have $\det A = 5$, so

$$
A^{-1} = \frac15\begin{pmatrix} 2 & -1 \\ -1 & 3 \end{pmatrix}.
$$

*Check.* $\begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 6 - 1 & -3 + 3 \\ 2 - 2 & -1 + 6 \end{pmatrix} = \begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix}$, which is $5I$.

Now solve $3x + y = 7$, $x + 2y = 0$. In matrix form this is $A(x, y) = (7, 0)$: which vector does $A$ send to $(7, 0)$? Apply $A^{-1}$ to both sides:

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \frac15\begin{pmatrix} 2 & -1 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 7 \\ 0 \end{pmatrix} = \frac15\begin{pmatrix} 14 \\ -7 \end{pmatrix} = \begin{pmatrix} 2.8 \\ -1.4 \end{pmatrix}.
$$

*Check.* $3(2.8) + (-1.4) = 7$ and $2.8 + 2(-1.4) = 0$.

**Pause and try.** Let $Z = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$. Compute $\det Z$, describe the image of the plane under $Z$, and find two different vectors that $Z$ sends to the same place.

**Answer.** $\det Z = 2 \cdot 2 - 4 \cdot 1 = 0$. The columns $(2, 1)$ and $(4, 2)$ are parallel, so every output $x\,(2, 1) + y\,(4, 2) = (x + 2y)(2, 1)$ lies on the line through the origin along $(2, 1)$. Outputs depend only on $x + 2y$, so for instance $Z(2, 0) = (4, 2)$ and $Z(0, 1) = (4, 2)$. Also $Z(2, -1) = (0, 0) = Z(0, 0)$.

**Common mistake.** **Treating the determinant as additive.** It is tempting to write $\det(A + B) = \det A + \det B$. Test it on $A = B = I$: $\det(2I) = 2 \cdot 2 - 0 = 4$, while $\det I + \det I = 2$. The determinant respects products, not sums.

**Common mistake.** **Pulling a scalar out once.** Doubling every entry of a matrix does not double the determinant. Both columns double, so the parallelogram doubles in two directions and its area is multiplied by 4: $\det(kA) = (ka)(kd) - (kb)(kc) = k^2 \det A$. An area scales with the square of a length.

What was hard here was resisting the formula long enough to ask what it measures. Once the determinant is the area scaling factor, its properties stop being identities to memorize: the product rule says scalings compound, a zero determinant says the plane was flattened, and the inverse formula divides by the determinant because undoing a scaling by 5 needs a scaling by $\frac15$. The same reading works in three dimensions, with volume in place of area. Solving $A\mathbf{x} = \mathbf{b}$ by undoing $A$ is taken further in [the lesson on linear systems and inverses](@linear-algebra/linear-systems-and-inverses).

**Check yourself.** A matrix $M$ has $\det M = -3$. What happens to a region of area 2 under $M$?
Answer: Its area becomes 6, and the region is mirror-reversed The area is multiplied by $|-3| = 3$, and the negative sign means the map turns the plane over.

**Recap.** - A matrix sends the unit square to the parallelogram spanned by its columns, and every region's area is multiplied by the area of that parallelogram.
- $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$ is that area with a sign: positive if the second column is to the left of the first, negative if the map turns the plane over, zero if the columns are parallel.
- Area scaling: the image of a region $R$ has area $|\det A| \cdot \text{area}(R)$.
- $\det(AB) = \det(A)\det(B)$, because two scalings in a row multiply.
- $A$ is invertible exactly when $\det A \neq 0$, and then $A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
- $\det(kA) = k^2 \det A$, and $\det(A + B)$ is in general not $\det A + \det B$.

## Problems

The first three are computations, the next two combine the area reading with the theorems, and the last two ask for arguments.

**Problem 1.** Compute the determinant of each matrix and say what it tells you about the transformation: (a) $\begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$, (b) $\begin{pmatrix} 4 & -2 \\ -6 & 3 \end{pmatrix}$, (c) $\begin{pmatrix} -3 & 0 \\ 0 & -3 \end{pmatrix}$, (d) $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

**Solution.** (a) $2 \cdot 3 - 5 \cdot 1 = 1$: areas are unchanged and orientation is kept, although the map is not a rigid motion. (b) $4 \cdot 3 - (-2)(-6) = 12 - 12 = 0$: the columns are parallel, $(-2, 3) = -\frac12(4, -6)$, and the plane is flattened onto a line. (c) $(-3)(-3) - 0 = 9$: every area is multiplied by 9. The map is a half turn combined with an enlargement by 3, and a half turn does not mirror anything, which fits the positive sign. (d) $1 \cdot 4 - 2 \cdot 3 = -2$: areas double and the plane is turned over.

**Problem 2.** Find the area of the triangle with corners $(2, 1)$, $(5, 3)$ and $(3, 6)$.

**Solution.** Two sides from the corner $(2, 1)$ are $(5 - 2, 3 - 1) = (3, 2)$ and $(3 - 2, 6 - 1) = (1, 5)$. The parallelogram they span has area $|3 \cdot 5 - 2 \cdot 1| = 13$, and the triangle is half of it: $6.5$. Check by boxing in the rectangle from $(2, 1)$ to $(5, 6)$, of area $3 \times 5 = 15$: the outside triangles have legs 3 and 2 (area 3), legs 2 and 3 (area 3), and legs 1 and 5 (area 2.5), and $15 - 8.5 = 6.5$.

**Problem 3.** Find the inverse of $M = \begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$, verify it, and use it to solve $2x + 5y = 1$, $x + 3y = 2$.

**Solution.** $\det M = 1$, so $M^{-1} = \begin{pmatrix} 3 & -5 \\ -1 & 2 \end{pmatrix}$. Verify: $M M^{-1} = \begin{pmatrix} 6 - 5 & -10 + 10 \\ 3 - 3 & -5 + 6 \end{pmatrix} = I$. The system is $M(x, y) = (1, 2)$, so $(x, y) = M^{-1}(1, 2) = (3 - 10,\ -1 + 4) = (-7, 3)$. Check: $2(-7) + 5(3) = 1$ and $-7 + 3(3) = 2$.

**Problem 4.** For which numbers $k$ is $\begin{pmatrix} k & 3 \\ 2 & k - 1 \end{pmatrix}$ not invertible? For each, show directly that the columns are parallel.

**Solution.** The determinant is $k(k - 1) - 6 = k^2 - k - 6 = (k - 3)(k + 2)$, which is zero for $k = 3$ and $k = -2$. For $k = 3$ the matrix is $\begin{pmatrix} 3 & 3 \\ 2 & 2 \end{pmatrix}$, whose two columns are both $(3, 2)$. For $k = -2$ it is $\begin{pmatrix} -2 & 3 \\ 2 & -3 \end{pmatrix}$, and the second column is $-\frac32$ times the first: $-\frac32(-2, 2) = (3, -3)$. For every other $k$ the matrix is invertible.

**Problem 5.** A disc of radius 2 is transformed by $A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$. What is the area of its image? What is the area of the image of the same disc under $A^2$, and under $A^{-1}$?

**Solution.** The disc has area $\pi \cdot 2^2 = 4\pi$. Under $A$, areas are multiplied by $|\det A| = 5$: the image, an ellipse, has area $20\pi$. By the product theorem $\det(A^2) = \det(A)^2 = 25$, so under $A^2$ the area is $100\pi$. And $\det(A)\det(A^{-1}) = \det(I) = 1$ gives $\det(A^{-1}) = \frac15$, so under $A^{-1}$ the area is $\frac{4\pi}{5}$.

**Problem 6.** Each statement is false. Give a counterexample and say what is true instead. (a) "If $\det A = 1$, then $A$ moves no points." (b) "If $\det A = \det B$, then $A = B$." (c) "$\det(A + B) = \det A + \det B$."

**Solution.** (a) The shear $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has determinant 1 and sends $(0, 1)$ to $(1, 1)$. What $\det A = 1$ guarantees is that areas and orientation are preserved; lengths and angles may change. (b) The shear and the identity both have determinant 1, as does every rotation. The determinant is one number extracted from four and cannot identify the matrix. (c) Take $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$. Both determinants are 0, yet $A + B = I$ has determinant 1. The determinant is multiplicative: $\det(AB) = \det A \det B$.

**Problem 7.** Let $A$ be a $2 \times 2$ matrix whose entries are all whole numbers (positive, negative or zero). Prove that $A^{-1}$ exists and has whole-number entries if and only if $\det A = 1$ or $\det A = -1$.

**Solution.** Suppose $\det A = \pm 1$. Then $A$ is invertible, and the formula gives $A^{-1} = \pm\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, whose entries are whole numbers because $a, b, c, d$ are. Conversely, suppose $A^{-1}$ exists and has whole-number entries. A determinant is built from the entries by multiplying and subtracting, so $\det A$ and $\det(A^{-1})$ are both whole numbers. By the product theorem their product is $\det(AA^{-1}) = \det I = 1$. The only ways to write 1 as a product of two whole numbers are $1 \cdot 1$ and $(-1)(-1)$, so $\det A = \pm 1$. Geometrically, such a matrix maps the grid of whole-number points onto itself without skipping any, and its parallelogram has the same area as a grid square. Example: $\begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$ from Problem 3.
