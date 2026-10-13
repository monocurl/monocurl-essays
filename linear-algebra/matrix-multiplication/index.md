# Why matrix multiplication is defined the way it is

> Multiplying matrices means doing one transformation after another. The rows-times-columns rule, the failure of AB = BA and associativity all follow from that.

Series: Linear Algebra (https://www.monocurl.com/monocurl-essays/linear-algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/linear-algebra/matrix-multiplication/
Keywords: why matrix multiplication works, matrix multiplication explained, composition of linear transformations, AB not equal BA, matrix multiplication associative, rows times columns

[Figure 1, animation: The same two moves in the two possible orders. On the left the plane is turned a quarter turn and then sheared; on the right it is sheared and then turned. The grids, the letter F and the two basis arrows end in different places.]

Matrices are added entry by entry, so you might expect them to be multiplied entry by entry too. The rule that is actually taught looks nothing like that:

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}.
$$

Each entry of the answer mixes a row of the first matrix with a column of the second. Worse, the result depends on the order: $AB$ and $BA$ are usually different matrices, which never happens with numbers. A rule this strange must have been forced on us by something, and this lesson shows by what. Once you see the source, you will be able to rebuild the rule from nothing, and you will know why order matters before computing anything.

What I rely on from [the previous lesson](@linear-algebra/matrices-as-transformations) fits in three sentences. A map $T$ of the plane is **linear** if $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ and $T(c\,\mathbf{v}) = c\,T(\mathbf{v})$ for all vectors $\mathbf{u}, \mathbf{v}$ and numbers $c$. A linear map is completely determined by where it sends $\mathbf{i} = (1, 0)$ and $\mathbf{j} = (0, 1)$, and writing those two landing spots as columns gives its matrix. Applying the matrix to a vector is

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = x\begin{pmatrix} a \\ c \end{pmatrix} + y\begin{pmatrix} b \\ d \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}.
$$

## One transformation after another

If a matrix is a motion of the plane, the natural thing to do with two matrices is to perform one motion and then the other. Take two that are easy to picture. The quarter turn $R$ rotates the plane $90^\circ$ counterclockwise; it sends $\mathbf{i}$ to $(0, 1)$ and $\mathbf{j}$ to $(-1, 0)$. The shear $S$ slides each point sideways by its height; it leaves $\mathbf{i}$ at $(1, 0)$ and sends $\mathbf{j}$ to $(1, 1)$. As matrices,

$$
R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \qquad S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}.
$$

Turn the plane with $R$, then shear the result with $S$. The combined motion takes each vector $\mathbf{v}$ to $S(R\mathbf{v})$. The combined motion is again given by a matrix provided it is linear, and that is quick to check for any two linear maps.

**Definition.** For maps $T$ and $U$ of the plane, the **composition** $T \circ U$ is the map that applies $U$ first and then $T$: $(T \circ U)(\mathbf{v}) = T(U(\mathbf{v}))$.

**Theorem.** If $T$ and $U$ are linear maps of $\mathbb{R}^2$, then $T \circ U$ is linear.

**Proof.** For vectors $\mathbf{u}, \mathbf{v}$: $T(U(\mathbf{u} + \mathbf{v})) = T(U(\mathbf{u}) + U(\mathbf{v}))$ because $U$ is additive, and this equals $T(U(\mathbf{u})) + T(U(\mathbf{v}))$ because $T$ is additive. For a number $c$: $T(U(c\,\mathbf{v})) = T(c\,U(\mathbf{v})) = c\,T(U(\mathbf{v}))$, using homogeneity of $U$ and then of $T$.

So "turn, then shear" has a matrix, and we know how to find the matrix of any linear map: see where $\mathbf{i}$ and $\mathbf{j}$ end up.

**Pause and try.** Follow $\mathbf{i}$ through the quarter turn and then the shear. Where does it end? Do the same for $\mathbf{j}$, and write the two results as the columns of a matrix. (The shear sends $(x, y)$ to $(x + y, y)$.)

**Answer.** The turn sends $\mathbf{i}$ to $(0, 1)$, and the shear sends $(0, 1)$ to $(0 + 1, 1) = (1, 1)$. The turn sends $\mathbf{j}$ to $(-1, 0)$, and the shear, which does not move points of height 0, leaves it at $(-1, 0)$. The matrix of "turn, then shear" is $\begin{pmatrix} 1 & -1 \\ 1 & 0 \end{pmatrix}$.

[Figure 2, steps: Tracking the basis arrows through a quarter turn followed by a shear. The blue arrow goes from (1, 0) to (0, 1) to (1, 1); the orange arrow goes from (0, 1) to (-1, 0) and stays there. The final positions, printed under the matrix after the shear, are its columns.]

  - step: Before anything moves, the basis arrows are (1, 0) and (0, 1), and the matrix is the one that does nothing.
  - step: First the quarter turn R. The blue arrow goes to (0, 1) and the orange arrow to (-1, 0).
  - step: Then the shear S, applied to the arrows where they now are. Blue slides to (1, 1); orange has height 0 and stays.
  - step: The final positions, written as columns, are the matrix of the whole motion. We call it the product SR.
## The rule, derived

Nothing in that computation was special to a turn and a shear. Let $A$ and $B$ be any two matrices,

$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \qquad B = \begin{pmatrix} e & f \\ g & h \end{pmatrix},
$$

and apply $B$ first, then $A$. The vector $\mathbf{i}$ goes first to $B\mathbf{i} = (e, g)$, the first column of $B$. Then $A$ acts on that vector. Here is the step that produces the rule: $(e, g)$ is $e$ steps of $\mathbf{i}$ and $g$ steps of $\mathbf{j}$, so $A$ carries it to $e$ steps of $A$'s first column and $g$ steps of $A$'s second,

$$
A\begin{pmatrix} e \\ g \end{pmatrix} = e\begin{pmatrix} a \\ c \end{pmatrix} + g\begin{pmatrix} b \\ d \end{pmatrix} = \begin{pmatrix} ae + bg \\ ce + dg \end{pmatrix}.
$$

The figure runs this step on numbers: $A$ is the shear $S$ and $B = \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}$.

[Figure 3, steps: One column of a product. B sends \mathbf{i} to (2, 1), which is 2 steps of \mathbf{i} and 1 of \mathbf{j}. Applying the shear A turns that into 2 steps of A's first column and 1 step of its second: (3, 1), the first column of AB. The second column, (0, 1), comes from B\mathbf{j} = (-1, 1) in the same way.]

  - step: B sends i to (2, 1), the first column of B. That is 2 steps of i and 1 step of j.
  - step: Now apply the shear A. The grid moves and the path of three steps moves with it.
  - step: The path is now 2 steps of A's first column (1, 0) and 1 step of its second (1, 1). It ends at (3, 1).
  - step: The other column: B sends j to (-1, 1), and A carries that to -1(1, 0) + 1(1, 1) = (0, 1).
The same reasoning applied to $\mathbf{j}$, which $B$ sends to its second column $(f, h)$, gives $A(f, h) = (af + bh,\ cf + dh)$. Those two vectors are where "$B$, then $A$" sends the basis, so they are the columns of its matrix. That matrix is what we *define* the product to be.

**Definition.** Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ and $B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$. The **product** $AB$ is the matrix whose first column is $A$ applied to the first column of $B$ and whose second column is $A$ applied to the second column of $B$:

$$
AB = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}.
$$

The definition arranges for $AB$ to do the right thing to $\mathbf{i}$ and $\mathbf{j}$. We should confirm that it does the right thing to every vector.

**Theorem.** For all $2 \times 2$ matrices $A, B$ and every vector $\mathbf{v}$ in $\mathbb{R}^2$, $(AB)\mathbf{v} = A(B\mathbf{v})$. That is, $AB$ is the matrix of the composition "apply $B$, then apply $A$".

**Proof.** Both sides are linear maps of $\mathbf{v}$: the left side is multiplication by a matrix, and the right side is a composition of two linear maps, which is linear by the previous theorem. They agree at $\mathbf{v} = \mathbf{i}$, where the left side is the first column of $AB$ and the right side is $A$ applied to the first column of $B$, and these are equal by the definition of $AB$. They agree at $\mathbf{v} = \mathbf{j}$ for the same reason. Two linear maps that agree on $\mathbf{i}$ and $\mathbf{j}$ agree on every vector, since $\mathbf{v} = x\,\mathbf{i} + y\,\mathbf{j}$ forces both to equal $x$ times the common value at $\mathbf{i}$ plus $y$ times the common value at $\mathbf{j}$.

**Key idea.** The product $AB$ means "do $B$, then do $A$". Its columns are $A$ applied to the columns of $B$, and the rows-times-columns rule is what that sentence says when written out in entries.

Now look back at the entry in row 1, column 1: $ae + bg$. It pairs the first row of $A$, $(a, b)$, with the first column of $B$, $(e, g)$. The reason is visible in the derivation. A column of $B$ is a vector being fed to $A$, and each row of $A$ produces one component of the output. So the entry in row $r$ and column $s$ of $AB$ is always row $r$ of $A$ paired with column $s$ of $B$. Entry-by-entry multiplication would be simpler to carry out, but it would not describe one motion followed by another, or anything else of geometric interest.

The order of the letters deserves a comment. $AB$ applies $B$ first because the vector stands on the right: in $A(B\mathbf{v})$ the matrix next to $\mathbf{v}$ acts first, as with functions, where $f(g(x))$ applies $g$ first.

**Worked example.** **A product computed by columns.** Let $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 3 & 0 \\ 1 & 1 \end{pmatrix}$. The first column of $AB$ is $A$ applied to $(3, 1)$: $3\,(1, 0) + 1\,(2, 1) = (5, 1)$. The second column is $A$ applied to $(0, 1)$: $0\,(1, 0) + 1\,(2, 1) = (2, 1)$. So

$$
AB = \begin{pmatrix} 5 & 2 \\ 1 & 1 \end{pmatrix}.
$$

*Check by rows.* Row 1 of $A$ with column 1 of $B$: $1 \cdot 3 + 2 \cdot 1 = 5$. Row 1 with column 2: $1 \cdot 0 + 2 \cdot 1 = 2$. Row 2 with column 1: $0 \cdot 3 + 1 \cdot 1 = 1$. Row 2 with column 2: $0 \cdot 0 + 1 \cdot 1 = 1$.

## Order matters

We found that "turn, then shear" is $SR = \begin{pmatrix} 1 & -1 \\ 1 & 0 \end{pmatrix}$. Now reverse the order.

**Pause and try.** Compute $RS$, the matrix of "shear, then turn", by tracking $\mathbf{i}$ and $\mathbf{j}$. Compare it with $SR$. (The turn sends $(x, y)$ to $(-y, x)$.)

**Answer.** The shear leaves $\mathbf{i}$ at $(1, 0)$, and the turn sends that to $(0, 1)$. The shear sends $\mathbf{j}$ to $(1, 1)$, and the turn sends that to $(-1, 1)$. So $RS = \begin{pmatrix} 0 & -1 \\ 1 & 1 \end{pmatrix}$, which is not $SR$. In the animation at the top of the page these are the right and left panels.

This is no accident of the example. Shearing slides points along horizontal lines. If the turn comes first, the lines that were horizontal are vertical by the time the shear arrives, so the shear acts on different material. For motions, order matters far more often than not: putting on socks and then shoes is not the same as shoes and then socks. Numbers commute because stretching a line by 2 and then by 3 is the same as by 3 and then by 2, and that is a special feature of stretches.

Some pairs of matrices do commute, and it is worth knowing which. Two rotations about the origin commute: turning by $30^\circ$ and then by $60^\circ$ gives the same quarter turn as $60^\circ$ and then $30^\circ$.

[Figure 4, animation: Two rotations in both orders. On the left the plane turns by 30^\circ and then by 60^\circ; on the right by 60^\circ and then by 30^\circ. Both end at the same quarter turn, so these two matrices commute.]

**Worked example.** **The angle addition formulas from a matrix product.** The rotation by an angle $\theta$ sends $\mathbf{i}$ to $(\cos\theta, \sin\theta)$ and $\mathbf{j}$ to $(-\sin\theta, \cos\theta)$, so its matrix is $R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$. Turning by $\beta$ and then by $\alpha$ is turning by $\alpha + \beta$, so $R_\alpha R_\beta = R_{\alpha + \beta}$. Compute the first column of the product, $R_\alpha$ applied to $(\cos\beta, \sin\beta)$:

$$
\cos\beta\begin{pmatrix} \cos\alpha \\ \sin\alpha \end{pmatrix} + \sin\beta\begin{pmatrix} -\sin\alpha \\ \cos\alpha \end{pmatrix} = \begin{pmatrix} \cos\alpha\cos\beta - \sin\alpha\sin\beta \\ \sin\alpha\cos\beta + \cos\alpha\sin\beta \end{pmatrix}.
$$

This must equal the first column of $R_{\alpha+\beta}$, which is $(\cos(\alpha+\beta), \sin(\alpha+\beta))$. Comparing components gives

$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta, \qquad \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta.
$$

These are the [angle addition formulas](@trigonometry/angle-addition), obtained here from two facts: rotations are linear, and two turns in a row add their angles. The argument is not circular. The columns of $R_\theta$ came from the definition of cosine and sine as coordinates on the unit circle together with the quarter-turn rule $(x, y) \mapsto (-y, x)$, and linearity came from the fact that a rotation is a rigid motion, so it carries parallelograms to parallelograms. Neither step used a formula for the cosine or sine of a sum, and the derivation holds for all angles, positive or negative.

*Check.* With $\alpha = 30^\circ$, $\beta = 60^\circ$: $\cos 90^\circ = \frac{\sqrt3}{2}\cdot\frac12 - \frac12\cdot\frac{\sqrt3}{2} = 0$ and $\sin 90^\circ = \frac12 \cdot \frac12 + \frac{\sqrt3}{2}\cdot\frac{\sqrt3}{2} = \frac14 + \frac34 = 1$.

## Grouping does not matter

With three matrices there is a second worry. The expression $ABC$ could mean $(AB)C$, where we first compute the matrix $AB$ and then multiply by $C$, or $A(BC)$. Checking that these agree by brute force means expanding eight entries, each a sum of four triple products. The transformation view makes the question disappear.

[Figure 5, steps: Three maps applied to the vector \mathbf{v} = (2, 0): a quarter turn C, then a shear B, then a stretch A. Grouping the hops as (AB)C or as A(BC) changes which two are fused into one, and does not change where \mathbf{v} ends: at (3, 1) in both cases.]

  - step: Apply C, then B, then A to the vector v = (2, 0): three hops, ending at (3, 1).
  - step: (AB)C: hop by C, then one fused hop AB. By the meaning of AB it lands where the hops B and A would.
  - step: A(BC): one fused hop BC, then A. Again the same start and the same end.
**Theorem.** **(Associativity.)** For all $2 \times 2$ matrices $A$, $B$, $C$: $(AB)C = A(BC)$.

**Proof.** Let $\mathbf{v}$ be any vector. Using $(MN)\mathbf{w} = M(N\mathbf{w})$ twice, first with $M = AB$, $N = C$ and then with $M = A$, $N = B$,

$$
\bigl((AB)C\bigr)\mathbf{v} = (AB)(C\mathbf{v}) = A\bigl(B(C\mathbf{v})\bigr).
$$

Using it twice more, with $M = A$, $N = BC$ and then with $M = B$, $N = C$,

$$
\bigl(A(BC)\bigr)\mathbf{v} = A\bigl((BC)\mathbf{v}\bigr) = A\bigl(B(C\mathbf{v})\bigr).
$$

So the matrices $(AB)C$ and $A(BC)$ send every vector to the same place. In particular they send $\mathbf{i}$ and $\mathbf{j}$ to the same places, which means they have the same columns. Matrices with the same columns are equal.

No entry was ever expanded. Both groupings describe "do $C$, then $B$, then $A$", and the brackets only say where you pause to write down an intermediate matrix. This is the standard example of a fact that is tedious in coordinates and immediate once the objects are understood as functions, because composition of functions is always associative.

## Doing nothing, repeating, and losing everything

*The identity.* The motion that leaves every vector alone sends $\mathbf{i}$ to $\mathbf{i}$ and $\mathbf{j}$ to $\mathbf{j}$, so its matrix is $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, the **identity matrix**. Doing nothing before or after $A$ changes nothing: $AI = IA = A$. It plays the part of the number 1.

*Powers.* $A^2$ means $AA$: perform the motion twice. Two quarter turns make a half turn, which sends every $(x, y)$ to $(-x, -y)$, so $R^2 = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -I$ without any arithmetic. (If you have seen [complex numbers](@precalculus/complex-numbers), this is $i^2 = -1$ again: multiplying by $i$ is a quarter turn.) For the shear, each application slides a point of height $y$ a further $y$ to the right.

**Pause and try.** Compute $S^2$ and $S^3$ for $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and guess $S^n$.

**Answer.** $S$ fixes $\mathbf{i}$, so the first column is always $(1, 0)$. For the second column: $S\mathbf{j} = (1, 1)$, then $S(1, 1) = (2, 1)$, then $S(2, 1) = (3, 1)$. So $S^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $S^3 = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$, and the pattern is $S^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$ (Problem 5 asks for a proof).

[Figure 6, animation: The shear S applied three times in a row. Each application slides the tip of the orange arrow one more unit to the right, and the top-right entry of the matrix counts the applications.]

*Zero without a zero factor.* With numbers, $xy = 0$ forces $x = 0$ or $y = 0$. Let $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$, which flattens the plane onto the vertical axis, and $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, which flattens it onto the horizontal axis. Neither is the zero matrix. But $B$ puts everything on the vertical axis, and $A$ sends the whole vertical axis to the origin, so $AB$ sends every vector to $\mathbf{0}$.

[Figure 7, animation: A product that is zero although neither factor is. First B flattens the plane onto the vertical axis; then A flattens that axis onto the origin. The matrix of the combined motion has every entry 0. The pale arrows and the grey F stay behind to show where everything started; the red dot is where all of it ends.]

One consequence is that you cannot cancel freely: from $AB = AC$ it does not follow that $B = C$. (Here $AB = A0$, where $0$ is the zero matrix, and $B \neq 0$.) Which matrices *can* be cancelled is settled in [the next lesson](@linear-algebra/determinant): exactly those with an inverse.

**Common mistake.** **Reading $AB$ from left to right.** In "$AB$" the eye meets $A$ first, so it is tempting to think $A$ acts first. The vector sits on the right, in $AB\mathbf{v} = A(B\mathbf{v})$, so $B$ reaches it first. To get the matrix of "rotate, then shear" you must write the shear on the left: $SR$. Writing $RS$ gives the other motion, with a different matrix.

**Common mistake.** **Using number algebra that assumes $AB = BA$.** The expansion $(A + B)^2 = A^2 + 2AB + B^2$ is false for matrices in general. Multiplying out honestly gives $(A + B)(A + B) = A^2 + AB + BA + B^2$, and the middle terms combine into $2AB$ only when $AB = BA$. Keep every product in the order it arose.

Looking back, the definition of the product is "the matrix of one linear map followed by another", and the rule at the top of the page is the bookkeeping for it. The harder a fact about the bookkeeping looks (non-commutativity, associativity), the more it helps to restate it about the maps, where it is usually plain. [The next lesson](@linear-algebra/determinant) asks what a matrix does to areas, and the fact that areas scaled by $B$ and then by $A$ are scaled by $AB$ will do real work there.

**Check yourself.** $A$ is a reflection and $B$ is a rotation. Which matrix describes "reflect first, then rotate"?
Answer: $BA$ $BA\mathbf{v} = B(A\mathbf{v})$: the reflection $A$ acts on $\mathbf{v}$ first, and the rotation $B$ acts on the result.

**Recap.** - The composition of two linear maps is linear, so "do $B$, then $A$" has a matrix. That matrix is the product $AB$.
- The columns of $AB$ are $A$ applied to the columns of $B$. Written out: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$, each entry a row of $A$ paired with a column of $B$.
- $(AB)\mathbf{v} = A(B\mathbf{v})$ for every vector $\mathbf{v}$: the right-hand factor acts first.
- In general $AB \neq BA$. For the quarter turn $R$ and the shear $S$, $SR = \begin{pmatrix} 1 & -1 \\ 1 & 0 \end{pmatrix}$ and $RS = \begin{pmatrix} 0 & -1 \\ 1 & 1 \end{pmatrix}$.
- $(AB)C = A(BC)$ always, because both sides are "do $C$, then $B$, then $A$".
- $AI = IA = A$. A product can be the zero matrix when neither factor is.

## Problems

The first three are computations, the next three ask you to reason with the composition picture, and the last two connect to other topics.

**Problem 1.** Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Compute $AB$ and $BA$. Describe in words what multiplying by $B$ on the right did to $A$, and what multiplying on the left did.

**Solution.** The columns of $AB$ are $A$ applied to the columns of $B$: $A(0, 1) = (2, 4)$ and $A(1, 0) = (1, 3)$, so $AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$. The columns of $BA$ are $B$ applied to the columns of $A$; since $B$ swaps the two coordinates, $B(1, 3) = (3, 1)$ and $B(2, 4) = (4, 2)$, so $BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$. Multiplying by $B$ on the right swapped the columns of $A$; multiplying on the left swapped its rows.

**Problem 2.** Let $F = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ be the reflection across the horizontal axis and $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ the quarter turn. Find the matrix of "reflect, then turn" and of "turn, then reflect", and identify each as a single familiar motion.

**Solution.** "Reflect, then turn" is $RF$. Track the basis: $F\mathbf{i} = (1, 0)$, and $R(1, 0) = (0, 1)$; $F\mathbf{j} = (0, -1)$, and $R(0, -1) = (1, 0)$. So $RF = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, which swaps coordinates: the reflection across the line $y = x$. "Turn, then reflect" is $FR$: $R\mathbf{i} = (0, 1)$ and $F(0, 1) = (0, -1)$; $R\mathbf{j} = (-1, 0)$ and $F(-1, 0) = (-1, 0)$. So $FR = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$, which sends $(x, y)$ to $(-y, -x)$: the reflection across the line $y = -x$.

**Problem 3.** Let $D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ and $E = \begin{pmatrix} 5 & 0 \\ 0 & -1 \end{pmatrix}$. Compute $DE$ and $ED$, and explain geometrically why they are equal.

**Solution.** $DE$ has columns $D(5, 0) = (10, 0)$ and $D(0, -1) = (0, -3)$, so $DE = \begin{pmatrix} 10 & 0 \\ 0 & -3 \end{pmatrix}$. $ED$ has columns $E(2, 0) = (10, 0)$ and $E(0, 3) = (0, -3)$: the same matrix. Each of $D$ and $E$ scales the horizontal direction by one number and the vertical direction by another, without mixing the two. Along each axis we are just multiplying numbers, $2 \cdot 5 = 5 \cdot 2$ and $3 \cdot (-1) = (-1) \cdot 3$, and numbers commute.

**Problem 4.** Find all matrices $B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$ that commute with the shear $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, that is, with $SB = BS$.

**Solution.** $SB$ has columns $S(e, g) = (e + g, g)$ and $S(f, h) = (f + h, h)$, so $SB = \begin{pmatrix} e + g & f + h \\ g & h \end{pmatrix}$. $BS$ has columns $B(1, 0) = (e, g)$ and $B(1, 1) = (e + f, g + h)$, so $BS = \begin{pmatrix} e & e + f \\ g & g + h \end{pmatrix}$. Comparing entries: $e + g = e$ gives $g = 0$; $f + h = e + f$ gives $h = e$; the bottom-left entries agree; and $h = g + h$ gives $g = 0$ again. So $B$ commutes with $S$ exactly when $B = \begin{pmatrix} e & f \\ 0 & e \end{pmatrix}$ for some numbers $e, f$: a uniform scaling by $e$ combined with a horizontal shear. Check with $e = 2, f = 5$: $SB = \begin{pmatrix} 2 & 7 \\ 0 & 2 \end{pmatrix} = BS$.

**Problem 5.** Prove that $S^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$ for every whole number $n \geq 1$. More generally, show that shears $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$ and $\begin{pmatrix} 1 & m \\ 0 & 1 \end{pmatrix}$ multiply by adding $k$ and $m$.

**Solution.** Do the general claim first. The product $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & m \\ 0 & 1 \end{pmatrix}$ has first column $(1, 0)$, since both matrices fix $\mathbf{i}$, and second column $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$ applied to $(m, 1)$, which is $m\,(1, 0) + 1\,(k, 1) = (m + k, 1)$. So the product is $\begin{pmatrix} 1 & k + m \\ 0 & 1 \end{pmatrix}$. For the powers, argue by induction. The claim holds for $n = 1$. If $S^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$, then $S^{n+1} = S\,S^n$ is the product of shears with $k = 1$ and $m = n$, which is $\begin{pmatrix} 1 & n + 1 \\ 0 & 1 \end{pmatrix}$. Geometrically: sliding each point by $m$ times its height and then by $k$ times its height slides it by $(k + m)$ times its height.

**Problem 6.** Let $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$. Compute $P^2$ and $N^2$, and explain each result by describing what the map does.

**Solution.** $P$ sends $(x, y)$ to $(x, 0)$: it drops each point straight onto the horizontal axis. A point already on that axis does not move, so doing $P$ twice is the same as doing it once: $P^2 = P$. By columns: $P(1, 0) = (1, 0)$ and $P(0, 0) = (0, 0)$. $N$ sends $(x, y)$ to $(y, 0)$; in particular $N\mathbf{i} = \mathbf{0}$ and $N\mathbf{j} = \mathbf{i}$. Every output of $N$ lies on the horizontal axis, and $N$ sends that whole axis to the origin, so $N^2$ sends everything to $\mathbf{0}$: $N^2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$. By columns: $N(N\mathbf{i}) = N\mathbf{0} = \mathbf{0}$ and $N(N\mathbf{j}) = N\mathbf{i} = \mathbf{0}$. So a nonzero matrix can have square zero.

**Problem 7.** Use $R_\theta R_\theta = R_{2\theta}$, where $R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$, to derive formulas for $\cos 2\theta$ and $\sin 2\theta$. Check them at $\theta = 30^\circ$.

**Solution.** The first column of $R_\theta R_\theta$ is $R_\theta$ applied to $(\cos\theta, \sin\theta)$: $\cos\theta\,(\cos\theta, \sin\theta) + \sin\theta\,(-\sin\theta, \cos\theta) = (\cos^2\theta - \sin^2\theta,\ 2\sin\theta\cos\theta)$. It must equal the first column of $R_{2\theta}$, namely $(\cos 2\theta, \sin 2\theta)$. Hence $\cos 2\theta = \cos^2\theta - \sin^2\theta$ and $\sin 2\theta = 2\sin\theta\cos\theta$. At $\theta = 30^\circ$: $\cos^2 - \sin^2 = \frac34 - \frac14 = \frac12 = \cos 60^\circ$, and $2 \cdot \frac12 \cdot \frac{\sqrt3}{2} = \frac{\sqrt3}{2} = \sin 60^\circ$.

**Problem 8.** For real numbers $a, b$ let $M(a, b) = \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$. (a) Show that $M(a, b)\,M(c, d) = M(ac - bd,\ ad + bc)$. (b) Deduce that any two matrices of this form commute. (c) Compare with the product of complex numbers $(a + bi)(c + di)$, and say which matrix plays the part of $i$.

**Solution.** (a) The first column of the product is $M(a, b)$ applied to $(c, d)$: $c\,(a, b) + d\,(-b, a) = (ac - bd,\ bc + ad)$. The second column is $M(a, b)$ applied to $(-d, c)$: $-d\,(a, b) + c\,(-b, a) = (-(ad + bc),\ ac - bd)$. So the product is $\begin{pmatrix} ac - bd & -(ad + bc) \\ ad + bc & ac - bd \end{pmatrix} = M(ac - bd,\ ad + bc)$. (b) Swapping the roles of $(a, b)$ and $(c, d)$ gives $M(c, d)M(a, b) = M(ca - db,\ cb + da)$, which is the same matrix because multiplication of numbers commutes. (c) $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$: the same rule. The matrix $M(a, b)$ acts on the plane the way multiplication by $a + bi$ acts on complex numbers. The part of $i$ is played by $M(0, 1) = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, the quarter turn $R$, and $R^2 = M(-1, 0) = -I$ matches $i^2 = -1$.
