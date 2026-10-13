# What is a vector? Arrows, lists of numbers, and adding them

> A vector is a list of numbers read as a movement. Adding entry by entry matches placing arrows tip to tail, and two non-parallel arrows reach the whole plane.

Series: Linear Algebra (https://www.monocurl.com/monocurl-essays/linear-algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/linear-algebra/vectors/
Keywords: what is a vector, vector addition, tip to tail, scalar multiplication, linear combination, span, basis of the plane, components of a vector

[Figure 1, animation: One hour of flight seen from above. The plane points due east and flies at 240 km/h (blue) while the wind carries it north at 100 km/h (orange). The grey ring is where it would be in still air; the green line is the path it really follows.]

A pilot points her plane due east and flies at 240 km/h. A steady wind blows toward the north at 100 km/h. One hour later, how far is the plane from where it took off?

The answer 240 km ignores the wind. The answer 340 km adds the two speeds, and that is wrong as well, because the two motions do not point the same way. The true distance lies between them, and to find it we need a kind of quantity that remembers its direction along with its size, together with a rule for adding two of them. That quantity is a vector. This lesson builds vectors from the pilot's problem, then states precisely what they are and proves the facts about them that the rest of linear algebra stands on.

**Pause and try.** Before reading on, work out where the plane is after one hour, measured as kilometers east and kilometers north of the start, and then its straight-line distance from the start. You will need the [Pythagorean theorem](@geometry/pythagorean-theorem): in a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.

**Answer.** The plane's own flying moves it 240 km east. During the same hour the air it flies in has moved 100 km north and carried the plane with it. So the plane is 240 km east and 100 km north of the start. Those two displacements are the legs of a right triangle, and the distance is $\sqrt{240^2 + 100^2} = \sqrt{57600 + 10000} = \sqrt{67600} = 260$ km.

## Two motions, one after the other

Look at how that answer was reached. The two motions happened at the same time, yet we found the result by pretending they happened in turn: first fly 240 km east in still air, then let the wind push the plane 100 km north. The final position is the same either way, because each motion changes the position by a fixed amount no matter where the plane happens to be.

Draw each motion as an arrow whose length and direction are those of the displacement. Then "one after the other" has a picture: start the second arrow where the first one ends. This is called placing the arrows **tip to tail**, and the arrow from the very start to the very end is the combined motion.

The pilot's arrows are perpendicular, which hides part of the story, so here are two arrows that are not. Call them $\mathbf{u}$ and $\mathbf{v}$: $\mathbf{u}$ moves 3 to the right and 1 up, and $\mathbf{v}$ moves 1 to the right and 2 up.

**Pause and try.** Start at the corner of a sheet of grid paper. Follow $\mathbf{u}$ and then $\mathbf{v}$: where are you? Now start again and follow $\mathbf{v}$ first, then $\mathbf{u}$. Do you expect to arrive at the same place, and what shape do the four arrows make?

**Answer.** Following $\mathbf{u}$ puts you 3 right and 1 up; then $\mathbf{v}$ adds 1 right and 2 up, for a total of 4 right and 3 up. In the other order you are first at 1 right and 2 up, and then $\mathbf{u}$ adds 3 right and 1 up: again 4 right and 3 up. The four arrows form a parallelogram, and both routes end at the corner opposite the start.

[Figure 2, animation: The arrows \mathbf{u} = (3, 1) and \mathbf{v} = (1, 2) placed tip to tail in both orders. Either route ends at the point (4, 3), and the two routes together outline a parallelogram.]

## An arrow is a list of instructions

Notice how I described $\mathbf{u}$: "3 to the right and 1 up". That is a pair of numbers, and nothing else was needed. I never said where the arrow starts. The pilot's wind is the same wind over the airport and over the next town; a displacement of "3 right, 1 up" is the same instruction wherever you carry it out.

[Figure 3, image: Five arrows, all of them the vector (2, 1): each goes 2 to the right and 1 up. The one that starts at the origin ends at the point with coordinates (2, 1).]

So a vector in the plane is fully described by two numbers, its horizontal and vertical displacement. We write them in a column,

$$
\mathbf{u} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}, \qquad \mathbf{v} = \begin{pmatrix} 1 \\ 2 \end{pmatrix},
$$

or in a row as $(3, 1)$ when space is short. The numbers are called the **components** of the vector. When the arrow is drawn starting at the origin, its tip sits at the point whose coordinates are the components, and this is how a vector can also stand for a position: the position you reach by following it from the origin.

Nothing forces the list to stop at two numbers. A displacement of a drone needs three (east, north, up), and the state of a system with a hundred measurements needs a hundred. Here is the general definition.

**Definition.** Let $n$ be a positive whole number. A **vector in $\mathbb{R}^n$** is an ordered list of $n$ real numbers $\mathbf{v} = (v_1, v_2, \dots, v_n)$, called its components. Two vectors are equal when all their components agree. For vectors $\mathbf{u}, \mathbf{v}$ in $\mathbb{R}^n$ and a real number $c$, called a **scalar**, we define

$$
\mathbf{u} + \mathbf{v} = (u_1 + v_1, \dots, u_n + v_n), \qquad c\,\mathbf{v} = (c\,v_1, \dots, c\,v_n).
$$

The vector $(0, \dots, 0)$ is the **zero vector**, written $\mathbf{0}$.

The symbol $\mathbb{R}$ stands for the real numbers, and $\mathbb{R}^2$ is the plane. Addition in the definition is done one component at a time, with no mention of arrows. We now have two candidates for "the sum of two vectors", the geometric one from the last section and this arithmetic one, and we have to check that they are the same thing.

## Why adding components matches tip to tail

Go back to $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$, and break each arrow into its horizontal and vertical legs.

[Figure 4, steps: Each arrow is replaced by a horizontal leg and a vertical leg. Following \mathbf{u} and then \mathbf{v} moves 3 + 1 to the right and 1 + 2 up, so the tip-to-tail sum has components (3 + 1, 1 + 2) = (4, 3).]

  - step: The arrow u is 3 to the right and 1 up.
  - step: Start v at the tip of u. It adds 1 to the right and 2 up.
  - step: Slide the legs to the edges. In total: 3 + 1 to the right and 1 + 2 up.
  - step: So the arrow from the start to the end is (3 + 1, 1 + 2) = (4, 3).
The picture suggests the general argument, and the argument needs one precise statement of what it means to draw a vector somewhere: *the arrow for $\mathbf{v} = (v_1, v_2)$ drawn from the point $(p_1, p_2)$ ends at the point $(p_1 + v_1,\ p_2 + v_2)$.* That is the meaning of "go $v_1$ across and $v_2$ up from where you are".

**Theorem.** Let $\mathbf{u} = (u_1, u_2)$ and $\mathbf{v} = (v_1, v_2)$ be vectors in $\mathbb{R}^2$. Draw $\mathbf{u}$ from the origin and then $\mathbf{v}$ from the tip of $\mathbf{u}$. The final tip is the point $(u_1 + v_1,\ u_2 + v_2)$. Drawing $\mathbf{v}$ first and then $\mathbf{u}$ ends at the same point, and when $\mathbf{u}$ and $\mathbf{v}$ are not parallel the four arrows are the sides of a parallelogram one of whose diagonals is $\mathbf{u} + \mathbf{v}$. (When one is a multiple of the other, the figure flattens onto a single line.)

**Proof.** The arrow for $\mathbf{u}$ drawn from $(0, 0)$ ends at $(u_1, u_2)$. The arrow for $\mathbf{v}$ drawn from $(u_1, u_2)$ ends at $(u_1 + v_1,\ u_2 + v_2)$. In the other order, $\mathbf{v}$ from the origin ends at $(v_1, v_2)$, and $\mathbf{u}$ drawn from there ends at $(v_1 + u_1,\ v_2 + u_2)$. Since $a + b = b + a$ for real numbers, the two endpoints are the same point, and its coordinates are the components of $\mathbf{u} + \mathbf{v}$ as defined above.

The four arrows form a closed four-sided figure. Its two blue sides are both the vector $\mathbf{u}$, so they are parallel and equally long, and likewise the two orange sides are both $\mathbf{v}$. A four-sided figure whose opposite sides are parallel is a parallelogram. The arrow from the origin to the common endpoint joins two opposite corners, so it is a diagonal.

The proof also shows that $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$, and it reduced that fact to the same fact about numbers. Most properties of vectors are proved this way: say it in components, then use ordinary arithmetic in each one.

For the pilot, flying is $(240, 0)$ and the wind is $(0, 100)$ in kilometers per hour, so the plane's velocity over the ground is $(240, 0) + (0, 100) = (240, 100)$.

## Length, scaling and subtraction

The pilot's question was about distance, which is the length of an arrow. The legs of $\mathbf{v} = (v_1, v_2)$ are perpendicular, so by the Pythagorean theorem the **length** of $\mathbf{v}$ is

$$
|\mathbf{v}| = \sqrt{v_1^2 + v_2^2}.
$$

So $|(240, 100)| = 260$ and $|(4, 3)| = 5$. Lengths do not add when vectors do: $|\mathbf{u}| + |\mathbf{v}| = \sqrt{10} + \sqrt{5} \approx 5.40$, while $|\mathbf{u} + \mathbf{v}| = 5$. Walking two sides of a triangle is longer than walking the third.

What if the wind blew for two hours instead of one? The displacement would be $(0, 200)$: the same direction, twice as long. Multiplying a vector by a scalar $c$ multiplies every component by $c$, and the next figure shows what that does to the arrow as $c$ changes.

[Figure 5, animation: The vector \mathbf{w} = (2, 1) multiplied by a scalar c that runs from 2 down to -1.5. The arrow stays on one line through the origin; its length is multiplied by |c|, and it reverses when c is negative.]

The scaled arrow always lies on the line through the origin and $\mathbf{w}$. Its length is

$$
|c\,\mathbf{w}| = \sqrt{(c w_1)^2 + (c w_2)^2} = \sqrt{c^2}\,\sqrt{w_1^2 + w_2^2} = |c|\,|\mathbf{w}|,
$$

where $\sqrt{c^2} = |c|$ is the absolute value, because a length cannot be negative. A negative scalar reverses the arrow. In particular $(-1)\mathbf{w}$, written $-\mathbf{w}$, is the same displacement run backwards, and **subtraction** is defined as $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v})$, which in components is $(u_1 - v_1, u_2 - v_2)$. It answers the question "what must I add to $\mathbf{v}$ to get $\mathbf{u}$?", since $\mathbf{v} + (\mathbf{u} - \mathbf{v}) = \mathbf{u}$.

**Worked example.** **Correcting for the wind.** The pilot wants to travel due east over the ground at 240 km/h while the wind blows north at 100 km/h. In which direction, and how fast, must she fly through the air?

We know the sum we want and one of its two parts, so this is a subtraction. Let $\mathbf{a}$ be her velocity through the air, $\mathbf{w} = (0, 100)$ the wind, and $\mathbf{g} = (240, 0)$ the ground velocity she wants. The requirement is $\mathbf{a} + \mathbf{w} = \mathbf{g}$, so

$$
\mathbf{a} = \mathbf{g} - \mathbf{w} = (240 - 0,\ 0 - 100) = (240, -100).
$$

She must point the nose partly south, enough to fly 100 km/h southward, which the wind then cancels. Her airspeed is $|\mathbf{a}| = \sqrt{240^2 + 100^2} = 260$ km/h.

*Check.* $(240, -100) + (0, 100) = (240, 0)$, due east at 240 km/h.

[Figure 6, image: The correction for the wind. To move due east over the ground (green), the pilot flies along the blue arrow (240, -100), and the wind (orange) supplies the missing (0, 100).]

## Building arrows out of two fixed ones

Scaling and adding can be combined, and the simplest instance is hiding in the coordinates themselves. Let $\mathbf{i} = (1, 0)$ be one step to the right and $\mathbf{j} = (0, 1)$ one step up. Then

$$
(4, 3) = (4, 0) + (0, 3) = 4\,\mathbf{i} + 3\,\mathbf{j}.
$$

The components of a vector are the amounts of $\mathbf{i}$ and $\mathbf{j}$ needed to build it. That raises a question: is there anything special about $\mathbf{i}$ and $\mathbf{j}$? Suppose the only moves allowed were multiples of our earlier arrows $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$. Could we still get everywhere?

**Pause and try.** Find numbers $a$ and $b$ with $a\,\mathbf{u} + b\,\mathbf{v} = (2, -1)$. Then do the same for the target $(-1, 3)$. Guessing is allowed.

**Answer.** A negative amount is needed: $1\,\mathbf{u} + (-1)\mathbf{v} = (3, 1) - (1, 2) = (2, -1)$, so $a = 1$, $b = -1$. For the second target, $(-1)\mathbf{u} + 2\,\mathbf{v} = (-3, -1) + (2, 4) = (-1, 3)$, so $a = -1$, $b = 2$.

[Figure 7, animation: Mixtures a\,\mathbf{u} + b\,\mathbf{v} of \mathbf{u} = (3, 1) and \mathbf{v} = (1, 2). As a and b change, the tip visits the targets (4, 3), (-1, 3) and (2, -1). The slanted grid marks the whole-number mixtures.]

Guessing works for friendly targets. For an arbitrary one we need a method. Asking for $a\,\mathbf{u} + b\,\mathbf{v} = (w_1, w_2)$ is asking for

$$
a\begin{pmatrix}3\\1\end{pmatrix} + b\begin{pmatrix}1\\2\end{pmatrix} = \begin{pmatrix}w_1\\w_2\end{pmatrix}, \qquad\text{that is,}\qquad \begin{aligned} 3a + b &= w_1 \\ a + 2b &= w_2. \end{aligned}
$$

This is a [system of two linear equations](@algebra/systems-of-equations) in the unknowns $a$ and $b$, and it can be solved by elimination: combine the equations so that one unknown cancels.

**Worked example.** **Reaching $(7, 0)$ with $\mathbf{u}$ and $\mathbf{v}$.** We need $3a + b = 7$ and $a + 2b = 0$.

To eliminate $b$, double the first equation and subtract the second: $(6a + 2b) - (a + 2b) = 14 - 0$, so $5a = 14$ and $a = \frac{14}{5}$. The second equation then gives $b = -\frac{a}{2} = -\frac{7}{5}$.

*Check.* $\frac{14}{5}(3, 1) - \frac{7}{5}(1, 2) = \left(\frac{42 - 7}{5},\ \frac{14 - 14}{5}\right) = (7, 0)$.

The same elimination with letters in place of 7 and 0 gives $5a = 2w_1 - w_2$ and $5b = 3w_2 - w_1$. Whatever the target, there is a solution, and only one. Before stating this in general we need names.

**Definition.** A **linear combination** of vectors $\mathbf{u}$ and $\mathbf{v}$ is any vector of the form $a\,\mathbf{u} + b\,\mathbf{v}$ with $a, b$ real numbers. The set of all their linear combinations is the **span** of $\mathbf{u}$ and $\mathbf{v}$. A pair $\mathbf{u}, \mathbf{v}$ of vectors in $\mathbb{R}^2$ is a **basis** of $\mathbb{R}^2$ if every vector in $\mathbb{R}^2$ can be written as $a\,\mathbf{u} + b\,\mathbf{v}$ for exactly one pair of numbers $(a, b)$.

In the animation, the span is the set of points the green dot can reach, and "basis" says that it can reach every point, by one setting of the two dials only. The pair $\mathbf{i}, \mathbf{j}$ is a basis, called the **standard basis**, because $(x, y) = x\,\mathbf{i} + y\,\mathbf{j}$ and no other amounts will do. We have just seen evidence that $\mathbf{u}, \mathbf{v}$ is another.

## When two arrows are not enough

Not every pair works. Take $\mathbf{u} = (3, 1)$ again, with $\mathbf{p} = (1.5, 0.5)$ as its partner. Since $\mathbf{p} = \frac12 \mathbf{u}$, every combination is $a\,\mathbf{u} + b\,\mathbf{p} = (a + \frac{b}{2})\mathbf{u}$, a multiple of $\mathbf{u}$. The dot can only run back and forth along one line, and a target such as $(-1, 3)$, which is off that line, is unreachable. Two vectors are called **parallel** when one of them is a scalar multiple of the other. (Under this definition the zero vector is parallel to everything, since $\mathbf{0} = 0\,\mathbf{u}$.)

[Figure 8, animation: The partner of \mathbf{u} = (3, 1) slides from \mathbf{v} = (1, 2) to (1.5, 0.5), which is parallel to \mathbf{u}. The grid of mixtures closes up onto a single line, the number u_1 v_2 - u_2 v_1 falls to 0, and the point (-1, 3) can no longer be reached.]

The readout in that figure tracks the quantity that appeared as the 5 in "$5a = 14$". For $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$ it is $3 \cdot 2 - 1 \cdot 1 = 5$, and for the parallel pair it is $3 \cdot 0.5 - 1 \cdot 1.5 = 0$. The theorem says this one number decides everything.

**Theorem.** Let $\mathbf{u} = (u_1, u_2)$ and $\mathbf{v} = (v_1, v_2)$ be vectors in $\mathbb{R}^2$ and put $D = u_1 v_2 - u_2 v_1$.

- If $D \neq 0$, then $\mathbf{u}, \mathbf{v}$ is a basis of $\mathbb{R}^2$: every $\mathbf{w} = (w_1, w_2)$ equals $a\,\mathbf{u} + b\,\mathbf{v}$ for exactly one pair $(a, b)$, namely

$$
a = \frac{w_1 v_2 - w_2 v_1}{D}, \qquad b = \frac{u_1 w_2 - u_2 w_1}{D}.
$$

- If $D = 0$, then $\mathbf{u}$ and $\mathbf{v}$ are parallel, and their span is not all of $\mathbb{R}^2$.

Consequently two vectors in $\mathbb{R}^2$ span the plane exactly when they are not parallel.

**Proof.** *Part 1, existence.* With $a$ and $b$ as given, the first component of $a\,\mathbf{u} + b\,\mathbf{v}$ is

$$
a u_1 + b v_1 = \frac{w_1 v_2 u_1 - w_2 v_1 u_1 + u_1 w_2 v_1 - u_2 w_1 v_1}{D} = \frac{w_1 (u_1 v_2 - u_2 v_1)}{D} = w_1,
$$

because the two middle terms cancel. The second component is

$$
a u_2 + b v_2 = \frac{w_1 v_2 u_2 - w_2 v_1 u_2 + u_1 w_2 v_2 - u_2 w_1 v_2}{D} = \frac{w_2 (u_1 v_2 - u_2 v_1)}{D} = w_2,
$$

because the first and last terms cancel. So $a\,\mathbf{u} + b\,\mathbf{v} = \mathbf{w}$.

*Part 1, uniqueness.* Suppose $a\,\mathbf{u} + b\,\mathbf{v} = a'\mathbf{u} + b'\mathbf{v}$, and let $p = a - a'$, $q = b - b'$. Subtracting gives $p\,\mathbf{u} + q\,\mathbf{v} = \mathbf{0}$, that is, $p u_1 + q v_1 = 0$ and $p u_2 + q v_2 = 0$. Multiply the first equation by $v_2$, the second by $v_1$, and subtract: $p(u_1 v_2 - u_2 v_1) = 0$, so $pD = 0$ and $p = 0$. Multiply instead by $u_2$ and $u_1$ and subtract: $q(v_1 u_2 - v_2 u_1) = 0$, so $-qD = 0$ and $q = 0$. Hence $a = a'$ and $b = b'$.

*Part 2.* Suppose $D = 0$, so $u_1 v_2 = u_2 v_1$. If $\mathbf{u} = \mathbf{0}$ then $\mathbf{u} = 0\,\mathbf{v}$ and the two are parallel; every combination is then a multiple of $\mathbf{v}$. Otherwise one component of $\mathbf{u}$ is nonzero. If $u_1 \neq 0$, let $c = v_1 / u_1$; then $c u_1 = v_1$ and $c u_2 = u_2 v_1 / u_1 = u_1 v_2 / u_1 = v_2$, so $\mathbf{v} = c\,\mathbf{u}$. If $u_1 = 0$, then $u_2 \neq 0$ and $D = 0$ reads $u_2 v_1 = 0$, so $v_1 = 0$, and $\mathbf{v} = c\,\mathbf{u}$ with $c = v_2 / u_2$. In these cases every combination $a\,\mathbf{u} + b\,\mathbf{v} = (a + bc)\mathbf{u}$ is a multiple of $\mathbf{u}$.

So the span consists of the multiples of one vector $\mathbf{z} = (z_1, z_2)$. If $\mathbf{z} = \mathbf{0}$ the span is the origin alone. If not, the vector $(-z_2, z_1)$ is not in the span: were $(-z_2, z_1) = k(z_1, z_2)$, we would have $-z_2 = k z_1$ and $z_1 = k z_2$, hence $z_1 = -k^2 z_1$, so $(1 + k^2) z_1 = 0$ and $z_1 = 0$, and then $z_2 = -k z_1 = 0$, contradicting $\mathbf{z} \neq \mathbf{0}$.

*The last sentence.* If $\mathbf{u}, \mathbf{v}$ are not parallel, then $D \neq 0$ by Part 2, and they span by Part 1. If they are parallel, say $\mathbf{v} = c\,\mathbf{u}$, then $D = u_1 c u_2 - u_2 c u_1 = 0$ and they do not span by Part 2.

Read the theorem against the two animations. In the first, $D = 5$, the slanted grid covers the plane, and each target has one address $(a, b)$. In the second, $D$ shrinks to 0 as the grid closes up. The formulas for $a$ and $b$ have $D$ in the denominator, so they report the collapse in advance.

**Key idea.** Two vectors in the plane that do not lie on a common line through the origin are a basis: every vector is a combination $a\,\mathbf{u} + b\,\mathbf{v}$ of them in exactly one way. The test is $u_1 v_2 - u_2 v_1 \neq 0$.

**Worked example.** **Do $(6, -4)$ and $(-9, 6)$ span the plane?** Compute $D = 6 \cdot 6 - (-4)(-9) = 36 - 36 = 0$. They do not. The proof tells us how to exhibit the parallelism: $c = v_1 / u_1 = -9/6 = -\frac32$, and indeed $-\frac32 (6, -4) = (-9, 6)$. Their span is the line of multiples of $(6, -4)$, which is the line through the origin with [slope](@algebra/slope-and-lines) $-\frac23$. The vector $(4, 6)$, obtained by the recipe $(-z_2, z_1)$ from the proof, is not on it.

**Common mistake.** **Adding lengths instead of vectors.** "240 km/h plus a 100 km/h wind makes 340 km/h" treats the two velocities as plain numbers. That is correct only for a tailwind, when the arrows point the same way. In general you add the components and then take the length: $|(240, 100)| = 260$. The length of a sum is at most the sum of the lengths, and usually less.

**Common mistake.** **Thinking two different vectors always span the plane.** $(2, 1)$ and $(4, 2)$ are different vectors, but one is twice the other, so their combinations stay on one line. The condition that matters is "not parallel", and $D = 2 \cdot 2 - 1 \cdot 4 = 0$ detects the failure.

## What carries over to more dimensions

Everything defined by components works in $\mathbb{R}^n$ unchanged: addition, scaling, subtraction, and length, which is $\sqrt{v_1^2 + \dots + v_n^2}$. Linear combinations and span make sense for any number of vectors. What changes is the count needed to reach everything. In $\mathbb{R}^3$, two non-parallel vectors span only a plane through the origin, and a basis needs three vectors (Problem 8 looks at this). The number $D$ returns later in this series under the name [determinant](@linear-algebra/determinant), where it measures the area of the parallelogram we drew in the second figure.

Looking back, the hard step was the first one: agreeing that a pair of numbers read as "this far across, this far up" deserves to be treated as a single object. Once it is, adding arrows becomes adding numbers, and a geometric question (can I reach that point?) becomes two linear equations. [The next lesson](@linear-algebra/matrices-as-transformations) asks what happens when we move the basis arrows themselves and let every other vector follow.

**Check yourself.** Which of these pairs is a basis of $\mathbb{R}^2$?
Answer: $(1, 2)$ and $(2, 1)$ $D = 1 \cdot 1 - 2 \cdot 2 = -3 \neq 0$, so every vector is a combination of them in exactly one way.

**Recap.** - A vector in $\mathbb{R}^n$ is an ordered list of $n$ real numbers. In the plane it is drawn as an arrow, and the arrow may start anywhere.
- Vectors add component by component, and this agrees with placing arrows tip to tail. Both orders give the same sum, the diagonal of a parallelogram.
- $c\,\mathbf{v}$ multiplies each component by $c$. The length $|\mathbf{v}| = \sqrt{v_1^2 + v_2^2}$ is multiplied by $|c|$, and a negative $c$ reverses the arrow.
- A linear combination of $\mathbf{u}$ and $\mathbf{v}$ is $a\,\mathbf{u} + b\,\mathbf{v}$; the span is the set of all of them.
- With $D = u_1 v_2 - u_2 v_1$: if $D \neq 0$ the pair is a basis of $\mathbb{R}^2$, and if $D = 0$ the vectors are parallel and span at most a line.

## Problems

The first three repeat the lesson's moves, the next three combine them, and the last two go beyond the plane or ask for a proof.

**Problem 1.** Let $\mathbf{u} = (2, -1)$ and $\mathbf{v} = (-3, 4)$. Compute $\mathbf{u} + \mathbf{v}$, $3\mathbf{u}$, $\mathbf{u} - 2\mathbf{v}$ and $|\mathbf{u} + \mathbf{v}|$.

**Solution.** $\mathbf{u} + \mathbf{v} = (2 - 3,\ -1 + 4) = (-1, 3)$. $3\mathbf{u} = (6, -3)$. $2\mathbf{v} = (-6, 8)$, so $\mathbf{u} - 2\mathbf{v} = (2 + 6,\ -1 - 8) = (8, -9)$. Finally $|\mathbf{u} + \mathbf{v}| = \sqrt{(-1)^2 + 3^2} = \sqrt{10} \approx 3.16$.

**Problem 2.** A boat points straight across a river and moves at 4 m/s through the water. The current flows at 3 m/s along the river. The river is 100 m wide. Find the boat's speed over the ground, the time it takes to cross, and how far downstream it lands.

**Solution.** Put the first axis along the river and the second across it. The boat's velocity through the water is $(0, 4)$ and the current is $(3, 0)$, so its velocity over the ground is $(3, 4)$ m/s, with speed $\sqrt{9 + 16} = 5$ m/s. Only the second component carries it across: $100 / 4 = 25$ seconds. In that time the first component carries it $3 \times 25 = 75$ m downstream. Check: the displacement is $25\,(3, 4) = (75, 100)$, of length $125 = 5 \times 25$ meters.

**Problem 3.** The point $A$ has coordinates $(1, 2)$ and the point $B$ has coordinates $(4, 6)$. Find the vector that goes from $A$ to $B$, its length, and the coordinates of the point two fifths of the way from $A$ to $B$.

**Solution.** The vector from $A$ to $B$ is what must be added to $A$'s position to get $B$'s: $(4 - 1,\ 6 - 2) = (3, 4)$, of length $\sqrt{9 + 16} = 5$. Two fifths of the way along is $A$ plus $\frac25$ of that vector: $(1, 2) + \frac25 (3, 4) = (1 + 1.2,\ 2 + 1.6) = (2.2, 3.6)$. Its distance from $A$ is $\frac25 \cdot 5 = 2$, as it should be.

**Problem 4.** Write $(1, 8)$ as a linear combination of $\mathbf{u} = (3, 1)$ and $\mathbf{v} = (1, 2)$, first by elimination and then with the formulas of the theorem.

**Solution.** We need $3a + b = 1$ and $a + 2b = 8$. Doubling the first and subtracting the second gives $5a = 2 - 8 = -6$, so $a = -\frac65$. Then $b = 1 - 3a = 1 + \frac{18}{5} = \frac{23}{5}$. With the formulas, $D = 5$, $a = \frac{w_1 v_2 - w_2 v_1}{D} = \frac{1 \cdot 2 - 8 \cdot 1}{5} = -\frac65$ and $b = \frac{u_1 w_2 - u_2 w_1}{D} = \frac{3 \cdot 8 - 1 \cdot 1}{5} = \frac{23}{5}$. Check: $-\frac65 (3, 1) + \frac{23}{5}(1, 2) = \left(\frac{-18 + 23}{5},\ \frac{-6 + 46}{5}\right) = (1, 8)$.

**Problem 5.** For which values of the number $k$ do the vectors $(k, 2)$ and $(8, k)$ fail to be a basis of $\mathbb{R}^2$? For each such $k$, write one vector as a multiple of the other.

**Solution.** $D = k \cdot k - 2 \cdot 8 = k^2 - 16$, which is zero exactly when $k = 4$ or $k = -4$. For $k = 4$ the vectors are $(4, 2)$ and $(8, 4) = 2\,(4, 2)$. For $k = -4$ they are $(-4, 2)$ and $(8, -4) = -2\,(-4, 2)$. For every other $k$ the pair is a basis.

**Problem 6.** A parallelogram has one corner at the origin and sides $\mathbf{u}$ and $\mathbf{v}$ leaving that corner, where $\mathbf{u}, \mathbf{v}$ are any vectors in $\mathbb{R}^2$. Use vectors to prove that its two diagonals cross at the midpoint of each.

**Solution.** The corners are at $\mathbf{0}$, $\mathbf{u}$, $\mathbf{u} + \mathbf{v}$ and $\mathbf{v}$. One diagonal runs from $\mathbf{0}$ to $\mathbf{u} + \mathbf{v}$; its midpoint is halfway along, at $\frac12(\mathbf{u} + \mathbf{v})$. The other runs from $\mathbf{u}$ to $\mathbf{v}$. The vector from $\mathbf{u}$ to $\mathbf{v}$ is $\mathbf{v} - \mathbf{u}$, so its midpoint is $\mathbf{u} + \frac12(\mathbf{v} - \mathbf{u}) = \frac12 \mathbf{u} + \frac12 \mathbf{v}$. The two midpoints are the same point, so each diagonal passes through the midpoint of the other. For $\mathbf{u} = (3, 1)$, $\mathbf{v} = (1, 2)$ that point is $(2, 1.5)$.

**Problem 7.** The three vectors $\mathbf{i} = (1, 0)$, $\mathbf{j} = (0, 1)$ and $\mathbf{s} = (1, 1)$ certainly reach every point of the plane. Find two different ways to write $(2, 3)$ as $a\,\mathbf{i} + b\,\mathbf{j} + c\,\mathbf{s}$, and then explain why three vectors in $\mathbb{R}^2$ can never give every vector exactly one address $(a, b, c)$.

**Solution.** $(2, 3) = 2\,\mathbf{i} + 3\,\mathbf{j} + 0\,\mathbf{s}$, and also $(2, 3) = 0\,\mathbf{i} + 1\,\mathbf{j} + 2\,\mathbf{s}$, since $(0, 1) + (2, 2) = (2, 3)$. In general, take any three vectors $\mathbf{x}, \mathbf{y}, \mathbf{z}$ in $\mathbb{R}^2$. If two of them, say $\mathbf{x}$ and $\mathbf{y}$, are not parallel, they are a basis, so $\mathbf{z} = a\,\mathbf{x} + b\,\mathbf{y}$ for some $a, b$; then $\mathbf{z}$ has the two addresses $(a, b, 0)$ and $(0, 0, 1)$. If instead every two of them are parallel, then either all three are zero, or one is nonzero and the other two are multiples of it; in both cases the span is at most a line, so some vectors have no address at all. Either way uniqueness or existence fails.

**Problem 8.** In $\mathbb{R}^3$, let $\mathbf{u} = (1, 0, 1)$ and $\mathbf{v} = (0, 1, 1)$. (a) Is $(1, 2, 3)$ a linear combination of $\mathbf{u}$ and $\mathbf{v}$? (b) Is $(1, 2, 4)$? (c) Describe the span of $\mathbf{u}$ and $\mathbf{v}$ by an equation, and conclude that two vectors cannot be enough to span $\mathbb{R}^3$ in this case.

**Solution.** A combination is $a\,\mathbf{u} + b\,\mathbf{v} = (a, b, a + b)$. (a) Matching the first two components forces $a = 1$, $b = 2$, and then the third component is $a + b = 3$, which matches. So $(1, 2, 3) = \mathbf{u} + 2\mathbf{v}$. (b) Again $a = 1$ and $b = 2$ are forced, but the third component would be 3, not 4. So $(1, 2, 4)$ is not a combination. (c) The span is the set of vectors $(x, y, z)$ with $z = x + y$: every combination $(a, b, a + b)$ satisfies it, and any vector satisfying it is $x\,\mathbf{u} + y\,\mathbf{v}$. That is a plane through the origin, and it misses $(1, 2, 4)$ along with every other vector whose third component is not the sum of the first two.
