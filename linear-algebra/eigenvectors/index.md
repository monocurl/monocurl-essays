# Eigenvectors: the directions a transformation leaves alone

> Most arrows are knocked off their line by a matrix. The few that are only stretched are its eigenvectors, and they turn matrix powers into powers of numbers.

Series: Linear Algebra (https://www.monocurl.com/monocurl-essays/linear-algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/linear-algebra/eigenvectors/
Keywords: eigenvectors, eigenvalues, what is an eigenvector, characteristic equation, how to find eigenvalues of a 2x2 matrix, eigenvalues of a rotation, matrix powers, diagonalization

[Figure 1, animation: Five arrows under the matrix with columns (3, 0) and (1, 2). Each dashed line is the line an arrow started on. Three of the arrows end up on their own line, only stretched, and turn green; the other two are pushed off theirs and turn red.]

Apply the matrix

$$
A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}
$$

to an arrow, and the arrow usually changes direction. The arrow $(0, 1)$ goes to $(1, 2)$, which points somewhere else entirely. The arrow $(1, 1)$ goes to $(4, 2)$, again off its original line. You would expect this of every arrow: a matrix stretches and slants the plane, so why would any direction survive? Yet in the animation the arrow $(-1, 1)$ goes to $(-2, 2)$, exactly twice itself, and $(1, 0)$ goes to $(3, 0)$, three times itself. These arrows are stretched and nothing else happens to them.

Arrows like that are rare, and they are the most useful thing to know about a matrix. Along such a direction the matrix acts like a plain number, and questions that are hard for matrices, such as "what does applying $A$ fifty times do?", become questions about powers of numbers. We will find out how to locate these directions, when they exist, and how to use them.

Here is what I use from earlier. A $2 \times 2$ matrix is a [transformation of the plane](@linear-algebra/matrices-as-transformations): $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ sends $(x, y)$ to $(ax + by,\ cx + dy)$, and the map is linear, so $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v}$ and $A(k\mathbf{v}) = k\,A\mathbf{v}$. The [determinant](@linear-algebra/determinant) $ad - bc$ is the factor by which the matrix scales areas, and it is zero exactly when the two columns are parallel and the plane is flattened onto a line or a point. $I$ is the identity matrix, which leaves every vector alone.

## Hunting for the special directions

Let us look for the special arrows of $A$ systematically. Take an arrow $\mathbf{v}$ of fixed length, swing it around the origin, and at each position draw $A\mathbf{v}$ next to it. The quantity to watch is the angle between $\mathbf{v}$ and $A\mathbf{v}$. When it is zero, $A\mathbf{v}$ lies along $\mathbf{v}$.

**Pause and try.** Before watching: compute $A\mathbf{v}$ for $\mathbf{v} = (1, 0)$, $(2, 1)$, $(1, -1)$ and $(-3, 3)$. For which of these is $A\mathbf{v}$ a multiple of $\mathbf{v}$, and what is the multiple?

**Answer.** $A(1, 0) = (3, 0) = 3\,(1, 0)$. $A(2, 1) = (7, 2)$, which is not a multiple of $(2, 1)$ since $7/2 \neq 2/1$. $A(1, -1) = (3 - 1, -2) = (2, -2) = 2\,(1, -1)$. $A(-3, 3) = (-9 + 3, 6) = (-6, 6) = 2\,(-3, 3)$. So three of the four are only stretched, and the last two, which lie on the same line through the origin, are stretched by the same factor 2.

[Figure 2, animation: The blue arrow \mathbf{v} swings around the origin and the orange arrow is A\mathbf{v}. The number is the angle between them. It drops to 0 when \mathbf{v} reaches the direction of (-1, 1) and again at the direction of (-1, 0); those two lines are marked in green as they are found.]

In half a turn the angle reaches zero exactly twice: on the line through $(-1, 1)$, where $A$ doubles every arrow, and on the $x$ axis, where $A$ triples every arrow. (The other half turn passes through the same two lines.) Everywhere else $A\mathbf{v}$ leaves the line of $\mathbf{v}$.

**Definition.** Let $A$ be a square matrix. A vector $\mathbf{v} \neq \mathbf{0}$ is an **eigenvector** of $A$ if there is a number $\lambda$ with

$$
A\mathbf{v} = \lambda\mathbf{v}.
$$

The number $\lambda$ is then called an **eigenvalue** of $A$, and $\mathbf{v}$ is an eigenvector *for* $\lambda$.

The clause $\mathbf{v} \neq \mathbf{0}$ is there because $A\mathbf{0} = \lambda\mathbf{0}$ for every number $\lambda$, so the zero vector would tell us nothing. The eigenvalue, on the other hand, may be any number. If $\lambda$ is negative the arrow is flipped to the other side of the origin, still on its line. If $\lambda = 0$ the arrow is sent to $\mathbf{0}$.

Eigenvectors come in whole lines. If $A\mathbf{v} = \lambda\mathbf{v}$ and $k \neq 0$, then $A(k\mathbf{v}) = k\,A\mathbf{v} = k\lambda\mathbf{v} = \lambda(k\mathbf{v})$, so $k\mathbf{v}$ is an eigenvector for the same $\lambda$. That is why $(1, -1)$ and $(-3, 3)$ shared the factor 2 above. It is the line that matters, and I will call it an eigenline. ("Eigen" is German for "own": these are the matrix's own directions.) For our matrix we have found the eigenvalue 3 with eigenline the $x$ axis, and the eigenvalue 2 with eigenline along $(-1, 1)$.

## Finding eigenvalues without searching

Swinging an arrow around is not a method. For a matrix whose eigenlines are at awkward angles we would never hit them exactly, and we could not be sure we had found them all. We need an equation.

The trouble with $A\mathbf{v} = \lambda\mathbf{v}$ is that it has two unknowns of different kinds, the number $\lambda$ and the vector $\mathbf{v}$. Move everything to one side. Since $\lambda\mathbf{v} = \lambda I\mathbf{v}$, the equation says

$$
(A - \lambda I)\,\mathbf{v} = \mathbf{0}.
$$

Read this as a statement about the matrix $A - \lambda I$, which is $A$ with $\lambda$ subtracted from both diagonal entries. It says that this matrix sends some nonzero vector to the origin. Most matrices do not do that. A matrix that sends a nonzero vector to $\mathbf{0}$ has crushed a whole line onto a point, so it flattens the plane, and flattening is what a zero determinant detects. So we can look for $\lambda$ first, with no $\mathbf{v}$ in sight: find the values of $\lambda$ for which $A - \lambda I$ flattens the plane.

[Figure 3, animation: The transformation A - \lambda I as \lambda rises from 1 to 3.6, with the image of the unit square shaded and its signed area, the determinant, shown on the right. The grid collapses onto a line twice, at \lambda = 2 and at \lambda = 3, and those are the eigenvalues of A.]

For our matrix, $A - \lambda I = \begin{pmatrix} 3 - \lambda & 1 \\ 0 & 2 - \lambda \end{pmatrix}$ has determinant $(3 - \lambda)(2 - \lambda) - 1 \cdot 0$, which is zero exactly for $\lambda = 3$ and $\lambda = 2$. The search found both eigenvalues, and now we know there are no others. Here is the general statement, with the step "flattens the plane" made exact.

**Theorem.** **(Characteristic equation.)** Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. A number $\lambda$ is an eigenvalue of $A$ if and only if $\det(A - \lambda I) = 0$, that is,

$$
\lambda^2 - (a + d)\,\lambda + (ad - bc) = 0.
$$

**Proof.** By the rearrangement above, $\lambda$ is an eigenvalue exactly when the matrix $M = A - \lambda I$ satisfies $M\mathbf{v} = \mathbf{0}$ for some $\mathbf{v} \neq \mathbf{0}$. We show that a $2 \times 2$ matrix $M = \begin{pmatrix} p & q \\ r & s \end{pmatrix}$ has this property exactly when $\det M = 0$.

*If $\det M \neq 0$*, then $M$ has an inverse (shown in the determinant lesson), and $M\mathbf{v} = \mathbf{0}$ gives $\mathbf{v} = M^{-1}\mathbf{0} = \mathbf{0}$. So no nonzero vector is sent to $\mathbf{0}$.

*If $\det M = ps - qr = 0$*, compute

$$
M\begin{pmatrix} q \\ -p \end{pmatrix} = \begin{pmatrix} pq - qp \\ rq - sp \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}, \qquad M\begin{pmatrix} s \\ -r \end{pmatrix} = \begin{pmatrix} ps - qr \\ rs - sr \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}.
$$

If either $(q, -p)$ or $(s, -r)$ is nonzero, it is the vector we want. If both are zero, then $M$ is the zero matrix and sends every vector to $\mathbf{0}$.

Finally, $\det(A - \lambda I) = (a - \lambda)(d - \lambda) - bc = \lambda^2 - (a + d)\lambda + (ad - bc)$.

The quadratic $\lambda^2 - (a + d)\lambda + (ad - bc)$ is called the **characteristic polynomial** of $A$. Its coefficients are familiar: $ad - bc$ is the determinant, and $a + d$, the sum of the diagonal entries, is called the **trace**. Because a quadratic with roots $\lambda_1, \lambda_2$ factors as $(\lambda - \lambda_1)(\lambda - \lambda_2)$, the eigenvalues add up to the trace and multiply to the determinant. For our $A$: $3 + 2 = 5$ and $3 \cdot 2 = 6$. The second fact makes sense as geometry, since stretching by 3 along one line and by 2 along another multiplies areas by 6.

Once an eigenvalue is known, its eigenvectors are the nonzero solutions of $(A - \lambda I)\mathbf{v} = \mathbf{0}$, a pair of [linear equations](@linear-algebra/linear-systems-and-inverses) of which one is guaranteed to be a multiple of the other.

**Worked example.** **Eigenvalues and eigenvectors of $B = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.** Neither axis is an eigenline here, since $B(1, 0) = (4, 2)$ and $B(0, 1) = (1, 3)$, so we rely on the equation.

The trace is $7$ and the determinant is $12 - 2 = 10$, so the characteristic equation is $\lambda^2 - 7\lambda + 10 = 0$, which factors as $(\lambda - 2)(\lambda - 5) = 0$. The eigenvalues are $2$ and $5$.

For $\lambda = 5$: $B - 5I = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$, and $(B - 5I)(x, y) = \mathbf{0}$ reads $-x + y = 0$ and $2x - 2y = 0$. Both say $y = x$, so the eigenvectors are the nonzero multiples of $(1, 1)$.

For $\lambda = 2$: $B - 2I = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$, and both equations say $2x + y = 0$, so the eigenvectors are the nonzero multiples of $(1, -2)$.

*Check.* $B(1, 1) = (4 + 1, 2 + 3) = (5, 5) = 5\,(1, 1)$, and $B(1, -2) = (4 - 2, 2 - 6) = (2, -4) = 2\,(1, -2)$.

## Three kinds of matrix

A quadratic equation with real coefficients has two different real roots, one repeated root, or no real roots. All three happen for matrices, and each has a clear geometric meaning. The quantity that decides is the discriminant of the characteristic polynomial, $(a + d)^2 - 4(ad - bc)$.

**Two different real eigenvalues.** This is the case of $A$ and $B$ above: two eigenlines with different stretch factors.

**A repeated eigenvalue.** Take the shear $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, which slides each point sideways by its height.

**Pause and try.** Picture the shear $S$, which sends $(x, y)$ to $(x + y, y)$. Which arrows stay on their own line? Then confirm with the characteristic equation.

**Answer.** An arrow on the $x$ axis has height 0 and does not move at all, so it is an eigenvector with eigenvalue 1. Any arrow with $y \neq 0$ keeps its height while its tip slides sideways by $y$, so its direction changes. Equation: the trace is 2 and the determinant is 1, so $\lambda^2 - 2\lambda + 1 = (\lambda - 1)^2 = 0$ and the only eigenvalue is 1. Then $S - I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, and $(S - I)(x, y) = (y, 0) = \mathbf{0}$ forces $y = 0$: only the $x$ axis.

[Figure 4, animation: Five arrows under the shear with columns (1, 0) and (1, 1), each with its own dashed line. Only the arrow on the x axis stays on its line; the other four are tipped off theirs. A shear has a single eigenline.]

So a repeated eigenvalue can come with only one eigenline. It does not have to: the matrix $2I = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$ has characteristic polynomial $(\lambda - 2)^2$ as well, and it doubles every vector, so every nonzero vector is an eigenvector. A repeated root tells you to look at $A - \lambda I$ directly.

**No real eigenvalues.** Take the quarter turn $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, which sends $(x, y)$ to $(-y, x)$. A rotation by an angle other than $0^\circ$ or $180^\circ$ turns every arrow off its line, so it should have no eigenvectors, and the algebra agrees: the trace is 0 and the determinant is 1, so the characteristic equation is $\lambda^2 + 1 = 0$, which no real number satisfies.

[Figure 5, animation: The five arrows of the opening figure under a rotation that grows from 0^\circ to 60^\circ. Every arrow leaves its line at once. A rotation of the plane has no real eigenvectors.]

The equation $\lambda^2 + 1 = 0$ does have solutions among the [complex numbers](@precalculus/complex-numbers), $\lambda = \pm i$, and in a fuller treatment these complex eigenvalues encode the rotation. In the real plane there is no arrow that a quarter turn leaves on its line, and that is the statement we need here.

**Key idea.** An eigenvector of $A$ is a nonzero $\mathbf{v}$ with $A\mathbf{v} = \lambda\mathbf{v}$: on its line, $A$ is multiplication by the number $\lambda$. The eigenvalues are the roots of $\det(A - \lambda I) = 0$, and a $2 \times 2$ matrix has two eigenlines, one, the whole plane, or none.

## Eigenvectors for different eigenvalues point in different directions

In the first case we found two eigenlines, and they were different lines. That was no accident, and the consequence is what makes eigenvectors usable.

**Theorem.** Let $\mathbf{v}_1$ and $\mathbf{v}_2$ be eigenvectors of a $2 \times 2$ matrix $A$ for eigenvalues $\lambda_1 \neq \lambda_2$. Then neither is a multiple of the other, and every vector $\mathbf{x}$ in the plane can be written in exactly one way as

$$
\mathbf{x} = \alpha\,\mathbf{v}_1 + \beta\,\mathbf{v}_2 .
$$

**Proof.** Suppose $\mathbf{v}_2 = k\,\mathbf{v}_1$ for some number $k$. Apply $A$ to both sides. The left side becomes $\lambda_2\mathbf{v}_2$. The right side becomes $k\,A\mathbf{v}_1 = k\lambda_1\mathbf{v}_1 = \lambda_1\mathbf{v}_2$. So $\lambda_2\mathbf{v}_2 = \lambda_1\mathbf{v}_2$, that is, $(\lambda_2 - \lambda_1)\,\mathbf{v}_2 = \mathbf{0}$. Since $\lambda_2 - \lambda_1 \neq 0$, this forces $\mathbf{v}_2 = \mathbf{0}$, which contradicts the definition of an eigenvector. The same argument with the roles exchanged shows $\mathbf{v}_1$ is not a multiple of $\mathbf{v}_2$.

Now let $P$ be the matrix with columns $\mathbf{v}_1$ and $\mathbf{v}_2$. The columns are not parallel, so $\det P \neq 0$ and $P$ is invertible. The equation $\alpha\mathbf{v}_1 + \beta\mathbf{v}_2 = \mathbf{x}$ is $P(\alpha, \beta) = \mathbf{x}$, and it has exactly one solution, $(\alpha, \beta) = P^{-1}\mathbf{x}$.

Two vectors of which neither is a multiple of the other are called **linearly independent**, and the theorem says they form a basis of the plane: a pair of arrows out of which everything else can be mixed, just like $\mathbf{i}$ and $\mathbf{j}$. A basis made of eigenvectors is an **eigenbasis**. The shear shows that the hypothesis $\lambda_1 \neq \lambda_2$ cannot be dropped, since all its eigenvectors lie on one line and cannot reach a point off the $x$ axis.

## Why eigenvectors make powers easy

Here is the payoff. Suppose $\mathbf{x} = \alpha\mathbf{v}_1 + \beta\mathbf{v}_2$ with $\mathbf{v}_1, \mathbf{v}_2$ eigenvectors. Applying $A$ once, by linearity,

$$
A\mathbf{x} = \alpha\,A\mathbf{v}_1 + \beta\,A\mathbf{v}_2 = \alpha\lambda_1\mathbf{v}_1 + \beta\lambda_2\mathbf{v}_2 .
$$

The result has the same form with new coefficients, so applying $A$ again multiplies them by $\lambda_1$ and $\lambda_2$ once more.

**Theorem.** If $A\mathbf{v}_1 = \lambda_1\mathbf{v}_1$ and $A\mathbf{v}_2 = \lambda_2\mathbf{v}_2$, then for every whole number $n \ge 0$ and all numbers $\alpha, \beta$,

$$
A^n(\alpha\mathbf{v}_1 + \beta\mathbf{v}_2) = \alpha\lambda_1^n\,\mathbf{v}_1 + \beta\lambda_2^n\,\mathbf{v}_2 .
$$

**Proof.** By [induction](@discrete-math/induction) on $n$. For $n = 0$ both sides are $\alpha\mathbf{v}_1 + \beta\mathbf{v}_2$. If the formula holds for $n$, then

$$
A^{n+1}(\alpha\mathbf{v}_1 + \beta\mathbf{v}_2) = A\bigl(\alpha\lambda_1^n\mathbf{v}_1 + \beta\lambda_2^n\mathbf{v}_2\bigr) = \alpha\lambda_1^n\,A\mathbf{v}_1 + \beta\lambda_2^n\,A\mathbf{v}_2 = \alpha\lambda_1^{n+1}\mathbf{v}_1 + \beta\lambda_2^{n+1}\mathbf{v}_2,
$$

using linearity and then the two eigenvector equations.

Now a concrete model. A region has 900 thousand people, some in the city and some in the suburbs. Each year 10% of the city's residents move to the suburbs and 20% of the suburbs' residents move to the city. If $c$ and $s$ are this year's populations in thousands, next year's are $0.9c + 0.2s$ and $0.1c + 0.8s$:

$$
\begin{pmatrix} c \\ s \end{pmatrix} \longmapsto M\begin{pmatrix} c \\ s \end{pmatrix}, \qquad M = \begin{pmatrix} 0.9 & 0.2 \\ 0.1 & 0.8 \end{pmatrix}.
$$

Start with 300 thousand in the city and 600 thousand in the suburbs. Where do things stand after 15 years? Done directly, that is fifteen matrix multiplications.

**Worked example.** **Fifteen years in one line.** The trace of $M$ is $1.7$ and the determinant is $0.72 - 0.02 = 0.7$, so the characteristic equation is $\lambda^2 - 1.7\lambda + 0.7 = (\lambda - 1)(\lambda - 0.7) = 0$. The eigenvalues are $1$ and $0.7$.

For $\lambda = 1$: $M - I = \begin{pmatrix} -0.1 & 0.2 \\ 0.1 & -0.2 \end{pmatrix}$, and both rows say $c = 2s$. Take $\mathbf{v}_1 = (2, 1)$. For $\lambda = 0.7$: $M - 0.7I = \begin{pmatrix} 0.2 & 0.2 \\ 0.1 & 0.1 \end{pmatrix}$, and both rows say $c + s = 0$. Take $\mathbf{v}_2 = (1, -1)$.

Next we write the starting vector in the eigenbasis: we want $(300, 600) = \alpha\,(2, 1) + \beta\,(1, -1)$, so $2\alpha + \beta = 300$ and $\alpha - \beta = 600$. Adding the equations gives $3\alpha = 900$, so $\alpha = 300$ and $\beta = -300$. By the theorem,

$$
M^n\begin{pmatrix} 300 \\ 600 \end{pmatrix} = 300\begin{pmatrix} 2 \\ 1 \end{pmatrix} - 300\,(0.7)^n\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 600 - 300\,(0.7)^n \\ 300 + 300\,(0.7)^n \end{pmatrix}.
$$

With $n = 15$, $(0.7)^{15} \approx 0.00475$, and the populations are about $598.6$ and $301.4$ thousand.

*Check with $n = 1$.* The formula gives $(600 - 210,\ 300 + 210) = (390, 510)$. Directly: $0.9 \cdot 300 + 0.2 \cdot 600 = 390$ and $0.1 \cdot 300 + 0.8 \cdot 600 = 510$.

[Figure 6, steps: The populations (city, suburbs) in thousands, year by year. The starting point is split into a green piece along the eigenvector (2, 1) and a purple piece along the eigenvector (1, -1). Each year the green piece is multiplied by 1 and the purple piece by 0.7, so the point slides toward the tip of the green arrow at (600, 300).]

  - step: Start at (300, 600). It is 300 (2, 1), the green arrow, minus 300 (1, -1), the purple arrow.
  - step: One year multiplies the green piece by 1 and the purple piece by 0.7. The point moves to (390, 510).
  - step: A second year shrinks the purple piece by 0.7 again: (453, 447).
  - step: After 5 years the purple piece is 0.7 to the fifth power, about a sixth, of its first size.
  - step: After 15 years less than half a percent of it is left. The populations are within 2 thousand of the eigenvector (600, 300).
The formula says more than the answer for year 15. Because $(0.7)^n$ shrinks toward 0, the second piece dies away and the population approaches $300\,(2, 1) = (600, 300)$: twice as many people in the city as in the suburbs. And that limit depends on the start only through the total.

**Pause and try.** Suppose instead that all 900 thousand people start in the suburbs. Without multiplying any matrices, find the populations after $n$ years and the long-run split.

**Answer.** Write $(0, 900) = \alpha\,(2, 1) + \beta\,(1, -1)$: $2\alpha + \beta = 0$ and $\alpha - \beta = 900$, so $3\alpha = 900$, $\alpha = 300$, $\beta = -600$. Then $M^n(0, 900) = (600 - 600\,(0.7)^n,\ 300 + 600\,(0.7)^n)$. The long-run split is $(600, 300)$ again. The reason is that $\mathbf{v}_2 = (1, -1)$ has coordinates adding to 0, so the total of 900 has to be carried entirely by $\alpha\,(2, 1)$, which forces $\alpha = 300$ for every start with that total.

[Figure 7, animation: Nine different starting populations followed for 14 years under the migration matrix. Each point slides along a line of constant total toward the green eigenline along (2, 1), where the city holds twice as many people as the suburbs.]

The same reasoning explains the long-run behavior of any matrix with an eigenbasis. In $\alpha\lambda_1^n\mathbf{v}_1 + \beta\lambda_2^n\mathbf{v}_2$, the term whose eigenvalue is larger in absolute value outgrows the other, so after many steps the result points almost along that eigenvector (provided its coefficient is not zero). For our first matrix $A$, with eigenvalues 3 and 2, the ratio of the two terms shrinks like $(2/3)^n$, and repeated application lines every arrow up with the $x$ axis, unless it started on the other eigenline. The [Fibonacci numbers](@discrete-math/fibonacci-and-recursion) obey the same law: each step is one multiplication by a fixed matrix, and the ratio of consecutive terms settles at the larger eigenvalue of that matrix, the golden ratio. One of the problems below works a similar sequence with whole-number eigenvalues.

## Two mistakes to avoid

**Common mistake.** **Reading eigenvalues off the diagonal.** For $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$ the eigenvalues were the diagonal entries 3 and 2, and it is tempting to do the same for any matrix. That worked only because of the 0 below the diagonal, which kills the $bc$ term in $(a - \lambda)(d - \lambda) - bc$. For $B = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ the diagonal entries are 4 and 3 and the eigenvalues are 5 and 2. What the diagonal always gives is the sum: $4 + 3 = 5 + 2$.

**Common mistake.** **Adding eigenvectors.** A sum of eigenvectors for *different* eigenvalues is not an eigenvector. For $A$, the vectors $(1, 0)$ and $(-1, 1)$ are eigenvectors, and their sum is $(0, 1)$, which $A$ sends to $(1, 2)$. The two pieces are stretched by different factors, 3 and 2, so their sum changes direction. (A sum of eigenvectors for the *same* eigenvalue is an eigenvector, if it is not zero.)

What was hard here was that the defining equation $A\mathbf{v} = \lambda\mathbf{v}$ hides two unknowns in one line. The step that untangles them is to ask a question about $\lambda$ alone: for which numbers does $A - \lambda I$ flatten the plane? The determinant answers that, and the eigenvectors then come from a small linear system. The reusable idea is the change of viewpoint that follows. Described in the basis of its eigenvectors, a matrix only multiplies each coordinate by a number, and anything done repeatedly with the matrix becomes arithmetic with powers.

**Check yourself.** The matrix $C$ has characteristic equation $\lambda^2 - 4\lambda + 4 = 0$. What can you say about its eigenvectors?
Answer: Its only eigenvalue is 2, and it has either one eigenline or every direction is an eigenline A repeated root gives one eigenvalue. Whether the eigenvectors fill a line or the plane depends on $C - 2I$: if it is the zero matrix, every vector works; otherwise one line.

**Recap.** - An eigenvector of $A$ is a nonzero vector with $A\mathbf{v} = \lambda\mathbf{v}$. The number $\lambda$ is its eigenvalue, and every nonzero multiple of $\mathbf{v}$ is an eigenvector for the same $\lambda$.
- $\lambda$ is an eigenvalue exactly when $\det(A - \lambda I) = 0$. For a $2 \times 2$ matrix this is $\lambda^2 - (\text{trace})\,\lambda + \det = 0$, so the eigenvalues sum to the trace and multiply to the determinant.
- For each eigenvalue, the eigenvectors are the nonzero solutions of $(A - \lambda I)\mathbf{v} = \mathbf{0}$.
- Two different real roots give two eigenlines. A repeated root gives one eigenline (a shear) or the whole plane (a multiple of $I$). No real roots means no real eigenvectors (a rotation).
- Eigenvectors for different eigenvalues are linearly independent, so they form a basis.
- $A^n(\alpha\mathbf{v}_1 + \beta\mathbf{v}_2) = \alpha\lambda_1^n\mathbf{v}_1 + \beta\lambda_2^n\mathbf{v}_2$. In the long run the eigenvalue of largest absolute value wins.

## Problems

The first three are computations, the next three use the eigenbasis, and the last two are proofs.

**Problem 1.** Let $D = \begin{pmatrix} 1 & 2 \\ 2 & -2 \end{pmatrix}$. Without solving any equation, decide which of $(2, 1)$, $(1, 1)$ and $(1, -2)$ are eigenvectors of $D$, and give the eigenvalues. Check your eigenvalues against the trace and determinant.

**Solution.** $D(2, 1) = (2 + 2, 4 - 2) = (4, 2) = 2\,(2, 1)$: an eigenvector with eigenvalue 2. $D(1, 1) = (3, 0)$, which is not a multiple of $(1, 1)$. $D(1, -2) = (1 - 4, 2 + 4) = (-3, 6) = -3\,(1, -2)$: an eigenvector with eigenvalue $-3$. Check: $2 + (-3) = -1$ is the trace $1 + (-2)$, and $2 \cdot (-3) = -6$ is the determinant $-2 - 4$.

**Problem 2.** Find the eigenvalues and eigenvectors of $\begin{pmatrix} 5 & -2 \\ 4 & -1 \end{pmatrix}$, and verify them.

**Solution.** Trace $4$, determinant $-5 + 8 = 3$: $\lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3) = 0$, so $\lambda = 1$ or $3$. For $\lambda = 1$: the matrix minus $I$ is $\begin{pmatrix} 4 & -2 \\ 4 & -2 \end{pmatrix}$, giving $4x - 2y = 0$, so $y = 2x$: multiples of $(1, 2)$. For $\lambda = 3$: $\begin{pmatrix} 2 & -2 \\ 4 & -4 \end{pmatrix}$ gives $x = y$: multiples of $(1, 1)$. Verify: the matrix sends $(1, 2)$ to $(5 - 4, 4 - 2) = (1, 2)$ and $(1, 1)$ to $(3, 3)$.

**Problem 3.** For each matrix, say how many real eigenvalues it has and how many eigenlines: (a) $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$, (b) $\begin{pmatrix} 1 & -2 \\ 1 & 3 \end{pmatrix}$, (c) $\begin{pmatrix} 1 & 4 \\ 1 & 1 \end{pmatrix}$.

**Solution.** (a) Trace 4, determinant 4: $(\lambda - 2)^2 = 0$, one eigenvalue, 2. The matrix minus $2I$ is $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, which is not zero and sends $(x, y)$ to $(y, 0)$, so the eigenvectors have $y = 0$: one eigenline, the $x$ axis. (b) Trace 4, determinant $3 + 2 = 5$: $\lambda^2 - 4\lambda + 5 = 0$ has discriminant $16 - 20 = -4 < 0$. No real eigenvalues and no eigenlines. (c) Trace 2, determinant $1 - 4 = -3$: $\lambda^2 - 2\lambda - 3 = (\lambda - 3)(\lambda + 1) = 0$. Two eigenvalues, $3$ and $-1$, and two eigenlines: for $3$, $-2x + 4y = 0$ gives multiples of $(2, 1)$; for $-1$, $2x + 4y = 0$ gives multiples of $(2, -1)$.

**Problem 4.** The matrix $F = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ reflects the plane across the line $y = x$. Predict its eigenvalues and eigenlines from the geometry, then confirm with the characteristic equation.

**Solution.** A reflection leaves every point of its mirror line where it is, so the line $y = x$ is an eigenline with eigenvalue 1. An arrow perpendicular to the mirror is sent to its opposite, so the line along $(1, -1)$ is an eigenline with eigenvalue $-1$. Every other arrow lands on the other side of the mirror, off its line. Algebra: trace 0, determinant $-1$, so $\lambda^2 - 1 = 0$ and $\lambda = \pm 1$. Check: $F(1, 1) = (1, 1)$ and $F(1, -1) = (-1, 1) = -(1, -1)$.

**Problem 5.** For $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$ and $\mathbf{x} = (1, 1)$, compute $A^5\mathbf{x}$ using the eigenvectors $(1, 0)$ and $(-1, 1)$. Then check by multiplying five times.

**Solution.** Write $(1, 1) = \alpha\,(1, 0) + \beta\,(-1, 1)$: the second coordinate gives $\beta = 1$, and then $\alpha - 1 = 1$ gives $\alpha = 2$. So $A^5\mathbf{x} = 2 \cdot 3^5\,(1, 0) + 1 \cdot 2^5\,(-1, 1) = (486 - 32,\ 32) = (454, 32)$. Directly, each step sends $(x, y)$ to $(3x + y, 2y)$: $(1, 1) \to (4, 2) \to (14, 4) \to (46, 8) \to (146, 16) \to (454, 32)$.

**Problem 6.** A sequence starts $x_0 = 1$, $x_1 = 1$ and continues by $x_{n+1} = x_n + 2x_{n-1}$, so it runs $1, 1, 3, 5, 11, 21, \dots$ (a) Check that the pair $(x_{n+1}, x_n)$ is obtained from $(x_n, x_{n-1})$ by the matrix $G = \begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix}$. (b) Find the eigenvalues and eigenvectors of $G$. (c) Find a formula for $x_n$, and say what $x_{n+1}/x_n$ approaches.

**Solution.** (a) $G(x_n, x_{n-1}) = (x_n + 2x_{n-1},\ x_n) = (x_{n+1}, x_n)$. (b) Trace 1, determinant $-2$: $\lambda^2 - \lambda - 2 = (\lambda - 2)(\lambda + 1) = 0$. For $\lambda = 2$: $G - 2I = \begin{pmatrix} -1 & 2 \\ 1 & -2 \end{pmatrix}$ gives $x = 2y$, eigenvector $(2, 1)$. For $\lambda = -1$: $G + I = \begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix}$ gives $x = -y$, eigenvector $(1, -1)$. (c) The pair $(x_{n+1}, x_n)$ equals $G^n(x_1, x_0) = G^n(1, 1)$. Write $(1, 1) = \alpha\,(2, 1) + \beta\,(1, -1)$: $2\alpha + \beta = 1$ and $\alpha - \beta = 1$ give $\alpha = \frac23$, $\beta = -\frac13$. So

$$
(x_{n+1}, x_n) = \tfrac23 \cdot 2^n\,(2, 1) - \tfrac13\,(-1)^n\,(1, -1),
$$

and reading the second coordinate, $x_n = \dfrac{2^{n+1} + (-1)^n}{3}$. Check: $x_5 = \frac{64 - 1}{3} = 21$. The term with $2^n$ dominates, so $x_{n+1}/x_n$ approaches the larger eigenvalue, 2. (For example $21/11 \approx 1.91$.)

**Problem 7.** Let $\mathbf{v}$ be an eigenvector of $A$ with eigenvalue $\lambda$. Prove: (a) $\mathbf{v}$ is an eigenvector of $A^2$ with eigenvalue $\lambda^2$; (b) if $A$ is invertible, then $\lambda \neq 0$ and $\mathbf{v}$ is an eigenvector of $A^{-1}$ with eigenvalue $1/\lambda$.

**Solution.** (a) $A^2\mathbf{v} = A(A\mathbf{v}) = A(\lambda\mathbf{v}) = \lambda\,A\mathbf{v} = \lambda^2\mathbf{v}$, and $\mathbf{v} \neq \mathbf{0}$. (b) If $\lambda$ were 0 we would have $A\mathbf{v} = \mathbf{0}$, and applying $A^{-1}$ would give $\mathbf{v} = A^{-1}\mathbf{0} = \mathbf{0}$, which is impossible for an eigenvector. So $\lambda \neq 0$. Now apply $A^{-1}$ to both sides of $A\mathbf{v} = \lambda\mathbf{v}$: $\mathbf{v} = \lambda\,A^{-1}\mathbf{v}$, and dividing by $\lambda$ gives $A^{-1}\mathbf{v} = \frac{1}{\lambda}\mathbf{v}$. Undoing a stretch by $\lambda$ along a line is a stretch by $1/\lambda$ along the same line.

**Problem 8.** A matrix is *symmetric* if it has the form $\begin{pmatrix} a & b \\ b & d \end{pmatrix}$. (a) Prove that a symmetric $2 \times 2$ matrix always has real eigenvalues. (b) The [dot product](@linear-algebra/dot-product) of $(v_1, v_2)$ and $(w_1, w_2)$ is $v_1w_1 + v_2w_2$, and two nonzero vectors are perpendicular exactly when it is 0. Prove that for a symmetric matrix $A$, $(A\mathbf{v}) \cdot \mathbf{w} = \mathbf{v} \cdot (A\mathbf{w})$ for all $\mathbf{v}, \mathbf{w}$, and deduce that eigenvectors for two different eigenvalues are perpendicular.

**Solution.** (a) The discriminant of $\lambda^2 - (a + d)\lambda + (ad - b^2)$ is $(a + d)^2 - 4ad + 4b^2 = (a - d)^2 + 4b^2$, a sum of squares, so it is never negative and the roots are real. (b) $(A\mathbf{v}) \cdot \mathbf{w} = (av_1 + bv_2)w_1 + (bv_1 + dv_2)w_2 = a\,v_1w_1 + b\,(v_2w_1 + v_1w_2) + d\,v_2w_2$. This expression is unchanged when $\mathbf{v}$ and $\mathbf{w}$ are exchanged, so it also equals $(A\mathbf{w}) \cdot \mathbf{v} = \mathbf{v} \cdot (A\mathbf{w})$. Now let $A\mathbf{v}_1 = \lambda_1\mathbf{v}_1$ and $A\mathbf{v}_2 = \lambda_2\mathbf{v}_2$ with $\lambda_1 \neq \lambda_2$. Then $\lambda_1\,(\mathbf{v}_1 \cdot \mathbf{v}_2) = (A\mathbf{v}_1) \cdot \mathbf{v}_2 = \mathbf{v}_1 \cdot (A\mathbf{v}_2) = \lambda_2\,(\mathbf{v}_1 \cdot \mathbf{v}_2)$, so $(\lambda_1 - \lambda_2)(\mathbf{v}_1 \cdot \mathbf{v}_2) = 0$ and $\mathbf{v}_1 \cdot \mathbf{v}_2 = 0$. Problem 4 is an instance: $F$ is symmetric, and its eigenvectors $(1, 1)$ and $(1, -1)$ are perpendicular.
