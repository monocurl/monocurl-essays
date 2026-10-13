# Roots, factors and the shape of a polynomial

> A cubic crosses the x axis once or three times, never exactly twice. The factor theorem, multiplicity and the leading term explain why, with proofs.

Series: Precalculus (https://www.monocurl.com/monocurl-essays/precalculus/)
Canonical: https://www.monocurl.com/monocurl-essays/precalculus/polynomials-and-roots/
Keywords: factor theorem, remainder theorem, roots of a polynomial, multiplicity of a root, end behavior of polynomials, how many roots does a polynomial have, polynomial division, fundamental theorem of algebra

[Figure 1, animation: The graph of y = x^3 - 3x + c as c falls from 4 to 0, which lowers the whole curve. It crosses the x axis once, then touches it at a second point when c = 2, and after that crosses three times. At no stage are there exactly two crossings.]

Draw the graph of a cubic, any cubic, and count how many times it crosses the $x$ axis. You will get one or three. Slide the graph up and down, as in the animation, and the count changes from one to three by passing through a moment when the curve touches the axis without crossing it. A count of exactly two clean crossings never appears. Parabolas have their own rule: zero or two.

Nothing about the look of the formula $x^3 - 3x + c$ announces this. The explanation has three parts, and each is a theorem about polynomials in general: a root of a polynomial is the same thing as a factor of it; the far ends of the graph are decided by one term; and whether the graph crosses or touches at a root is decided by how many times the factor occurs. We will prove all three.

## A polynomial and its roots

**Definition.** A **polynomial** is a function of the form

$$
p(x) = c_n x^n + c_{n-1}x^{n-1} + \cdots + c_1 x + c_0,
$$

where $n \ge 0$ is a whole number and the **coefficients** $c_0, \ldots, c_n$ are numbers. If $c_n \ne 0$, then $n$ is the **degree** of $p$, the term $c_n x^n$ is its **leading term** and $c_n$ its **leading coefficient**. A **root** of $p$ is a number $a$ with $p(a) = 0$.

On the graph, the real roots are the places where the curve meets the $x$ axis. Our running example is the cubic

$$
p(x) = x^3 - 2x^2 - 5x + 6.
$$

[Figure 2, image: The graph of p(x) = x^3 - 2x^2 - 5x + 6, with its value marked at each whole number from -2 to 3. The value is 0 at x = -2, x = 1 and x = 3 (green), and those are the three roots.]

Finding the roots $-2$, 1 and 3 took nothing more than trying whole numbers. The interesting question is what a root tells us about the formula. The same thing happens with whole numbers: 7 goes into 91 exactly, and knowing that lets us write $91 = 7 \times 13$. To see whether a root does something similar we divide $p(x)$ by an expression of the form $x - a$, and it is instructive to begin with an $a$ that is *not* a root, $a = 2$.

Dividing polynomials works like long division of numbers: at each stage, match the leading term of what is left.

[Figure 3, steps: Dividing p(x) = x^3 - 2x^2 - 5x + 6 by x - 2. At each stage a multiple of x - 2 is split off that accounts for the leading term of what remains.]

  - step: Match the leading term first. To get x cubed from x - 2 we need to multiply by x squared, and x squared times (x - 2) is x cubed minus 2 x squared. That accounts for the first two terms.
  - step: What is left is -5x + 6. Match its leading term: -5 times (x - 2) is -5x + 10, which is 4 too many, so the last piece is -4.
  - step: Collect the two multiples of x - 2. The quotient is x squared minus 5, and the remainder is -4.
  - step: Now put x = 2 into the last line. The first part becomes zero, so p(2) equals the remainder.
The result is $p(x) = (x - 2)(x^2 - 5) - 4$: a **quotient** $x^2 - 5$ and a **remainder** $-4$, which is a constant. And the remainder $-4$ is the number we met in the graph as $p(2)$.

**Pause and try.** Divide $p(x) = x^3 - 2x^2 - 5x + 6$ by $x - 1$ in the same way. What are the quotient and the remainder? Then predict, without dividing, the remainder when $p(x)$ is divided by $x + 1$.

**Answer.** First $x^2(x - 1) = x^3 - x^2$, leaving $-x^2 - 5x + 6$. Then $-x(x - 1) = -x^2 + x$, leaving $-6x + 6$. Then $-6(x - 1) = -6x + 6$, leaving 0. So $p(x) = (x - 1)(x^2 - x - 6)$, with remainder 0. For the prediction, note that $x + 1 = x - (-1)$. If the pattern holds, the remainder is $p(-1) = 8$, and it is: $p(x) = (x + 1)(x^2 - 3x - 2) + 8$.

Here $a$ slides along the axis while the division is redone at every position.

[Figure 4, animation: Dividing p(x) by x - a as a moves from -2.4 to 3, pausing at the three roots. The remainder always equals the height p(a) of the graph above a, so it is 0 exactly when a is a root.]

## Why the remainder is p(a): the factor theorem

The last step of the division figure already contains the reason. If $p(x) = (x - a)\,q(x) + r$ with $r$ a constant, then putting $x = a$ makes the first part vanish and leaves $p(a) = r$. What still needs proof is that such a quotient $q$ and constant $r$ always exist. Long division produces them in every example, but "it always works" is a claim about all polynomials, and there is a short argument that covers them all at once. It rests on one identity.

For every whole number $k \ge 1$,

$$
x^k - a^k = (x - a)\left(x^{k-1} + a\,x^{k-2} + a^2x^{k-3} + \cdots + a^{k-1}\right).
$$

To check it, multiply the long bracket by $x$ and by $a$ separately. Multiplying by $x$ gives $x^k + a\,x^{k-1} + \cdots + a^{k-1}x$. Multiplying by $a$ gives $a\,x^{k-1} + \cdots + a^{k-1}x + a^k$. Subtracting, every term cancels except $x^k$ and $a^k$. (This is the finite sum formula of the lesson on [geometric series](@precalculus/geometric-series) in other clothes. For $k = 2$ it is $x^2 - a^2 = (x - a)(x + a)$.)

**Theorem.** **(Division by $x - a$.)** Let $p$ be a polynomial of degree $n \ge 1$ and let $a$ be a number. Then there is a polynomial $q$ of degree $n - 1$, with the same leading coefficient as $p$, such that for every $x$

$$
p(x) = (x - a)\,q(x) + p(a).
$$

In particular:

- **(Remainder theorem.)** The remainder when $p(x)$ is divided by $x - a$ is $p(a)$.
- **(Factor theorem.)** $p(a) = 0$ if and only if $x - a$ is a **factor** of $p$, meaning that $p(x) = (x - a)\,q(x)$ for some polynomial $q$.

**Proof.** Write $p(x) = c_n x^n + \cdots + c_1 x + c_0$. Then $p(a) = c_n a^n + \cdots + c_1 a + c_0$, and subtracting term by term,

$$
p(x) - p(a) = c_n(x^n - a^n) + c_{n-1}(x^{n-1} - a^{n-1}) + \cdots + c_1(x - a).
$$

The constant terms have cancelled. By the identity, each bracket $x^k - a^k$ equals $x - a$ times a polynomial of degree $k - 1$ whose leading term is $x^{k-1}$. Taking out the common factor $x - a$,

$$
p(x) - p(a) = (x - a)\,q(x),
$$

where $q$ is a sum of polynomials of degrees $n - 1, n - 2, \ldots, 0$ multiplied by $c_n, c_{n-1}, \ldots, c_1$. Only the first of these contains $x^{n-1}$, with coefficient $c_n \ne 0$, so $q$ has degree $n - 1$ and leading coefficient $c_n$. This proves the displayed equation, and part 1 is that equation read aloud.

For part 2: if $p(a) = 0$ the equation becomes $p(x) = (x - a)q(x)$, so $x - a$ is a factor. Conversely, if $p(x) = (x - a)q(x)$ for some polynomial $q$, then $p(a) = (a - a)\,q(a) = 0$.

Check the proof against the example with $a = 2$: $p(x) - p(2) = (x^3 - 8) - 2(x^2 - 4) - 5(x - 2) = (x - 2)\left[(x^2 + 2x + 4) - 2(x + 2) - 5\right] = (x - 2)(x^2 - 5)$, the quotient that long division found. The proof used only addition and multiplication, so it holds equally when the coefficients and $a$ are [complex numbers](@precalculus/complex-numbers).

## How many roots can there be?

Apply the factor theorem to our cubic. Since $p(1) = 0$, we get $p(x) = (x - 1)(x^2 - x - 6)$, as you found by dividing. The quotient has roots of its own: $x^2 - x - 6$ vanishes at $x = -2$, so it equals $(x + 2)(x - 3)$. Altogether

$$
p(x) = (x - 1)(x + 2)(x - 3).
$$

Each root has been turned into a factor, and each factor has used up one unit of degree.

[Figure 5, steps: Each root of the cubic p is divided out in turn. The quotient loses one degree and one root each time, and after three divisions nothing is left but the constant 1, which has no roots.]

  - step: The cubic p has degree 3 and three roots.
  - step: Divide out the factor x - 1. The quotient is a parabola. It no longer vanishes at 1, and it still has the other two roots, -2 and 3.
  - step: Divide the parabola by x + 2. The quotient is the line x - 3, with the single root 3.
  - step: Divide the line by x - 3. The quotient is the constant 1. A nonzero constant has no roots, so there cannot be a fourth root.
**Theorem.** A polynomial of degree $n$ has at most $n$ different roots.

**Proof.** By induction on $n$. A polynomial of degree 0 is a nonzero constant and has no roots. Now let $n \ge 1$ and suppose the statement is true for degree $n - 1$. Let $p$ have degree $n$. If $p$ has no roots there is nothing to prove. Otherwise let $a$ be a root; by the factor theorem $p(x) = (x - a)\,q(x)$ with $q$ of degree $n - 1$. If $b$ is a root of $p$ different from $a$, then $0 = p(b) = (b - a)\,q(b)$. A product of two numbers is zero only if one of them is, and $b - a \ne 0$, so $q(b) = 0$. Thus every root of $p$ other than $a$ is a root of $q$, and $q$ has at most $n - 1$ roots. So $p$ has at most $n$.

The hypothesis hidden in the word "degree" matters. The zero polynomial, all of whose coefficients are 0, has no degree, and every number is a root of it.

So a cubic has at most three roots and a quadratic at most two. It is tempting to go further and say a polynomial of degree $n$ has *exactly* $n$ roots. That is false for real roots: $x^2 + 1$ has none, and the cubic $x^3 - 3x + 4$ at the start of the hero animation has one. The missing roots exist, but they are complex numbers. This is the **fundamental theorem of algebra**: every polynomial of degree at least 1, with real or complex coefficients, has at least one complex root. It was proved in the early nineteenth century (Gauss and Argand gave the first proofs that were widely accepted), every known proof uses some fact about continuity or the real numbers that goes beyond algebra, and we cite it without proof. Combined with the factor theorem, used once per root as in the figure above, it implies that a polynomial of degree $n$ factors completely as $c\,(x - z_1)(x - z_2)\cdots(x - z_n)$ with complex $z_1, \ldots, z_n$, some of which may be equal.

[Figure 6, animation: The three complex roots of x^3 - 3x + c as c rises from 0 to 12. At first all three lie on the real axis (green). At c = 2 two of them collide at x = 1, and for larger c they leave the real axis as a pair of mirror images (purple). There are always three.]

## Crossing or touching: multiplicity

At $c = 2$ the hero cubic is $x^3 - 3x + 2$, which factors as $(x - 1)^2(x + 2)$. The factor $x - 1$ occurs twice, and $x = 1$ is where the graph touches the axis and turns back.

**Definition.** A root $a$ of a polynomial $p$ has **multiplicity** $m$ if $p(x) = (x - a)^m\,q(x)$ for some polynomial $q$ with $q(a) \ne 0$. A root of multiplicity 1 is called **simple** and one of multiplicity 2 is called **double**.

Every root of a polynomial of degree $n$ has a multiplicity between 1 and $n$. Divide by $x - a$ for as long as the quotient still vanishes at $a$; each division lowers the degree by one, so this stops after at most $n$ divisions, at a quotient $q$ with $q(a) \ne 0$.

**Pause and try.** Let $h(x) = \frac14(x + 2)(x - 1)^2(x - 3)$. Work out the sign of each of the factors $x + 2$, $(x - 1)^2$ and $x - 3$ just to the left and just to the right of each root, and from them the sign of $h$. At which roots does the graph cross the axis?

**Answer.** Near $x = -2$: $(x - 1)^2 > 0$ and $x - 3 < 0$ on both sides, while $x + 2$ changes from negative to positive. So $h$ changes from positive to negative: a crossing. Near $x = 1$: $x + 2 > 0$ and $x - 3 < 0$ on both sides, and $(x - 1)^2$ is positive on both sides. So $h$ is negative on both sides and zero at 1: the graph touches the axis from below. Near $x = 3$: only $x - 3$ changes sign, so $h$ changes from negative to positive: a crossing.

[Figure 7, image: The graph of h(x) = \frac14(x + 2)(x - 1)^2(x - 3), shaded where it is positive (blue) and negative (orange). Near each root it follows the dashed curve obtained by freezing the other factors at their values there: a line at the simple roots -2 and 3, and a parabola at the double root 1.]

The answer to the exercise is the general rule, and the reasoning is the general proof.

**Theorem.** Let $a$ be a real root of multiplicity $m$ of a polynomial $p$ with real coefficients. If $m$ is odd, $p(x)$ has opposite signs on the two sides of $a$, for $x$ near $a$. If $m$ is even, it has the same sign on both sides.

**Proof.** Write $p(x) = (x - a)^m q(x)$ with $q(a) \ne 0$. A polynomial is a continuous function, so there is an interval around $a$ on which $q(x)$ stays within $\frac12|q(a)|$ of $q(a)$, and therefore keeps the sign of $q(a)$. On that interval the sign of $p(x)$ is the sign of $q(a)$ times the sign of $(x - a)^m$. For $x > a$ the power is positive. For $x < a$ it is positive if $m$ is even and negative if $m$ is odd.

The proof cites one fact, the continuity of polynomials, which follows from the limit laws in [the lesson on limits](@calculus/limits). It also explains the shape at the root: near $a$ the polynomial behaves like the constant $q(a)$ times $(x - a)^m$, which are the dashed curves in the figure. At $x = 1$ the frozen factors of $h$ are $\frac14(1 + 2)(1 - 3) = -1.5$, so $h(x) \approx -1.5(x - 1)^2$ there, a downward parabola.

## The far ends: the leading term decides

The last ingredient is the behavior of $p(x)$ when $x$ is far from 0. For our cubic, $p(10) = 1000 - 200 - 50 + 6 = 756$: the leading term $x^3 = 1000$ supplies most of the value, and the other three terms together change it by about a quarter. At $x = 200$ the leading term is $8\,000\,000$ and the others change it by about 1%.

[Figure 8, steps: The cubic p (blue) and its leading term x^3 (orange, dashed) in wider and wider windows. The grid is relabeled at each step. The wider the window, the less the lower terms matter, and the two graphs merge.]

  - step: In the window from -4 to 4 the two graphs are plainly different. The cubic p has its three roots and its two bends, and at x = 4 it is at 18 where the leading term is at 64.
  - step: From -10 to 10 the bends have shrunk to a kink near the middle. At the right edge p is 756 and the leading term is 1000.
  - step: From -40 to 40. At the right edge the two differ by about 5 percent.
  - step: From -200 to 200 the graphs cannot be told apart. The ratio of p to its leading term at the edge is 0.990.
**Theorem.** Let $p(x) = c_n x^n + \cdots + c_0$ have real coefficients and degree $n \ge 1$, and let $M = \dfrac{|c_{n-1}| + \cdots + |c_0|}{|c_n|}$. Then for every real $x$ with $|x| \ge 1$,

$$
\left|\frac{p(x)}{c_n x^n} - 1\right| \le \frac{M}{|x|}.
$$

In particular, when $|x| > M$ and $|x| \ge 1$, the value $p(x)$ is not zero and has the same sign as its leading term $c_n x^n$.

**Proof.** The difference $p(x) - c_n x^n$ is the sum of the lower terms $c_k x^k$ with $k \le n - 1$. For $|x| \ge 1$ each satisfies $|c_k x^k| \le |c_k|\,|x|^{n-1}$, so the size of their sum is at most $\left(|c_{n-1}| + \cdots + |c_0|\right)|x|^{n-1}$. Dividing by $|c_n x^n|$ gives the inequality. If also $|x| > M$, the right side is less than 1, so $\frac{p(x)}{c_n x^n}$ lies strictly between 0 and 2. It is positive, which says that $p(x)$ and $c_n x^n$ have the same sign.

For our cubic $M = 2 + 5 + 6 = 13$, so beyond $|x| = 13$ the sign of $p(x)$ is the sign of $x^3$, and at $x = 200$ the ratio is within $\frac{13}{200}$ of 1 (in fact it is $0.990$). The theorem gives the **end behavior** of every polynomial. If the degree is odd, $c_n x^n$ has opposite signs for large positive and large negative $x$, so the two ends of the graph go in opposite directions. If the degree is even, both ends go the same way: up if $c_n > 0$ and down if $c_n < 0$.

## Why a cubic cannot cross exactly twice

Put the three results together for a cubic with real coefficients and positive leading coefficient. Far to the left it is negative, and far to the right it is positive. Travel along the $x$ axis from left to right and watch the sign of $p(x)$. The sign can change only at a root (a continuous function that changes sign on an interval has a zero in it; this is the **intermediate value theorem**, which we cite). It does change at a root of odd multiplicity and does not at a root of even multiplicity. Starting negative and ending positive takes an odd number of sign changes, so the graph crosses the axis an odd number of times, and at least once. And the crossings are among the roots, of which there are at most three, so there are one or three.

Exactly two points on the axis are possible, but only as in the hero figure at $c = 2$: a simple root and a double root, one crossing and one touch.

**Key idea.** A root $a$ of a polynomial is the same thing as a factor $x - a$, so a polynomial of degree $n$ has at most $n$ roots. The graph crosses the axis at roots of odd multiplicity and touches it at roots of even multiplicity, and its two ends are fixed by the leading term. The ends of a cubic have opposite signs, so it crosses an odd number of times: once or three times.

**Pause and try.** A polynomial of degree 4 with real coefficients and positive leading coefficient has no repeated roots. How many times can its graph cross the $x$ axis? Give an example of each case.

**Answer.** Both ends go up, so the sign starts positive and ends positive, and the number of sign changes is even. With at most 4 roots, all simple, the graph crosses 0, 2 or 4 times. Examples: $x^4 + 1$ (never zero), $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$ (crosses at $\pm 1$), and $(x - 1)(x + 1)(x - 2)(x + 2)$ (four crossings).

## Worked examples

**Worked example.** **Factor $f(x) = x^3 - 4x^2 + x + 6$ completely.**

We need one root to get started. If a whole number $a$ is a root, then $a^3 - 4a^2 + a = -6$, and the left side is a multiple of $a$, so $a$ must divide 6. That leaves $\pm1, \pm2, \pm3, \pm6$ to try. $f(1) = 1 - 4 + 1 + 6 = 4$, no. $f(-1) = -1 - 4 - 1 + 6 = 0$, yes. By the factor theorem $x + 1$ is a factor. Dividing: $x^2(x + 1) = x^3 + x^2$ leaves $-5x^2 + x + 6$; then $-5x(x + 1)$ leaves $6x + 6 = 6(x + 1)$. So

$$
f(x) = (x + 1)(x^2 - 5x + 6) = (x + 1)(x - 2)(x - 3).
$$

*Check.* $f(2) = 8 - 16 + 2 + 6 = 0$ and $f(3) = 27 - 36 + 3 + 6 = 0$.

**Worked example.** **Find a cubic whose graph crosses the $x$ axis at $-1$, touches it at 2, and meets the $y$ axis at 8.**

A crossing at $-1$ calls for a factor $x + 1$ of odd multiplicity and a touch at 2 for a factor $x - 2$ of even multiplicity. The degree is 3, so the multiplicities must be 1 and 2: $g(x) = c\,(x + 1)(x - 2)^2$ for some constant $c$. The $y$ intercept is $g(0) = c \cdot 1 \cdot 4 = 4c$, and $4c = 8$ gives $c = 2$. Expanding, $g(x) = 2(x + 1)(x^2 - 4x + 4) = 2x^3 - 6x^2 + 8$.

*Check.* $g(-1) = -2 - 6 + 8 = 0$, $g(2) = 16 - 24 + 8 = 0$ and $g(0) = 8$.

**Worked example.** **Find the remainder when $x^{100} - 3x + 5$ is divided by $x - 1$, and by $x + 1$.**

Long division would take a hundred steps. The remainder theorem needs one. Dividing by $x - 1$ leaves the value at 1, which is $1 - 3 + 5 = 3$. Dividing by $x + 1 = x - (-1)$ leaves the value at $-1$, which is $1 + 3 + 5 = 9$.

**Common mistake.** **The wrong sign in the factor.** The root $-2$ corresponds to the factor $x + 2$, not $x - 2$. The factor theorem pairs the root $a$ with $x - a$, and $x - (-2) = x + 2$. A quick test: the factor must be zero when you put in the root.

**Common mistake.** **Dividing an equation by $x$.** To solve $x^3 = 4x$, it is tempting to cancel an $x$ and get $x^2 = 4$, so $x = \pm 2$. The cancelling is a division by $x$, which is not allowed when $x = 0$, and $x = 0$ is a solution that has been thrown away. Bring everything to one side and factor: $x^3 - 4x = x(x - 2)(x + 2)$, with the three roots $0$, $2$ and $-2$. A cubic equation with only two solutions should have made us suspicious.

Stepping back: the step that did the most work was the smallest one, noticing that the remainder on dividing by $x - a$ is $p(a)$. It converts a fact about one value of a function into a fact about its whole formula, and after that the count of roots, the meaning of multiplicity and the argument about crossings are short. The same exchange between roots and factors is used wherever polynomials are, from solving equations by factoring to the calculus of [Taylor polynomials](@calculus/taylor-series).

**Check yourself.** A polynomial of degree 5 with real coefficients is graphed. Which of the following is impossible?
Answer: The graph crosses the $x$ axis exactly twice and never touches it elsewhere The two ends of an odd-degree graph have opposite signs, so the number of sign changes, which is the number of crossings, is odd.

**Recap.** - Dividing a polynomial $p$ of degree $n \ge 1$ by $x - a$ gives $p(x) = (x - a)q(x) + p(a)$, with $q$ of degree $n - 1$. The remainder is $p(a)$.
- Factor theorem: $a$ is a root of $p$ exactly when $x - a$ is a factor of $p$.
- A polynomial of degree $n$ has at most $n$ roots. Over the complex numbers it has exactly $n$, counted with multiplicity (fundamental theorem of algebra, cited).
- If $p(x) = (x - a)^m q(x)$ with $q(a) \ne 0$, the graph crosses the axis at $a$ when $m$ is odd and touches it when $m$ is even.
- For large $|x|$, $p(x)$ has the sign of its leading term: $\left|\frac{p(x)}{c_n x^n} - 1\right| \le \frac{M}{|x|}$.
- Odd degree: the ends have opposite signs and the number of crossings is odd. Even degree: the ends agree and the number of crossings is even.

## Problems

Work these on paper before opening the solutions. The first three repeat the lesson's moves, the next three combine them, and the last two go further.

**Problem 1.** Find the remainder when $x^4 - 3x^2 + 2x - 5$ is divided by $x - 2$, and when it is divided by $x + 1$.

**Solution.** By the remainder theorem the remainders are the values at 2 and at $-1$. At 2: $16 - 12 + 4 - 5 = 3$. At $-1$: $1 - 3 - 2 - 5 = -9$.

**Problem 2.** Show that $x - 3$ is a factor of $x^3 - 7x - 6$, and factor the polynomial completely.

**Solution.** The value at 3 is $27 - 21 - 6 = 0$, so $x - 3$ is a factor by the factor theorem. Divide: $x^2(x - 3) = x^3 - 3x^2$ leaves $3x^2 - 7x - 6$; $3x(x - 3) = 3x^2 - 9x$ leaves $2x - 6 = 2(x - 3)$. So $x^3 - 7x - 6 = (x - 3)(x^2 + 3x + 2) = (x - 3)(x + 1)(x + 2)$. Check at $x = -1$: $-1 + 7 - 6 = 0$.

**Problem 3.** Without plotting points, describe the graph of $f(x) = -(x + 1)^2(x - 2)$: its end behavior, where it meets the $x$ axis and how, its sign on each interval, and its $y$ intercept.

**Solution.** Multiplied out, the leading term is $-x^3$: degree 3 with negative leading coefficient, so the graph is high on the far left and low on the far right. The roots are $-1$ (multiplicity 2, a touch) and $2$ (multiplicity 1, a crossing). Signs: $-(x + 1)^2$ is negative except at $-1$, so $f$ has the sign opposite to $x - 2$. Thus $f > 0$ for $x < -1$ and for $-1 < x < 2$, and $f < 0$ for $x > 2$. The graph comes down from the upper left, touches the axis at $-1$ from above, rises again, and comes down through the axis at 2. The $y$ intercept is $f(0) = -(1)(-2) = 2$.

**Problem 4.** Find the number $k$ for which $x - 2$ is a factor of $x^3 + kx^2 - 4x + 8$. For that $k$, factor the polynomial and say how its graph meets the $x$ axis.

**Solution.** We need the value at 2 to be zero: $8 + 4k - 8 + 8 = 8 + 4k = 0$, so $k = -2$. Then $x^3 - 2x^2 - 4x + 8 = x^2(x - 2) - 4(x - 2) = (x - 2)(x^2 - 4) = (x - 2)^2(x + 2)$. The root 2 is double, so the graph touches the axis at 2, and the root $-2$ is simple, so it crosses there.

**Problem 5.** Solve the inequality $(x + 2)(x - 1)^2(x - 3) > 0$.

**Solution.** The left side is 4 times the polynomial $h$ of the lesson. Its degree is 4 with positive leading coefficient, so it is positive at both far ends. Moving right from the far left, the sign changes at $-2$ (simple), does not change at 1 (double), and changes at 3 (simple). So the expression is positive for $x < -2$, negative for $-2 < x < 1$ and for $1 < x < 3$, zero at $-2$, 1 and 3, and positive for $x > 3$. The solution is $x < -2$ or $x > 3$. Check with $x = 0$: $(2)(1)(-3) = -6 < 0$, as claimed for the middle.

**Problem 6.** Explain why every polynomial of odd degree with real coefficients has at least one real root. Then give a polynomial of degree 6 with no real roots.

**Solution.** Let the degree $n$ be odd. By the end-behavior theorem, for $|x|$ large enough $p(x)$ has the sign of $c_n x^n$, and because $n$ is odd, $x^n$ is positive for positive $x$ and negative for negative $x$. So $p$ takes a positive value at some point and a negative value at another. A polynomial is continuous, so by the intermediate value theorem it is zero somewhere between them. For even degree both ends have the same sign and nothing forces a root: $x^6 + 1 \ge 1$ for every real $x$.

**Problem 7.** (a) Prove that if two polynomials of degree at most $n$ take the same value at $n + 1$ different numbers, then they have the same coefficients. (b) A polynomial $p$ of degree at most 2 satisfies $p(1) = p(2) = p(3) = 5$. What is $p$?

**Solution.** (a) Let $f$ and $g$ be the two polynomials and let $d = f - g$, whose coefficients are the differences of theirs. If some coefficient of $d$ were not zero, $d$ would be a polynomial of some degree $k \le n$, and it would have at most $k \le n$ roots. But $d$ vanishes at $n + 1$ different numbers. So every coefficient of $d$ is zero, which says that $f$ and $g$ have the same coefficients. (b) The constant polynomial 5 has degree at most 2 and agrees with $p$ at the three numbers 1, 2, 3. By (a) with $n = 2$, $p$ is the constant 5. The data $p(1) = p(2) = p(3) = 5$ could not come from a true parabola.

**Problem 8.** For a complex number $z = a + bi$ write $\bar z = a - bi$ for its mirror image in the real axis. You may use that $\overline{z + w} = \bar z + \bar w$ and $\overline{zw} = \bar z\,\bar w$. (a) Show that if $p$ has real coefficients, then $p(\bar z) = \overline{p(z)}$. (b) Deduce that the non-real roots of a polynomial with real coefficients come in pairs $z, \bar z$. (c) Verify this for $x^3 - 1$ by finding its three roots.

**Solution.** (a) Applying the product rule repeatedly, $\overline{z^k} = \bar z^{\,k}$. A real number $c$ is its own mirror image, so $\overline{c\,z^k} = c\,\bar z^{\,k}$. Adding these up over the terms of $p$ and using the sum rule gives $\overline{p(z)} = p(\bar z)$. (b) If $p(z) = 0$ then $p(\bar z) = \overline{p(z)} = \bar 0 = 0$, so $\bar z$ is a root too, and it is different from $z$ when $z$ is not real. (c) $x^3 - 1$ has the root 1, and by the identity in the lesson $x^3 - 1 = (x - 1)(x^2 + x + 1)$. Completing the square, $x^2 + x + 1 = \left(x + \frac12\right)^2 + \frac34$, which is zero when $x + \frac12 = \pm\frac{\sqrt3}{2}i$. The roots are $1$, $-\frac12 + \frac{\sqrt3}{2}i$ and $-\frac12 - \frac{\sqrt3}{2}i$: one real root and one mirror pair. This is the second reason a real cubic has one or three real roots, counted with multiplicity: its three complex roots contain either no mirror pair or exactly one.
