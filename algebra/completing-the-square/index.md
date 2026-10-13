# Completing the square and the quadratic formula

> Solve x² + 6x = 16 by rearranging a square and a rectangle into a bigger square with one corner missing, then turn that picture into the quadratic formula.

Series: Algebra (https://www.monocurl.com/monocurl-essays/algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/algebra/completing-the-square/
Keywords: completing the square, quadratic formula derivation, where does the quadratic formula come from, discriminant, solving quadratic equations, vertex of a parabola, al-Khwarizmi

[Figure 1, animation: A square of side x and a 6 by x rectangle have total area 16. The rectangle is cut into two 3 by x strips and one is moved to the top, leaving a larger square with a 3 by 3 corner missing. Filling the corner gives (x+3)^2 = 25.]

Try to solve

$$
x^2 + 6x = 16.
$$

If the equation were $x^2 = 16$ you would take a square root and be done. If it were $6x = 16$ you would divide by 6. The trouble is that $x$ appears twice, once squared and once not, and no single operation undoes both at the same time. Taking the square root of both sides produces $\sqrt{x^2 + 6x}$, which does not simplify. Dividing by $x$ gives $x + 6 = 16/x$, which still has $x$ on both sides.

This lesson follows a method that is about twelve hundred years old. It rearranges the left side, by cutting and moving areas, until the equation says "something squared equals a number", which is the kind of equation a square root does solve. The method is called completing the square. Applied once to an equation with letters for coefficients, it produces the quadratic formula.

## What goes wrong with guessing

One natural first move is to factor the left side: $x^2 + 6x = x(x + 6)$, so we want two numbers that differ by 6 and multiply to 16. Trying small numbers, $2 \times 8 = 16$, so $x = 2$ works. Check: $2^2 + 6 \times 2 = 4 + 12 = 16$.

Guessing succeeded because the answer was a whole number. Change the right side to 10 and it fails. At $x = 1$ the left side is 7 and at $x = 2$ it is 16, so the solution of $x^2 + 6x = 10$ is somewhere between 1 and 2, and no amount of trying whole numbers will find it.

[Figure 2, image: The graph of x^2 + 6x for positive x. It reaches the value 16 exactly at x = 2, and it reaches the value 10 at a point between 1 and 2 that is not a whole number or a simple fraction.]

A second tempting move is worse. From $x(x + 6) = 16$ some students conclude that $x = 16$ or $x + 6 = 16$. That reasoning is valid only when the right side is 0, because a product is zero exactly when one factor is zero. Nothing similar holds for 16: at $x = 16$ the product is $16 \times 22 = 352$.

So we need a method that does not depend on the answer being convenient.

## An equation we can solve

It helps to look first at an equation of the same family that is easy.

**Pause and try.** Find every real number $x$ with $(x + 3)^2 = 25$. There is more than one.

**Answer.** The quantity $x + 3$ is a number whose square is 25, so $x + 3 = 5$ or $x + 3 = -5$. That gives $x = 2$ or $x = -8$. Check the second one: $(-8 + 3)^2 = (-5)^2 = 25$.

This equation also contains $x^2$ and a multiple of $x$, which you can see by expanding: $(x+3)^2 = x^2 + 6x + 9$. They are hidden inside one square, and because of that a square root reaches both at once.

Now compare with our problem. The left side of $x^2 + 6x = 16$ is exactly $(x + 3)^2$ with the 9 left off. So our expression is nine short of a perfect square, and the plan is to supply the nine. The next section shows where the 9 comes from, so that you could find the right number for any equation of this kind.

[Figure 3, image: The two solutions of (x+3)^2 = 25 on a number line. The equation says that x + 3 is 5 or -5, so x lies at distance 5 from -3 on one side or the other: x = 2 or x = -8.]

## The picture: a square with a corner missing

Read $x^2 + 6x$ as an area. The term $x^2$ is a square whose side is the unknown length $x$. The term $6x$ is a rectangle that is 6 wide and $x$ tall. The equation says that these two shapes together cover 16 square units. (The figures are drawn with the true value of $x$ so that they are to scale, but the argument never uses that value.)

If the two shapes could be rearranged into a single square, we could read off its side length with a square root. Step through the attempt.

[Figure 4, steps: Solving x^2 + 6x = 16 by rearranging areas. The 6 by x rectangle is cut into two 3 by x strips, which are placed on two sides of the x by x square. A 3 by 3 corner is missing. Adding it to both sides gives a square of area 25 and side x + 3 = 5.]

  - step: A square of side x and a 6 by x rectangle together have area 16.
  - step: Cut the rectangle into two equal strips, each 3 wide and x tall.
  - step: Turn one strip and set it on top of the square. The total area is still 16.
  - step: The shape is a square of side x + 3 with a 3 by 3 corner missing. Add those 9 units to both sides.
  - step: The completed square has area 25, so its side is 5. The side is also x + 3, so x = 2.
Three things happened, and each has an exact counterpart in algebra.

Cutting the rectangle in half is the reason the number 3 appears: it is half of the 6. The two strips then line two sides of the square, and the L-shaped figure they make with it has outer side $x + 3$.

The missing corner is bounded by the ends of the two strips, each of which is 3 wide, so it is a 3 by 3 square of area 9. This is where the 9 comes from. It is the square of half of 6.

Finally, filling the corner changes the area, and an equation only stays true if both sides are changed by the same amount. So 9 is added to the right side as well: $16 + 9 = 25$. Written out,

$$
x^2 + 6x + 9 = 16 + 9 \quad\text{which is}\quad (x + 3)^2 = 25.
$$

That is the equation from the previous section. Its solutions are $x = 2$ and $x = -8$.

The picture found only $x = 2$, because a length cannot be negative. The algebra does not care, and $x = -8$ is a perfectly good solution of the original equation: $(-8)^2 + 6 \times (-8) = 64 - 48 = 16$.

**History.** This picture is from the book that gave algebra its name, written by Muhammad ibn Musa al-Khwarizmi in Baghdad around the year 820. He solved the equation "a square and ten roots equal thirty-nine", which we would write $x^2 + 10x = 39$, in words and with a diagram of this kind. Negative numbers were not in use, so he reported only the positive solution.

## Completing the square for any coefficient

Nothing in the argument was special to the number 6. With $x^2 + bx$, the rectangle is $b$ wide, each strip is $\frac{b}{2}$ wide, and the missing corner is a square of side $\frac{b}{2}$.

**Pause and try.** The expression $x^2 + 10x$ is a square of side $x$ with a 10 by $x$ rectangle. How wide are the two strips, what is the area of the missing corner, and what is the side of the completed square? Use this to solve al-Khwarizmi's equation $x^2 + 10x = 39$.

**Answer.** Each strip is 5 wide, the corner is 5 by 5 with area 25, and the completed square has side $x + 5$. Adding 25 to both sides gives $(x + 5)^2 = 64$, so $x + 5 = 8$ or $x + 5 = -8$, and $x = 3$ or $x = -13$. Check: $9 + 30 = 39$ and $169 - 130 = 39$.

[Figure 5, animation: Completing the square for x^2 + bx as b varies from 4 to 6. Each strip has width b/2, so the corner needed to complete the square is always a square of side b/2 and area (b/2)^2.]

The rule that comes out of the picture is: take half the coefficient of $x$, and square it. That is the number that completes the square.

**Definition.** To **complete the square** in the expression $x^2 + bx$ is to rewrite it as a perfect square minus a constant:

$$
x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2.
$$

The picture justifies this when $x$ and $b$ are positive lengths. The statement is true for all real numbers, and the proof is one line of algebra.

**Theorem.** For all real numbers $x$ and $b$,

$$
x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2.
$$

**Proof.** The square of a sum is $(u + v)^2 = u^2 + 2uv + v^2$ for all real $u$ and $v$ (this is proved in [the lesson on the distributive law](@algebra/distributive-law-area)). Take $u = x$ and $v = \frac{b}{2}$:

$$
\left(x + \frac{b}{2}\right)^2 = x^2 + 2 \cdot x \cdot \frac{b}{2} + \left(\frac{b}{2}\right)^2 = x^2 + bx + \left(\frac{b}{2}\right)^2.
$$

Subtracting $\left(\frac{b}{2}\right)^2$ from both sides gives the statement.

Because the theorem holds for every real $b$, it covers cases the picture cannot draw. If $b = -6$, half of it is $-3$ and the square of that is 9, so $x^2 - 6x = (x - 3)^2 - 9$. The corner is still added, because a square is never negative.

## Solving a squared equation exactly

Completing the square always ends with an equation of the form $u^2 = k$. We should be precise about its solutions, since forgetting one of them is the most common error in this topic.

**Theorem.** Let $k$ be a real number. The equation $u^2 = k$ has

- two real solutions, $u = \sqrt{k}$ and $u = -\sqrt{k}$, if $k > 0$;
- one real solution, $u = 0$, if $k = 0$;
- no real solution if $k < 0$.

**Proof.** If $k < 0$: the square of a real number is never negative, so $u^2$ cannot equal $k$.

If $k = 0$: a product is zero only when a factor is zero, so $u \cdot u = 0$ forces $u = 0$.

If $k > 0$: the number $\sqrt{k}$ is, by definition, the positive number whose square is $k$. (That every positive real number has such a square root is a property of the real numbers which we use without proof.) Write the equation as $u^2 - (\sqrt{k})^2 = 0$. By the difference of two squares, $p^2 - q^2 = (p - q)(p + q)$, this is $(u - \sqrt{k})(u + \sqrt{k}) = 0$. A product is zero exactly when one of its factors is zero, so $u = \sqrt{k}$ or $u = -\sqrt{k}$, and these are different numbers because $\sqrt{k} \ne 0$.

The symbol $\pm$ is shorthand for the first case: $u = \pm\sqrt{k}$ means "$u = \sqrt{k}$ or $u = -\sqrt{k}$".

## Worked examples

**Worked example.** **Solve $x^2 + 8x = 20$.**

The coefficient of $x$ is 8. Half of it is 4 and the square of that is 16, so we add 16 to both sides:

$$
x^2 + 8x + 16 = 36, \quad\text{that is,}\quad (x + 4)^2 = 36.
$$

Since $36 > 0$ there are two solutions, $x + 4 = 6$ or $x + 4 = -6$. So $x = 2$ or $x = -10$.

Check: $2^2 + 8 \times 2 = 20$, and $(-10)^2 + 8 \times (-10) = 100 - 80 = 20$.

**Worked example.** **Solve $x^2 - 4x - 1 = 0$.**

First move the constant to the right so that the left side has the form $x^2 + bx$: $x^2 - 4x = 1$. Here $b = -4$, half of it is $-2$, and its square is 4. Adding 4 to both sides,

$$
(x - 2)^2 = 5.
$$

So $x - 2 = \sqrt{5}$ or $x - 2 = -\sqrt{5}$, and the solutions are $x = 2 + \sqrt{5}$ and $x = 2 - \sqrt{5}$, about $4.236$ and $-0.236$. Guessing would never have found these, since neither is a fraction.

Check the first exactly: $(2 + \sqrt5)^2 - 4(2 + \sqrt5) - 1 = (4 + 4\sqrt5 + 5) - 8 - 4\sqrt5 - 1 = 0$.

**Worked example.** **Solve $2x^2 - 3x - 2 = 0$.**

The picture starts from a square of side $x$, so the coefficient of $x^2$ has to be 1 before we can complete the square. Divide every term by 2 and move the constant across:

$$
x^2 - \frac{3}{2}x = 1.
$$

Half of $-\frac32$ is $-\frac34$, and its square is $\frac{9}{16}$. Adding this to both sides,

$$
\left(x - \frac34\right)^2 = 1 + \frac{9}{16} = \frac{25}{16}.
$$

The square root of $\frac{25}{16}$ is $\frac54$, so $x - \frac34 = \frac54$ or $x - \frac34 = -\frac54$, giving $x = 2$ or $x = -\frac12$.

Check: $2 \times 4 - 3 \times 2 - 2 = 0$, and $2 \times \frac14 + \frac32 - 2 = 0$.

## The quadratic formula

The third example involved more arithmetic than insight. The steps were the same as before, with fractions. That is a sign that the work can be done once, with letters, and the result reused.

A **quadratic equation** is an equation of the form $ax^2 + bx + c = 0$, where $a$, $b$ and $c$ are given real numbers and $a \ne 0$. (If $a$ were 0 there would be no $x^2$ term and the equation would not be quadratic.)

**Pause and try.** Before reading the derivation, carry out the first two steps yourself on $ax^2 + bx + c = 0$: divide by $a$ and move the constant to the right. What is the coefficient of $x$ now, and what number must be added to both sides to complete the square?

**Answer.** Dividing by $a$ and moving the constant gives $x^2 + \frac{b}{a}x = -\frac{c}{a}$. The coefficient of $x$ is $\frac{b}{a}$. Half of it is $\frac{b}{2a}$, and its square, $\frac{b^2}{4a^2}$, is the number to add.

**Theorem.** **The quadratic formula.** Let $a$, $b$, $c$ be real numbers with $a \ne 0$, and let $D = b^2 - 4ac$. The real solutions of $ax^2 + bx + c = 0$ are as follows.

- If $D > 0$, there are exactly two: $x = \dfrac{-b + \sqrt{D}}{2a}$ and $x = \dfrac{-b - \sqrt{D}}{2a}$.
- If $D = 0$, there is exactly one: $x = -\dfrac{b}{2a}$.
- If $D < 0$, there are none.

**Proof.** Each step below turns the equation into one with exactly the same solutions, because each step can be undone.

Since $a \ne 0$ we may divide by $a$:

$$
x^2 + \frac{b}{a}x + \frac{c}{a} = 0.
$$

Complete the square in $x^2 + \frac{b}{a}x$, using the theorem above with $\frac{b}{a}$ in place of $b$:

$$
\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} + \frac{c}{a} = 0.
$$

Move the constants to the right and put them over the common denominator $4a^2$:

$$
\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{4ac}{4a^2} = \frac{D}{4a^2}.
$$

This has the form $u^2 = k$ with $u = x + \frac{b}{2a}$ and $k = \frac{D}{4a^2}$. The denominator $4a^2$ is positive, so $k$ has the same sign as $D$, and the theorem on $u^2 = k$ gives the three cases.

If $D < 0$ there is no solution. If $D = 0$ then $u = 0$, so $x = -\frac{b}{2a}$. If $D > 0$ then $u$ is one of the two numbers $\pm\sqrt{D/(4a^2)}$. Now $\sqrt{4a^2}$ is $2a$ when $a > 0$ and $-2a$ when $a < 0$, so in either case the two values of $u$ are $\frac{\sqrt{D}}{2a}$ and $-\frac{\sqrt{D}}{2a}$. Subtracting $\frac{b}{2a}$ gives

$$
x = \frac{-b + \sqrt{D}}{2a} \quad\text{or}\quad x = \frac{-b - \sqrt{D}}{2a}.
$$

The formula is usually written in one line, $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. Every part of it is something from the picture. The $-\frac{b}{2a}$ is the half-width of the strips, moved to the other side. The quantity under the root is the area of the completed square, up to the positive factor $4a^2$.

Test it on the running example. For $x^2 + 6x - 16 = 0$ we have $a = 1$, $b = 6$, $c = -16$, so $D = 36 + 64 = 100$ and $x = \frac{-6 \pm 10}{2}$, which is $2$ or $-8$, as before.

**Key idea.** Completing the square turns $ax^2 + bx + c = 0$ into $\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$. The quadratic formula is what you get by taking the square root of that equation, and the number of solutions depends on whether the right side is positive, zero or negative.

## The discriminant: is the completed square positive?

The number $D = b^2 - 4ac$ is called the **discriminant**, because it discriminates between the three cases. The proof shows what it measures. After completing the square, the equation says that a square equals $\frac{D}{4a^2}$. A square can equal a positive number in two ways, zero in one way, and a negative number in no way.

**Pause and try.** Without solving, decide how many real solutions $x^2 + 6x + 10 = 0$ has. Then complete the square to see why.

**Answer.** Here $D = 36 - 40 = -4$, which is negative, so there are no real solutions. Completing the square gives $(x + 3)^2 + 1 = 0$, that is, $(x + 3)^2 = -1$, and no real number has a negative square.

The graph makes the three cases visible. The graph of $y = x^2 + 6x + c$ is a curve called a parabola, and the solutions of $x^2 + 6x + c = 0$ are the places where it meets the $x$ axis. Completing the square rewrites the function as $y = (x + 3)^2 + (c - 9)$. The squared part is smallest, namely zero, at $x = -3$, so the lowest point of the curve is at $x = -3$ and its height there is $c - 9$. Changing $c$ slides the whole curve up or down, since [adding a constant to a function shifts its graph vertically](@precalculus/functions-and-transformations).

[Figure 6, animation: The parabola y = x^2 + 6x + c as c rises from 5 to 13. Its lowest point is at x = -3 with height c - 9. While the lowest point is below the axis there are two solutions, at c = 9 they merge into one, and above that there are none. The discriminant 36 - 4c changes sign at the same moment.]

For the running example, $c = -16$ and the curve is $y = (x + 3)^2 - 25$. Its lowest point is at $(-3, -25)$, and it crosses the axis where $(x + 3)^2 = 25$, which is 5 units to either side of $-3$.

[Figure 7, image: The parabola y = x^2 + 6x - 16 = (x+3)^2 - 25. Its lowest point is at (-3, -25), and its two crossings of the x axis, at -8 and 2, lie 5 units on either side of the line x = -3.]

The same holds in general. Completing the square in $ax^2 + bx + c$ (factor out $a$, then proceed as in the proof) gives

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a}.
$$

The squared term vanishes at $x = -\frac{b}{2a}$, so that is where the parabola has its turning point, called the **vertex**, and the two solutions $-\frac{b}{2a} \pm \frac{\sqrt{D}}{2a}$ sit at equal distances on either side of it. The quadratic formula says "start at the vertex and go the same distance left and right".

## Edge cases

The hypothesis $a \ne 0$ is needed, and you can see where: the first step divides by $a$, and the formula has $2a$ in the denominator. When $a = 0$ the equation is $bx + c = 0$, which is solved by one division and has a single solution when $b \ne 0$.

When $b = 0$ there is nothing to complete. The equation $ax^2 + c = 0$ is already of the form $x^2 = -\frac{c}{a}$, and the formula reduces to $x = \pm\frac{\sqrt{-4ac}}{2a}$, which is the same thing.

When $D < 0$ the formula asks for the square root of a negative number, and the theorem says correctly that no real solution exists. It does not say the equation is meaningless. Later in mathematics the number system is extended so that such square roots exist, and then the same formula gives two solutions that are not real numbers.

## Common mistakes

**Common mistake.** **Adding the corner to one side only.** A student writes: $x^2 + 6x = 7$, so $x^2 + 6x + 9 = 7$, so $(x + 3)^2 = 7$.

The second line is a different equation from the first, because its left side grew by 9 and its right side did not. In the picture, filling the corner adds 9 to the area. The correct step is $x^2 + 6x + 9 = 7 + 9 = 16$, giving $(x + 3)^2 = 16$ and $x = 1$ or $x = -7$. Checking $x = 1$ in the original equation, $1 + 6 = 7$, confirms it. The student's answer, $x = -3 + \sqrt7 \approx -0.35$, satisfies $(x + 3)^2 = 7$, so for it $x^2 + 6x = 7 - 9 = -2$, which is not 7.

**Common mistake.** **Keeping only the positive square root.** A student writes: $(x + 3)^2 = 25$, so $x + 3 = 5$, so $x = 2$.

This loses the solution $x = -8$. It is tempting because $\sqrt{25}$ means 5 and only 5. But the equation does not say that $x + 3$ *is* the square root of 25. It says that the square of $x + 3$ is 25, and two numbers have that property, $5$ and $-5$. Whenever you undo a square in an equation, write both cases.

## Stepping back

The obstacle was an unknown that appeared in two different forms, $x^2$ and $x$. The idea that removed it was to change the shape of the expression without changing its value until the unknown appeared only once, inside a square. Cutting the rectangle in half and wrapping the halves around the square did this, at the cost of a missing corner whose size we could compute.

That idea is worth more than the formula it produces. Completing the square finds the lowest or highest point of any quadratic, which is how one shows, for example, that among rectangles with a given perimeter the square has the largest area (a problem in [the distributive law lesson](@algebra/distributive-law-area) does this with a difference of squares). It turns the equation of a circle into a form where the center and radius can be read off. And it reappears in calculus and in statistics whenever a quadratic expression has to be simplified. The question of where an expression is zero continues, for higher powers of $x$, in [roots, factors and the shape of a polynomial](@precalculus/polynomials-and-roots).

**Check yourself.** What must be added to $x^2 - 14x$ to make it a perfect square, and what square does it become?
Answer: Add 49, giving $(x - 7)^2$ Half of $-14$ is $-7$ and $(-7)^2 = 49$. Check: $(x - 7)^2 = x^2 - 14x + 49$.

**Recap.** - An equation $u^2 = k$ has two real solutions $\pm\sqrt{k}$ if $k > 0$, one if $k = 0$, and none if $k < 0$.
- $x^2 + bx$ is a square of side $x$ with two strips of width $\frac{b}{2}$. It is $\left(\frac{b}{2}\right)^2$ short of the perfect square $\left(x + \frac{b}{2}\right)^2$.
- To solve a quadratic: make the coefficient of $x^2$ equal to 1, add the square of half the coefficient of $x$ to both sides, and take both square roots.
- Doing this with letters gives $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, valid when $a \ne 0$.
- The discriminant $D = b^2 - 4ac$ has the sign of the completed square: two real solutions if $D > 0$, one if $D = 0$, none if $D < 0$.
- The parabola $y = ax^2 + bx + c$ has its vertex at $x = -\frac{b}{2a}$, and the solutions are placed symmetrically about it.

## Problems

**Problem 1.** Complete the square in each expression: (a) $x^2 + 8x$, (b) $x^2 - 12x$, (c) $x^2 + 5x$.

**Solution.** In each case, halve the coefficient of $x$ and square it.

(a) Half of 8 is 4, and $4^2 = 16$: $x^2 + 8x = (x + 4)^2 - 16$.

(b) Half of $-12$ is $-6$, and $(-6)^2 = 36$: $x^2 - 12x = (x - 6)^2 - 36$.

(c) Half of 5 is $\frac52$, and $\left(\frac52\right)^2 = \frac{25}{4}$: $x^2 + 5x = \left(x + \frac52\right)^2 - \frac{25}{4}$.

Each can be checked by expanding the square. For (c): $\left(x + \frac52\right)^2 = x^2 + 5x + \frac{25}{4}$.

**Problem 2.** Solve $x^2 + 12x = 13$ by completing the square. Draw (or describe) the picture: what are the dimensions of the strips, the corner and the completed square?

**Solution.** Half of 12 is 6, so the rectangle is cut into two strips each 6 wide and $x$ tall, and the missing corner is 6 by 6 with area 36. Adding 36 to both sides,

$$
(x + 6)^2 = 13 + 36 = 49.
$$

The completed square has area 49 and side 7. So $x + 6 = 7$ or $x + 6 = -7$, giving $x = 1$ or $x = -13$.

Check: $1 + 12 = 13$ and $169 - 156 = 13$. Only $x = 1$ appears in the picture, since a side length is positive.

**Problem 3.** Solve $x^2 - 6x + 2 = 0$ by completing the square. Give exact answers and decimal approximations to three places.

**Solution.** Move the constant: $x^2 - 6x = -2$. Half of $-6$ is $-3$ and its square is 9. Adding 9 to both sides gives $(x - 3)^2 = 7$.

Since $7 > 0$, $x - 3 = \sqrt7$ or $x - 3 = -\sqrt7$, so $x = 3 + \sqrt7 \approx 5.646$ or $x = 3 - \sqrt7 \approx 0.354$.

Check the exact value: $(3 + \sqrt7)^2 - 6(3 + \sqrt7) + 2 = (9 + 6\sqrt7 + 7) - 18 - 6\sqrt7 + 2 = 0$.

**Problem 4.** Use the quadratic formula to solve $3x^2 - 5x - 2 = 0$, and check both solutions.

**Solution.** Here $a = 3$, $b = -5$, $c = -2$. The discriminant is $D = (-5)^2 - 4 \times 3 \times (-2) = 25 + 24 = 49$, which is positive, so there are two solutions:

$$
x = \frac{5 \pm 7}{6}, \quad\text{that is,}\quad x = 2 \ \text{ or } \ x = -\frac13.
$$

Check $x = 2$: $12 - 10 - 2 = 0$. Check $x = -\frac13$: $3 \times \frac19 + \frac53 - 2 = \frac13 + \frac53 - 2 = 0$.

**Problem 5.** Without solving, find the number of real solutions of each equation: (a) $x^2 + 4x + 5 = 0$, (b) $4x^2 - 12x + 9 = 0$, (c) $x^2 - x - 1 = 0$.

**Solution.** Compute the discriminant $D = b^2 - 4ac$ in each case.

(a) $D = 16 - 20 = -4 < 0$: no real solutions. Indeed $x^2 + 4x + 5 = (x + 2)^2 + 1$, which is at least 1.

(b) $D = 144 - 144 = 0$: exactly one solution, $x = \frac{12}{8} = \frac32$. Indeed $4x^2 - 12x + 9 = (2x - 3)^2$.

(c) $D = 1 + 4 = 5 > 0$: two real solutions, $x = \frac{1 \pm \sqrt5}{2}$.

**Problem 6.** Find the smallest value taken by $f(x) = x^2 - 10x + 31$ as $x$ ranges over all real numbers, and the value of $x$ at which it occurs. Explain why no smaller value is possible.

**Solution.** Complete the square: $x^2 - 10x = (x - 5)^2 - 25$, so

$$
f(x) = (x - 5)^2 - 25 + 31 = (x - 5)^2 + 6.
$$

A square of a real number is at least 0, and it equals 0 only when the number is 0. So $(x - 5)^2 \ge 0$ for every $x$, with equality only at $x = 5$. Therefore $f(x) \ge 6$ for every $x$, and $f(5) = 6$. The smallest value is 6, at $x = 5$.

This agrees with the vertex formula: $-\frac{b}{2a} = \frac{10}{2} = 5$.

**Problem 7.** (a) For which values of $c$ does $x^2 + 6x + c = 0$ have exactly one real solution? No real solution? (b) For which values of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?

**Solution.** (a) The discriminant is $36 - 4c$. It is zero when $c = 9$, giving exactly one solution ($x = -3$, since $x^2 + 6x + 9 = (x + 3)^2$). It is negative when $c > 9$, giving no real solution. In the picture, $c = 9$ is the case where the constant term is exactly the corner.

(b) The discriminant is $k^2 - 36$, which is zero when $k^2 = 36$, that is, $k = 6$ or $k = -6$. The two equations are $(x + 3)^2 = 0$ and $(x - 3)^2 = 0$.

**Problem 8.** A rectangle has perimeter 20. (a) Find its side lengths if its area is 20. (b) Show that its area cannot be 30.

**Solution.** The two side lengths add to 10. Call one of them $x$, so the other is $10 - x$ and the area is $x(10 - x)$.

(a) We need $x(10 - x) = 20$, that is, $x^2 - 10x + 20 = 0$. Completing the square: $x^2 - 10x = -20$, so $(x - 5)^2 = 5$ and $x = 5 \pm \sqrt5$. The sides are $5 + \sqrt5 \approx 7.236$ and $5 - \sqrt5 \approx 2.764$. Each choice of sign gives one side, and the other sign gives the other side. Check: their sum is 10 and their product is $(5 + \sqrt5)(5 - \sqrt5) = 25 - 5 = 20$.

(b) Area 30 would need $x^2 - 10x + 30 = 0$, whose discriminant is $100 - 120 = -20 < 0$. There is no real solution, so no such rectangle exists. Completing the square shows why: the area is $x(10 - x) = 25 - (x - 5)^2$, which is at most 25.

**Problem 9.** Suppose $ax^2 + bx + c = 0$ with $a \ne 0$ has discriminant $D > 0$, and call its two solutions $r$ and $s$. Use the quadratic formula to prove that $r + s = -\dfrac{b}{a}$ and $rs = \dfrac{c}{a}$. Verify both with the equation $x^2 + 6x - 16 = 0$.

**Solution.** Write $r = \frac{-b + \sqrt D}{2a}$ and $s = \frac{-b - \sqrt D}{2a}$.

*Sum.* The square roots cancel: $r + s = \frac{-b + \sqrt D - b - \sqrt D}{2a} = \frac{-2b}{2a} = -\frac{b}{a}$.

*Product.* The numerators are a sum and a difference of the same two numbers, so the difference of two squares applies:

$$
rs = \frac{(-b + \sqrt D)(-b - \sqrt D)}{4a^2} = \frac{(-b)^2 - (\sqrt D)^2}{4a^2} = \frac{b^2 - D}{4a^2}.
$$

Since $D = b^2 - 4ac$, the numerator is $b^2 - b^2 + 4ac = 4ac$, and $rs = \frac{4ac}{4a^2} = \frac{c}{a}$.

For $x^2 + 6x - 16 = 0$ the solutions are $2$ and $-8$. Their sum is $-6 = -\frac{b}{a}$ and their product is $-16 = \frac{c}{a}$.
