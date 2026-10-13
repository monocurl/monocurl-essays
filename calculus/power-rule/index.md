# Why the derivative of x² is 2x: the power rule from pictures

> A growing square gains two thin strips and a tiny corner. That picture explains the 2 in 2x, and counting the same pieces in general proves the power rule.

Series: Calculus (https://www.monocurl.com/monocurl-essays/calculus/)
Canonical: https://www.monocurl.com/monocurl-essays/calculus/power-rule/
Keywords: power rule, derivative of x squared, why is the derivative of x^2 2x, derivative of x cubed, power rule proof, derivative of 1/x, derivative of square root of x, derivative of a polynomial

[Figure 1, animation: A square of side 3 grows until its side is 4. The area it gains is two strips, each 3 long, and one small corner square.]

In the [first lesson](@calculus/what-is-a-derivative) a falling ball had dropped $5t^2$ meters after $t$ seconds, and we found its speed at each instant to be $10t$ meters per second. The method was algebra: expand a square, cancel, divide by $h$, and watch one leftover term shrink to nothing.

That algebra is correct, and it explains very little. A square went in and a doubling came out, and nothing in the calculation says why, or what to expect if the square is replaced by a cube or a tenth power. Where does the 2 in $2x$ come from?

It can be seen, because $x^2$ is something you can draw. The picture that explains the 2 also predicts the derivative of $x^3$, and once we know what the picture is counting, the same count can be carried out for $x^n$, where no picture is available. That count is the proof of the power rule.

## A square that grows

Recall the definition. For a function $f$ and a number $a$, the **difference quotient** is $\frac{f(a+h) - f(a)}{h}$, the change in the output divided by the change $h \neq 0$ in the input, and the **derivative** $f'(a)$ is its limit as $h$ approaches 0, when that limit exists: the rate at which the output changes, per unit of input, at the single input $a$.

Take $f(x) = x^2$ and read it as the area of a square whose side is $x$. The difference quotient then has a concrete meaning: grow the side by $h$, measure how much area was gained, and divide the gain by $h$.

Start with a square of side 3, which has area 9, and grow the side by 1. The area becomes 16, so the gain is 7. The animation above shows where those 7 units sit: a strip 3 long and 1 wide along the right edge, an identical strip along the top, and a 1 by 1 square in the corner where they meet. The gain is $3 + 3 + 1 = 7$, and the difference quotient is $7 / 1 = 7$.

**Pause and try.** Now grow the side of the same square by $0.1$ instead, from 3 to 3.1. Without multiplying out $3.1^2$, use the three pieces to find the gain in area and the difference quotient. Then check your gain against $3.1^2$.

**Answer.** Each strip is 3 long and $0.1$ wide, so the two strips add $2 \times 3 \times 0.1 = 0.6$. The corner is $0.1 \times 0.1 = 0.01$. The gain is $0.61$, and indeed $3.1^2 = 9.61$. The difference quotient is $0.61 / 0.1 = 6.1$.

The next figure repeats that computation for smaller and smaller growths.

[Figure 2, steps: A square of side 3 whose side grows by less and less. The gain in area is always two orange strips and a purple corner, and the corner shrinks much faster than the strips.]

  - step: Grow the side from 3 to 4. Each strip adds 3 and the corner adds 1, a gain of 7.
  - step: Grow it by 0.5 instead. The strips add 3 in total and the corner adds 0.25.
  - step: Grow it by 0.1. The strips add 0.6. The corner adds only 0.01.
  - step: Grow it by 0.01. The strips are hairlines and the corner is too small to draw.
The last line of the readout is the difference quotient, the area gained per unit of side added. It comes out as 7, then 6.5, then 6.1, then 6.01, so the derivative of $x^2$ at $x = 3$ should be 6, which is what the first lesson found from the definition.

The picture adds an account of where the 6 comes from. At every step the two strips contribute exactly $2 \times 3 \times h$ to the gain, which is 6 per unit of $h$. The corner contributes the rest: 1, then 0.5, then 0.1, then 0.01 per unit of $h$.

## Why the corner does not count

Nothing in that description depended on the side being 3. Let the side be $x > 0$ and the growth be $h > 0$. Each strip is $x$ long and $h$ wide and the corner is $h$ by $h$, so

$$
(x+h)^2 - x^2 = 2xh + h^2.
$$

Each term is now attached to a piece of the picture: $2xh$ is the pair of strips and $h^2$ is the corner. To see the rate, cut the three pieces loose and lay them in a row.

[Figure 3, animation: The gained area cut loose and laid end to end. It is a bar of length 2x and thickness h, plus the small corner. The area gained per unit of thickness is the length of the bar, 2x.]

Dividing an area by its thickness gives a length, and that is what the difference quotient does to this bar:

$$
\frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h.
$$

The $2x$ is the length of the bar, and the extra $h$ is the length the corner adds to it. As $h \to 0$ the corner's contribution goes to 0 and the quotient has limit $2x$.

You might object that the strips shrink as well: at $h = 0.01$ they are hairlines, so why should they survive in the limit when the corner does not? The difference quotient measures gain *per unit of $h$*, and the two kinds of piece respond differently when $h$ is made smaller. A strip is thin in one direction only, so halving $h$ halves its area and leaves its area divided by $h$ unchanged. The corner is thin in two directions, so halving $h$ quarters its area and halves its area divided by $h$. Repeating this drives the corner's share of the quotient to zero while the strips' share stays at $2x$.

**Key idea.** The derivative of $x^2$ is $2x$ because a growing square gains two strips, each as long as its side. The corner where they meet is small in two directions at once, so it disappears from the rate.

One gap has to be closed before we rely on the picture. The definition of the derivative takes a limit over negative $h$ as well as positive, and $x^2$ is defined for negative $x$ too, while the picture showed only a positive side growing. But the identity $(x+h)^2 - x^2 = 2xh + h^2$ is true for all real $x$ and $h$. The picture tells us which identity to look for and what its terms mean, and the identity does the proving.

This also accounts for the ball. Its distance $5t^2$ is the combined area of five squares of side $t$. Each gains area at the rate $2t$, so the five together gain at the rate $10t$.

## A cube that grows

The next power is $x^3$, the volume of a cube of side $x$. Take a cube of side 2, with volume 8, and grow every side by $h$.

**Pause and try.** Before looking at the figure, picture the grown cube with the old cube inside it, pushed into one corner. The new material can be cut into flat slabs, thin rods and one tiny cube. How many slabs and how many rods are there, what are the dimensions of each, and which pieces will still matter in the difference quotient as $h \to 0$?

**Answer.** There are three slabs, one against each of the three faces of the old cube that are not pushed into the corner, and each measures $2 \times 2 \times h$. There are three rods, one along each edge where two slabs meet, each $2 \times h \times h$. The last piece is a corner cube, $h \times h \times h$. Only the slabs are thin in a single direction, so only they survive division by $h$: their contribution to the rate is $3 \times 2 \times 2 = 12$.

[Figure 4, steps: A cube of side 2 grows by h on every side. The new material is three slabs, three rods and a corner cube. When h shrinks, only the slabs keep up.]

  - step: A cube of side 2 has volume 8.
  - step: Grow every side by 0.5. The new cube has volume 15.625, a gain of 7.625.
  - step: Pull the new material apart: three slabs (orange), three rods (purple) and one corner cube (gold).
  - step: Shrink the growth to 0.1. The slabs keep their full faces. The rods and the corner nearly vanish.
With $h = 0.1$ the gain of $2.1^3 - 8 = 1.261$ splits into $1.2$ from the slabs, $0.06$ from the rods and $0.001$ from the corner, and the difference quotient is $12.61$. Everything above 12 comes from pieces that are thin in two or three directions.

In letters, each slab has volume $x^2 h$, each rod $x h^2$, and the corner $h^3$, so

$$
(x+h)^3 - x^3 = 3x^2 h + 3x h^2 + h^3.
$$

Dividing by $h$ gives $3x^2 + 3xh + h^2$. The last two terms still carry a factor of $h$ and have limit 0, so the derivative of $x^3$ is $3x^2$: three slabs, each with a face of area $x^2$.

## The pattern, without a picture

So far we have

$$
x^2 \longrightarrow 2x, \qquad x^3 \longrightarrow 3x^2,
$$

and the obvious guess for $x^4$ is $4x^3$. A four-dimensional cube is hard to draw, so to test the guess we have to work out what the picture was doing for us and do that directly.

A slab was thin in exactly one of the cube's directions and full-sized in the others, and a cube has three directions, which is why there were three slabs. Algebra records the same count. Write the grown volume as a product with one bracket for each direction:

$$
(x+h)^4 = (x+h)(x+h)(x+h)(x+h).
$$

Multiplying this out means taking either the $x$ or the $h$ from each bracket, multiplying the four choices together, and adding up the results over all $2^4 = 16$ ways of choosing. If you take $x$ from every bracket you get $x^4$, which is the old cube. If you take $h$ from exactly one bracket and $x$ from the other three you get $x^3 h$, which is a slab: thin in one direction, full-sized in three.

**Pause and try.** How many of the 16 choices take $h$ from exactly one bracket? How many take $h$ from exactly two? Use your counts to write out $(x+h)^4$ in full, and check it at $x = 1$, $h = 1$.

**Answer.** The single $h$ can come from any of the 4 brackets, so there are 4 such choices, contributing $4x^3h$. Two $h$'s can come from 6 pairs of brackets, contributing $6x^2h^2$. Three $h$'s means choosing the one bracket that gives $x$, so $4xh^3$, and one choice gives $h^4$. Altogether $(x+h)^4 = x^4 + 4x^3h + 6x^2h^2 + 4xh^3 + h^4$. At $x = h = 1$ both sides are 16.

[Figure 5, image: The four ways to take h from exactly one bracket of (x+h)^4. Each gives x^3 h, so together they contribute 4x^3 h. Every other choice has at least two factors of h.]

Every one of the remaining eleven choices takes $h$ from two or more brackets, so each has a factor of $h^2$. Those are the four-dimensional rods and corners, and we can write

$$
(x+h)^4 - x^4 = 4x^3 h + h^2 \cdot (\text{a polynomial in } x \text{ and } h).
$$

Dividing by $h$ leaves $4x^3$ plus $h$ times a polynomial, and the second part has limit 0. The derivative of $x^4$ is $4x^3$, as guessed.

Nothing in the argument was special to 4. With $n$ brackets there are $n$ ways to choose the bracket that supplies the single $h$, each giving $x^{n-1}h$, and everything else has a factor of $h^2$. The exponent comes down in front because it counts the slabs. The power drops by one because a slab has traded one of its factors of $x$ for an $h$, and the division by $h$ removes that factor.

## The power rule, stated and proved

Here is the statement as a textbook would give it. Its proof is the counting argument with the limit checked carefully.

**Theorem.** **(Power rule for positive whole exponents.)** Let $n$ be an integer with $n \ge 1$, and let $f(x) = x^n$. Then $f$ is differentiable at every real number $a$, and

$$
f'(a) = n\,a^{n-1}.
$$

"Every real number $a$" includes negative numbers and zero, for which there is no cube to draw, and the proof will not need one. "Differentiable" asserts that the limit of the difference quotient exists, which is the claim that the rods and corners fade. For $n = 1$ the formula reads $1 \cdot a^0 = 1$, with the convention that $a^0 = 1$ for every $a$.

**Proof.** Fix a real number $a$. If $n = 1$, the difference quotient is $\frac{(a+h) - a}{h} = 1$ for every $h \neq 0$, so its limit is 1, as claimed.

Now let $n \ge 2$, and expand $(a+h)^n$ as a product of $n$ brackets $(a+h)$. The expansion is a sum of $2^n$ products, one for each way of choosing $a$ or $h$ from every bracket. Exactly one choice takes $a$ every time and gives $a^n$. Exactly $n$ choices take $h$ from a single bracket, and each gives $a^{n-1}h$. Each of the other choices takes $h$ from $k \ge 2$ brackets and gives $a^{n-k}h^k = h^2 \cdot a^{n-k}h^{k-2}$. Collecting these,

$$
(a+h)^n = a^n + n\,a^{n-1}h + h^2 R(h),
$$

where $R(h)$ is a sum of fewer than $2^n$ terms of the form $a^{i}h^{j}$ with $i, j \ge 0$ and $i + j = n - 2$. For $h \neq 0$ the difference quotient is therefore

$$
\frac{(a+h)^n - a^n}{h} = n\,a^{n-1} + h\,R(h).
$$

It remains to show that $h\,R(h)$ has limit 0. Let $C$ be the larger of $1$ and $|a|$. If $|h| \le 1$, every term of $R(h)$ satisfies $|a^{i}h^{j}| \le C^{i} \le C^{n}$, so $|R(h)| \le M$ where $M = 2^n C^n$. Given $\varepsilon > 0$, choose $\delta$ to be the smaller of $1$ and $\varepsilon / M$. If $0 < |h| < \delta$, then

$$
\left| \frac{(a+h)^n - a^n}{h} - n\,a^{n-1} \right| = |h|\,|R(h)| \le M|h| < \varepsilon.
$$

So the limit exists and equals $n\,a^{n-1}$.

On its own this theorem differentiates single powers. Two simple facts extend it to every polynomial.

**Theorem.** **(Sums and constant multiples.)** Suppose $f$ and $g$ are differentiable at $a$, and let $c$ be a constant. Then $f + g$ and $cf$ are differentiable at $a$, with

$$
(f+g)'(a) = f'(a) + g'(a) \qquad \text{and} \qquad (cf)'(a) = c\,f'(a).
$$

**Proof.** For $h \neq 0$, the difference quotient of $f + g$ at $a$ splits as

$$
\frac{\bigl(f(a+h) + g(a+h)\bigr) - \bigl(f(a) + g(a)\bigr)}{h} = \frac{f(a+h) - f(a)}{h} + \frac{g(a+h) - g(a)}{h}.
$$

The two quotients on the right have limits $f'(a)$ and $g'(a)$. The limit of a sum is the sum of the limits (one of the limit laws, proved from the $\varepsilon$–$\delta$ definition in the [lesson on limits](@calculus/limits)), so the left side has limit $f'(a) + g'(a)$. In the same way the difference quotient of $cf$ is $c$ times that of $f$, and the limit of a constant times a function is the constant times the limit.

In the pictures, gains add, and five squares gain five times what one does, which is how we handled the ball. A constant function has derivative 0, since its difference quotient is $\frac{c - c}{h} = 0$ for every $h \neq 0$.

**Worked example.** **Differentiate $p(x) = 4x^3 - 6x^2 + 7x - 2$ and find the tangent line to its graph at $x = 1$.**

Differentiate term by term (the theorem on sums and constant multiples), using the power rule on each power; the constant has derivative 0. So

$$
p'(x) = 4 \cdot 3x^2 - 6 \cdot 2x + 7 = 12x^2 - 12x + 7.
$$

At $x = 1$ the value is $p(1) = 4 - 6 + 7 - 2 = 3$ and the slope is $p'(1) = 12 - 12 + 7 = 7$. The tangent line passes through $(1, 3)$ with slope 7, so it is $y = 3 + 7(x - 1)$, that is, $y = 7x - 4$.

*Check.* At $x = 1.01$ the line gives $3.07$ and the polynomial gives $4(1.030301) - 6(1.0201) + 7.07 - 2 = 3.070604$. They differ by about $0.0006$, of the order of $h^2 = 0.0001$, as a tangent line's error should be.

**Worked example.** **A ball is thrown straight up, and its height after $t$ seconds is $p(t) = 20t - 5t^2$ meters. When does it stop rising, and how high does it get?**

The ball's upward speed is the derivative, $p'(t) = 20 - 10t$ meters per second. This is positive before $t = 2$, when the ball is rising, and negative afterwards, when it is falling, so the ball is highest at $t = 2$, where $p'(2) = 0$. Its height then is $p(2) = 40 - 20 = 20$ meters.

*Check.* $p(1.9) = 38 - 18.05 = 19.95$ and $p(2.1) = 42 - 22.05 = 19.95$, both just under 20.

## Does the rule work for other powers?

The counting proof needs $n$ brackets, so it only speaks for positive whole numbers. But the expression $n x^{n-1}$ makes sense for other values of $n$, so we can ask whether the rule stays true.

Try $n = -1$. Since $x^{-1}$ means $1/x$, the rule would predict the derivative $(-1) \cdot x^{-2} = -1/x^2$, which is $-0.25$ at $x = 2$.

There is no cube here, but a rectangle of width $x$ and area 1 must have height $1/x$. If it is made wider while its area is held at 1, its height has to come down, and we want to know how fast.

[Figure 6, steps: A rectangle whose area is held at 1. Widening it adds a strip on the right, so a strip of equal area has to come off the top.]

  - step: A rectangle 2 wide and 0.5 tall has area 1. Its corner sits on the curve of 1/x.
  - step: Widen it to 2.5 and keep the area at 1. The height has to drop to 0.4.
  - step: It gained the orange strip, 0.5 by 0.4, and gave up the red strip, 2 by 0.1. Both have area 0.2.
Because the area did not change, the area gained on the right must equal the area given up on top. Suppose the width grows from $x$ to $x + h$ and the height drops by $k$. The strip on the right is $h$ wide and as tall as the new height, which is $\frac{1}{x+h}$. The strip on top is $x$ wide and $k$ tall. Setting the two areas equal,

$$
x \cdot k = h \cdot \frac{1}{x+h}, \qquad \text{so} \qquad \frac{k}{h} = \frac{1}{x(x+h)}.
$$

The left side is the drop in height per unit of added width, which is the difference quotient of $1/x$ with its sign reversed. As $h \to 0$ the product $x(x+h)$ approaches $x^2$, so the height falls at the rate $1/x^2$.

At $x = 2$ that is $0.25$, as predicted; the figure's large step $h = 0.5$ gave $0.1 / 0.5 = 0.2$.

The picture needs positive $x$ and $h$, but the equation it produced is the algebra of the [first lesson](@calculus/what-is-a-derivative), where the difference quotient of $1/x$ at any $a \neq 0$, for $h$ of either sign, was found to be $-\frac{1}{a(a+h)}$, with limit $-\frac{1}{a^2}$. So $1/x$ is differentiable at every $a \neq 0$ with derivative $-1/a^2$, and the rectangle explains the form of the answer: one factor of $\frac{1}{x}$ is the height of the strip gained, and the other comes from spreading the loss along a top edge of length $x$.

Now try $n = \frac{1}{2}$. Since $x^{1/2}$ means $\sqrt{x}$, the rule would predict $\frac{1}{2}x^{-1/2}$, which is $\frac{1}{2\sqrt{x}}$.

For this one, read the growing square in the other direction. Before, we chose the side and asked about the area. Now choose the area $A$ and ask about the side $s = \sqrt{A}$. If the side grows by $k$, the area grows by two strips and a corner, $2sk + k^2 = k(2s + k)$. So an added area of $h$ produces a growth $k$ in the side with

$$
h = k\,(2s + k), \qquad \text{that is,} \qquad \frac{k}{h} = \frac{1}{2s + k}.
$$

As the added area shrinks, so does $k$, and the quotient approaches $\frac{1}{2s} = \frac{1}{2\sqrt{A}}$, which is what the rule predicted. The numbers from the start of the lesson fit. Growing the area from 9 to 9.61 moved the side from 3 to 3.1, a quotient of $0.1 / 0.61 \approx 0.164$, and the prediction at $A = 9$ is $\frac{1}{6} \approx 0.167$.

A large square has long strips, so the same added area makes a thinner layer.

[Figure 7, animation: Area is added to a square at a steady rate. The side grows quickly while the square is small and slowly once it is large, because the same area is spread along longer strips.]

**Theorem.** Let $f(x) = \sqrt{x}$ for $x \ge 0$. Then $f$ is differentiable at every $a > 0$, and $f'(a) = \dfrac{1}{2\sqrt{a}}$.

**Proof.** Fix $a > 0$ and let $h \neq 0$ with $|h| < a$, so that $a + h > 0$. Write $s = \sqrt{a}$ and $s + k = \sqrt{a+h}$. Then $h = (s+k)^2 - s^2 = k(2s + k)$, and $2s + k = \sqrt{a+h} + \sqrt{a} > 0$, so

$$
\frac{\sqrt{a+h} - \sqrt{a}}{h} = \frac{k}{h} = \frac{1}{\sqrt{a+h} + \sqrt{a}}.
$$

From the same identity, $|k| = \frac{|h|}{\sqrt{a+h} + \sqrt{a}} \le \frac{|h|}{\sqrt{a}}$. Therefore

$$
\left| \frac{1}{\sqrt{a+h} + \sqrt{a}} - \frac{1}{2\sqrt{a}} \right| = \frac{|k|}{\bigl(\sqrt{a+h} + \sqrt{a}\bigr)\,2\sqrt{a}} \le \frac{|k|}{2a} \le \frac{|h|}{2a\sqrt{a}}.
$$

Given $\varepsilon > 0$, let $\delta$ be the smaller of $a$ and $2a\sqrt{a}\,\varepsilon$. Then $0 < |h| < \delta$ makes the left side less than $\varepsilon$.

The hypothesis $a > 0$ cannot be dropped. At $a = 0$ the difference quotient is $\frac{\sqrt{h}}{h} = \frac{1}{\sqrt{h}}$ for $h > 0$, which grows without bound as $h \to 0$, so $\sqrt{x}$ has no derivative at 0.

## How far the rule reaches

[Figure 8, image: Five powers of x and their derivatives. In each row the exponent comes down in front and the power drops by one.]

We have now proved every row: the first three by the counting theorem, and the last two by separate arguments that each produced the same formula $n x^{n-1}$. The general fact behind the agreement is this.

**Theorem.** **(Power rule, general exponent.)** Let $r$ be any real number and let $f(x) = x^r$ for $x > 0$. Then $f$ is differentiable at every $a > 0$, and $f'(a) = r\,a^{r-1}$.

This lesson has **not** proved that statement. It is quoted. What has been proved here is the rule for positive whole exponents (at every real $a$), for $r = -1$ and for $r = \frac{1}{2}$, and Problems 5 and 7 add $r = -2$ and $r = \frac{1}{3}$ by the same methods. A general rational exponent needs the chain rule, and a problem in [the next lesson](@calculus/product-and-chain-rule) derives the formula that way. For an irrational exponent such as $x^{\sqrt{2}}$, even the meaning of the expression has to be defined first, through the exponential function and the logarithm, and the proof uses those functions together with the chain rule. Until then the general rule is a cited theorem.

The restriction to $x > 0$ is there because many powers are undefined elsewhere: $x^{1/2}$ has no real value for negative $x$, and $x^{-1}$ has no value at 0.

**Worked example.** **Differentiate $g(x) = 3\sqrt{x} + \dfrac{2}{x}$ for $x > 0$, and evaluate $g'(4)$.**

First rewrite $g$ as a sum of constant multiples of powers: $g(x) = 3x^{1/2} + 2x^{-1}$. Now differentiate term by term, bringing each exponent down and reducing it by one:

$$
g'(x) = 3 \cdot \tfrac{1}{2}x^{-1/2} + 2 \cdot (-1)x^{-2} = \frac{3}{2\sqrt{x}} - \frac{2}{x^2}.
$$

At $x = 4$ this is $\frac{3}{4} - \frac{2}{16} = \frac{5}{8} = 0.625$.

*Check.* $g(4) = 6 + 0.5 = 6.5$. Using $\sqrt{4.01} \approx 2.002498$, $g(4.01) \approx 6.007495 + 0.498753 = 6.506248$. The difference quotient over $h = 0.01$ is $0.6248$, close to $0.625$.

**Common mistake.** **Reducing a negative exponent in the wrong direction.** A common answer for the derivative of $x^{-3}$ is $-3x^{-2}$. The exponent has to go *down* by one, and one less than $-3$ is $-4$, so the derivative is $-3x^{-4}$.

**Common mistake.** **Using the power rule when the variable is in the exponent.** The rule is about $x^n$, a variable base with a constant exponent, and says nothing about $2^x$. Applying it anyway gives "$x \cdot 2^{x-1}$", which is 0 at $x = 0$, but $2^x$ is plainly increasing there: from $2^0 = 1$ to $2^{0.1} \approx 1.0718$ is an average rate of about $0.72$. Exponential functions need a rule of their own.

## What to keep

The first lesson's difficulty was defining a rate at an instant through a limit. This one's is knowing what the limit throws away. When a quantity grows, its gain arrives in pieces, some small in one direction and some small in two or more, and a rate only registers the first kind. The proofs above were all ways of showing that the other pieces are at most a constant times $h^2$.

[The next lesson](@calculus/product-and-chain-rule) applies the same idea to a rectangle whose two sides are different functions of $x$, and the strips of that rectangle give the rule for differentiating a product.

**Check yourself.** What is the derivative of $x^5$ at $x = 2$?
Answer: 80 The derivative is $5x^4$: there are five ways to take a single $h$ from five brackets, each leaving $x^4$. At $x = 2$ it is $5 \times 16 = 80$.

**Recap.** - A square of side $x$ that grows by $h$ gains two strips of area $xh$ and a corner of area $h^2$. Per unit of $h$ the strips give $2x$ and the corner gives $h$, which has limit 0.
- A cube gains three slabs, three rods and a corner. Only the slabs are thin in a single direction, so the derivative of $x^3$ is $3x^2$.
- In $(a+h)^n$ there are $n$ ways to take $h$ from exactly one bracket, and every other term beyond $a^n$ has a factor of $h^2$. That is the proof that $(x^n)' = n x^{n-1}$ for every integer $n \ge 1$ and every real $x$.
- Derivatives of sums and constant multiples are taken term by term, so every polynomial can be differentiated.
- The same formula holds for $1/x$ (where $x \neq 0$) and for $\sqrt{x}$ (where $x > 0$), each proved here. For a general real exponent and $x > 0$ the rule is true and is quoted here without proof.
- The rule applies to a variable base with a constant exponent. It does not apply to $2^x$.

## Problems

Work these on paper before opening the solutions. The first two repeat the moves of the lesson, the next three combine them or ask for a reason, and the last two go beyond it.

**Problem 1.** Differentiate each function: (a) $x^7$; (b) $3x^4 - 2x + 9$; (c) $\dfrac{6}{x} + 4\sqrt{x}$ for $x > 0$.

**Solution.** (a) $7x^6$. (b) Term by term, $3 \cdot 4x^3 - 2 \cdot 1 + 0 = 12x^3 - 2$. (c) Rewrite as $6x^{-1} + 4x^{1/2}$. Then the derivative is $6 \cdot (-1)x^{-2} + 4 \cdot \frac{1}{2}x^{-1/2} = -\dfrac{6}{x^2} + \dfrac{2}{\sqrt{x}}$.

**Problem 2.** A square of side 5 has its side increased to $5.02$. Find the gain in area from the strips and the corner separately. What does the tangent-line estimate $5^2 + 2 \cdot 5 \cdot h$ give for $5.02^2$, and how large is its error?

**Solution.** The two strips have area $2 \times 5 \times 0.02 = 0.2$, and the corner has area $0.02^2 = 0.0004$. So $5.02^2 = 25 + 0.2 + 0.0004 = 25.2004$. The estimate $25 + 10h = 25.2$ keeps the strips and drops the corner, so its error is exactly the corner, $0.0004$.

**Problem 3.** Find the tangent line to $y = x^3$ at the point $(2, 8)$. Then find every point where that line meets the curve. What does the result say about the idea that a tangent line "touches the curve only once"?

**Solution.** The slope is $3x^2 = 12$ at $x = 2$, so the tangent line is $y = 8 + 12(x - 2) = 12x - 16$. It meets the curve where $x^3 = 12x - 16$, that is, $x^3 - 12x + 16 = 0$. Since the line is tangent at $x = 2$ we expect a double root there, and indeed $(x-2)^2(x+4) = (x^2 - 4x + 4)(x + 4) = x^3 - 12x + 16$. So the line meets the curve at $x = 2$ and again at $x = -4$, at the point $(-4, -64)$; check: $12(-4) - 16 = -64$. A tangent line is defined by its slope at the point of tangency, and nothing prevents it from crossing the curve somewhere else.

**Problem 4.** The area of a circle of radius $r$ is $\pi r^2$, so by the power rule its derivative with respect to $r$ is $2\pi r$, which is the circumference. Explain this with a picture in the style of the growing square: what is gained when the radius grows by $h$, and what plays the role of the corner?

**Solution.** When the radius grows from $r$ to $r + h$ the circle gains a ring of width $h$. Its exact area is $\pi(r+h)^2 - \pi r^2 = 2\pi r h + \pi h^2$. The first term, $2\pi r h$, is a strip as long as the old circumference and $h$ wide: the ring cut and straightened. The second term, $\pi h^2$, is the extra area that comes from the outer edge being longer than the inner one. It is small in two directions, like the corner of the square, and after division by $h$ it becomes $\pi h$, which has limit 0. So the rate is the circumference: area is added along the boundary.

**Problem 5.** Prove from the definition that $f(x) = \dfrac{1}{x^2}$ has derivative $f'(a) = -\dfrac{2}{a^3}$ at every $a \neq 0$. (You may use the limit laws for sums, products and quotients.) Check that this agrees with the power rule for $r = -2$.

**Solution.** For $h \neq 0$ with $a + h \neq 0$,

$$
\frac{1}{(a+h)^2} - \frac{1}{a^2} = \frac{a^2 - (a+h)^2}{a^2(a+h)^2} = \frac{-2ah - h^2}{a^2(a+h)^2} = \frac{-h(2a + h)}{a^2(a+h)^2}.
$$

Dividing by $h$, the difference quotient is $-\dfrac{2a + h}{a^2(a+h)^2}$. As $h \to 0$ the numerator has limit $2a$ and the denominator has limit $a^2 \cdot a^2 = a^4 \neq 0$, so by the limit laws the quotient has limit $-\dfrac{2a}{a^4} = -\dfrac{2}{a^3}$. The power rule with $r = -2$ gives $-2a^{-3}$, the same thing.

**Problem 6.** Find the error in this argument. "For a whole number $x$, $x^2 = x + x + \cdots + x$, with $x$ terms. The derivative of each term is 1, so the derivative of the sum is $1 + 1 + \cdots + 1$ with $x$ terms, which is $x$. Hence the derivative of $x^2$ is $x$, not $2x$."

**Solution.** The rule for differentiating a sum term by term applies to a fixed number of terms. Here the *number* of terms is $x$, which changes when $x$ changes, and the argument ignores that change. (It also treats $x$ as a whole number, which leaves no room for a limit.) Count the change honestly: when $x$ increases by $h$, each of the $x$ existing terms increases by $h$, contributing $x \cdot h$, and there are also $h$ new terms, each of size about $x$, contributing another $x \cdot h$. The total is $2xh$. These are exactly the two strips of the growing square: one from every row getting longer, and one from there being more rows.

**Problem 7.** Adapt the square-root proof to find the derivative of $f(x) = x^{1/3}$ at a point $a > 0$. Start from a cube instead of a square: write $u = (a+h)^{1/3}$ and $v = a^{1/3}$, and use the identity $u^3 - v^3 = (u - v)(u^2 + uv + v^2)$. You may assume that the cube root is continuous, so that $u \to v$ as $h \to 0$. Does your answer agree with the power rule?

**Solution.** Since $u^3 = a + h$ and $v^3 = a$, the identity gives $h = (u - v)(u^2 + uv + v^2)$. For $a > 0$ and $|h| < a$ both $u$ and $v$ are positive, so the second factor is positive, and

$$
\frac{(a+h)^{1/3} - a^{1/3}}{h} = \frac{u - v}{h} = \frac{1}{u^2 + uv + v^2}.
$$

As $h \to 0$, $u \to v$, so the denominator has limit $3v^2 = 3a^{2/3}$, which is not zero. By the limit law for quotients, $f'(a) = \dfrac{1}{3a^{2/3}} = \tfrac{1}{3}a^{-2/3}$. The power rule with $r = \frac{1}{3}$ predicts $\frac{1}{3}a^{\frac{1}{3} - 1} = \frac{1}{3}a^{-2/3}$, in agreement.
