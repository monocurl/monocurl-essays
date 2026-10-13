# The product rule and the chain rule, seen

> A rectangle whose sides both change explains the product rule, and a nudge passed along a chain of number lines explains the chain rule. Both are then proved.

Series: Calculus (https://www.monocurl.com/monocurl-essays/calculus/)
Canonical: https://www.monocurl.com/monocurl-essays/calculus/product-and-chain-rule/
Keywords: product rule, chain rule, product rule proof, chain rule proof, derivative of a product, derivative of a composite function, why the chain rule works

[Figure 1, animation: A rectangle whose width is f(x) = x^2 and whose height is g(x) = x + 1, as x grows from 2 to 2.5. Its area gains a strip from the change in f, a strip from the change in g, and a corner.]

Here is a rule that looks as if it ought to be true. The derivative of a sum is the sum of the derivatives, so surely the derivative of a product is the product of the derivatives.

Test it on the simplest product there is, $x \cdot x$. Each factor is $x$, whose derivative is 1, so the proposed rule gives $1 \cdot 1 = 1$. But $x \cdot x$ is $x^2$, and its derivative is $2x$. The proposed rule is wrong for every $x$ except $\frac{1}{2}$, and wrong in kind: it produced a constant where the true answer grows.

So products need their own rule, and so does the other basic way of building functions, which is to feed the output of one into another, as in $(x^2+1)^2$ or $\sqrt{x^2 + 9}$. This lesson finds both rules from pictures and then proves them. With them, and the [power rule](@calculus/power-rule) from last time, you can differentiate any function built from powers by adding, multiplying and composing.

## What we are working from

Two things carry over from earlier lessons. The first is the definition: the **derivative** of $f$ at $a$ is

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h},
$$

the limit of the change in output divided by the change in input, when that limit exists ([lesson 1](@calculus/what-is-a-derivative)). When it does we say $f$ is **differentiable** at $a$, and one consequence proved there is that $f$ is then continuous at $a$: $f(a+h) \to f(a)$ as $h \to 0$. The second is the power rule, $(x^n)' = n x^{n-1}$, together with the fact that sums and constant multiples are differentiated term by term.

Throughout, I will write $\Delta f$ for the change $f(a+h) - f(a)$ in a function when its input changes from $a$ to $a + h$. The difference quotient is then $\Delta f / h$.

## A rectangle with two changing sides

Last lesson explained the derivative of $x \cdot x$ with a square whose side grows: the area gains two strips and a corner, and the two strips are the $2x$. That square is a product in which both factors happen to be the same. For a general product $f(x)\,g(x)$, draw a rectangle of width $f(x)$ and height $g(x)$, so that the product is its area, and let $x$ change.

To have numbers to look at, take $f(x) = x^2$ and $g(x) = x + 1$, and start at $x = 2$. The rectangle is $4$ wide and $3$ tall, with area 12. Now increase $x$ to $2.1$. The width becomes $2.1^2 = 4.41$ and the height becomes $3.1$.

**Pause and try.** Find the gain in area when $x$ goes from 2 to 2.1 by adding up three pieces: the strip added on the right, the strip added on top, and the corner between them. Check the total against $4.41 \times 3.1$. What is the difference quotient?

**Answer.** The width grew by $\Delta f = 0.41$ and the height by $\Delta g = 0.1$. The strip on the right is as tall as the old rectangle, so its area is $3 \times 0.41 = 1.23$. The strip on top is as wide as the old rectangle, so its area is $4 \times 0.1 = 0.4$. The corner is $0.41 \times 0.1 = 0.041$. The total gain is $1.671$, and indeed $4.41 \times 3.1 = 13.671 = 12 + 1.671$. The difference quotient is $1.671 / 0.1 = 16.71$.

The figure below does the same bookkeeping for three values of $h$.

[Figure 2, steps: The rectangle of width x^2 and height x + 1 at x = 2, as x increases by less and less. The blue strip comes from the change in width, the orange strip from the change in height, and the purple corner from both.]

  - step: Increase x from 2 to 2.5. The width grows by 2.25 and the height by 0.5.
  - step: Increase x by 0.1 instead. The strips add 1.23 and 0.4, and the corner only 0.041.
  - step: Increase x by 0.01. The strips are hairlines and the corner is too small to draw.
The difference quotients are $19.75$, then $16.71$, then $16.07$, and they appear to be approaching 16. We can confirm that with tools we already have, because this particular product multiplies out: $x^2(x+1) = x^3 + x^2$, whose derivative is $3x^2 + 2x$, and at $x = 2$ that is $12 + 4 = 16$.

Now look at how the 16 is assembled in the figure. The strip on the right has area $g \cdot \Delta f$: the height of the old rectangle times the change in width. Per unit of $h$ it contributes $g \cdot \frac{\Delta f}{h}$, and as $h \to 0$ the quotient $\frac{\Delta f}{h}$ approaches $f'(2) = 4$, so this strip contributes $3 \times 4 = 12$. The strip on top has area $f \cdot \Delta g$ and contributes $f \cdot g'(2) = 4 \times 1 = 4$. The corner has area $\Delta f \cdot \Delta g$, and it is small in two directions, so it contributes nothing in the limit. That leaves $12 + 4 = 16$.

**Key idea.** When both sides of a rectangle change, its area changes through two strips. Each strip is the change in one side times the full length of the *other* side. So the derivative of $f \cdot g$ is $f' \cdot g + f \cdot g'$.

This also shows what was wrong with the guess $f' \cdot g'$. That expression is what the corner contributes, $\frac{\Delta f}{h} \cdot \frac{\Delta g}{h}$, if you forget that the corner's area has to be divided by $h$ only once. The guess keeps the one piece that vanishes and discards the two that matter.

## The product rule, stated and proved

**Theorem.** **(Product rule.)** Suppose $f$ and $g$ are defined on an open interval containing $a$ and are both differentiable at $a$. Then the product $fg$ is differentiable at $a$, and

$$
(fg)'(a) = f'(a)\,g(a) + f(a)\,g'(a).
$$

The hypotheses ask for exactly what the picture used: each side must have a rate of change at $a$. The proof is the picture written in symbols, including the step where the corner is shown to vanish. Nothing in it needs the sides or their changes to be positive.

**Proof.** Let $h \neq 0$ be small enough that $a + h$ is in the interval, and write $\Delta f = f(a+h) - f(a)$ and $\Delta g = g(a+h) - g(a)$. Then $f(a+h) = f(a) + \Delta f$ and $g(a+h) = g(a) + \Delta g$, and multiplying these out gives

$$
f(a+h)\,g(a+h) - f(a)\,g(a) = \Delta f \cdot g(a) + f(a) \cdot \Delta g + \Delta f \cdot \Delta g.
$$

These are the two strips and the corner. Divide by $h$:

$$
\frac{f(a+h)\,g(a+h) - f(a)\,g(a)}{h} = \frac{\Delta f}{h}\,g(a) + f(a)\,\frac{\Delta g}{h} + \frac{\Delta f}{h}\,\Delta g.
$$

As $h \to 0$, $\frac{\Delta f}{h} \to f'(a)$ and $\frac{\Delta g}{h} \to g'(a)$ by hypothesis. Also $\Delta g \to 0$, because $g$ is differentiable at $a$ and therefore continuous there. By the [limit laws](@calculus/limits) for sums and products, the right side has limit

$$
f'(a)\,g(a) + f(a)\,g'(a) + f'(a) \cdot 0,
$$

which is the claim.

The one place where care was needed is the corner term. It is the product of $\frac{\Delta f}{h}$, which stays near $f'(a)$, and $\Delta g$, which goes to 0. Continuity of $g$ is the exact form of "the corner is small in two directions".

**Worked example.** **Differentiate $p(x) = (3x^2 + 1)(x^3 - 2x)$.**

Take $f(x) = 3x^2 + 1$ and $g(x) = x^3 - 2x$. By the power rule, $f'(x) = 6x$ and $g'(x) = 3x^2 - 2$. The product rule says to differentiate one factor at a time, leaving the other alone, and add:

$$
p'(x) = 6x\,(x^3 - 2x) + (3x^2 + 1)(3x^2 - 2).
$$

Multiplying out, the first part is $6x^4 - 12x^2$ and the second is $9x^4 - 6x^2 + 3x^2 - 2 = 9x^4 - 3x^2 - 2$, so $p'(x) = 15x^4 - 15x^2 - 2$.

*Check.* Multiply the original out first: $p(x) = 3x^5 - 6x^3 + x^3 - 2x = 3x^5 - 5x^3 - 2x$, whose derivative is $15x^4 - 15x^2 - 2$. The two routes agree.

The rule does not care whether the sides are growing. Suppose a rectangle is 4 wide and 3 tall, its width is increasing at 2 units per second, and its height is *decreasing* at 1 unit per second. The product rule gives the rate of change of its area as $2 \cdot 3 + 4 \cdot (-1) = 2$ square units per second: the strip gained on the right is worth more than the strip lost from the top.

[Figure 3, animation: A rectangle that starts 4 wide and 3 tall. Its width grows at 2 units per second and its height shrinks at 1 unit per second. It gains the blue strip and loses the red one, and the area still increases at first.]

After a time $t$ the area is $(4 + 2t)(3 - t) = 12 + 2t - 2t^2$, so the average rate over the first $t$ seconds is $2 - 2t$, with limit 2 as predicted. In the picture the blue strip is slightly shorter than the old height, and the missing piece is the corner, now entering with a negative sign.

## Functions inside functions

The other way to build a function is to chain two together. To compute $(x^2 + 1)^2$ you first compute $u = x^2 + 1$ and then square the result. In general a **composite** function is $f(g(x))$: an inner function $g$ turns $x$ into an intermediate value $u = g(x)$, and an outer function $f$ turns $u$ into the final value $y = f(u)$.

Start with the simplest case, where both links are multiplications by a constant. Let $u = 3x$ and $y = 2u$.

**Pause and try.** If $x$ increases steadily by 1 unit per second, how fast does $u$ change? How fast does $y$ change? Write $y$ directly in terms of $x$ and confirm.

**Answer.** $u = 3x$ changes 3 times as fast as $x$, so 3 units per second. $y = 2u$ changes twice as fast as $u$, so 6 units per second. Directly, $y = 2(3x) = 6x$, whose derivative is 6. The rates multiplied.

[Figure 4, animation: Three linked number lines, with u = 3x and y = 2u. As x moves 1 unit, u moves 3 and y moves 6: each link multiplies the motion, like gears.]

For constant multipliers, then, the derivative of the chain is the product of the derivatives of the links. The difficulty with a function such as $x^2$ is that it does not multiply by any one number. To extend the idea we need to read a derivative as a multiplier that depends on where you are.

Take the inner function $u = x^2$ and watch what it does to a short interval of inputs.

[Figure 5, animation: The function x^2 sends each short interval on the top line to an interval on the bottom line. An interval of length 0.1 starting at x is stretched by the factor 2x + 0.1, which is close to the derivative 2x: small near 0 and larger further out.]

Near $x = 0.5$ the function sends an interval to one of about the same length. Near $x = 1$ it roughly doubles lengths, and near $x = 1.5$ it roughly triples them. This is the derivative seen as a **local stretch factor**: for inputs near $a$, a function $g$ multiplies small displacements by approximately $g'(a)$, because $\Delta g / h$ is close to $g'(a)$ when $h$ is small. That is the same fact as "the graph looks like a line of slope $g'(a)$ under magnification", told without the graph.

Read this way, a chain of two functions is two stretches in a row, and the only question is which stretch factors to use.

## A nudge passed along the chain

Take $y = (x^2 + 1)^2$, with inner function $u = g(x) = x^2 + 1$ and outer function $y = f(u) = u^2$, and start at $x = 1$. Then $u = 2$ and $y = 4$.

**Pause and try.** Nudge $x$ from 1 to 1.1. Compute the new $u$ and the new $y$. By what factor is the change in $u$ larger than the change in $x$? By what factor is the change in $y$ larger than the change in $u$? And the change in $y$ compared with the change in $x$?

**Answer.** The new $u$ is $1.1^2 + 1 = 2.21$, so $\Delta u = 0.21$, which is $2.1$ times $\Delta x = 0.1$. The new $y$ is $2.21^2 = 4.8841$, so $\Delta y = 0.8841$, which is $0.8841 / 0.21 = 4.21$ times $\Delta u$. Overall $\Delta y / \Delta x = 8.841$, and $2.1 \times 4.21 = 8.841$ exactly, because $\frac{\Delta y}{\Delta x} = \frac{\Delta u}{\Delta x} \cdot \frac{\Delta y}{\Delta u}$ is just arithmetic with fractions.

[Figure 6, steps: The chain x \to u = x^2 + 1 \to y = u^2 near x = 1, drawn on three number lines with the same scale. A nudge in x is stretched once on the way to u and again on the way to y.]

  - step: Start at x = 1. The inner function sends it to u = 2, and the outer function sends 2 to y = 4.
  - step: Nudge x by 0.1. The inner function moves u by 0.21, which is 2.1 times as far.
  - step: The outer function passes u's move on to y, which moves by 0.8841: 4.21 times as far as u.
  - step: Overall y moved about 8.84 times as far as x. That factor is the product of the two stretches.
  - step: Shrink the nudge to 0.02. The two stretches settle toward 2 and 4, and their product toward 8.
With a nudge of $0.02$ the two factors are $2.02$ and $4.04$, and their product is $8.16$. As the nudge shrinks, the first factor approaches the derivative of the inner function at $x = 1$, which is $g'(1) = 2 \cdot 1 = 2$. The second factor approaches the derivative of the outer function, and here is the point that needs attention: the outer function is being nudged at $u = 2$, where it is working, and its derivative there is $f'(2) = 2 \cdot 2 = 4$. It would be a mistake to evaluate $f'$ at $x = 1$. So the derivative of the chain at $x = 1$ should be $2 \times 4 = 8$.

We can check, since this composite also multiplies out: $(x^2+1)^2 = x^4 + 2x^2 + 1$, with derivative $4x^3 + 4x$, which is 8 at $x = 1$.

**Key idea.** A nudge to $x$ is stretched by $g'(x)$ on the way to $u$, and then by $f'(u)$ on the way to $y$. The derivative of $f(g(x))$ is the product of the two stretch factors, $f'(g(x)) \cdot g'(x)$, with the outer derivative taken at the intermediate value $u = g(x)$.

## The chain rule, stated and proved

**Theorem.** **(Chain rule.)** Suppose $g$ is defined on an open interval containing $a$ and is differentiable at $a$, and suppose $f$ is defined on an open interval containing $b = g(a)$ and is differentiable at $b$. Then the composite $f \circ g$, defined by $(f \circ g)(x) = f(g(x))$, is differentiable at $a$, and

$$
(f \circ g)'(a) = f'\bigl(g(a)\bigr)\,g'(a).
$$

In Leibniz notation, with $u = g(x)$ and $y = f(u)$, the same statement reads

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx},
$$

where $\frac{dy}{du}$ is evaluated at $u = g(x)$. Written this way the rule looks like cancelling $du$, and the calculation in the last exercise suggests a proof along those lines: for nonzero changes, $\frac{\Delta y}{\Delta x} = \frac{\Delta y}{\Delta u} \cdot \frac{\Delta u}{\Delta x}$ exactly, so take limits of both factors.

That argument has a gap. It divides by $\Delta u = g(a+h) - g(a)$, and nothing prevents $\Delta u$ from being 0 for some nonzero $h$, even for arbitrarily small ones. If $g$ is a constant function, $\Delta u$ is always 0 and the "proof" divides by zero at every step, although the theorem is plainly true for it. The repair is to avoid the division by building a function that already knows what value to take when $\Delta u = 0$.

**Proof.** Let $b = g(a)$. For $k$ small enough that $b + k$ lies in the interval where $f$ is defined, set

$$
Q(k) = \frac{f(b+k) - f(b)}{k} \ \text{ if } k \neq 0, \qquad Q(0) = f'(b).
$$

Then $f(b + k) - f(b) = Q(k)\,k$ for every such $k$, including $k = 0$, where both sides are 0. Because $f$ is differentiable at $b$, $Q(k) \to f'(b) = Q(0)$ as $k \to 0$.

Now let $h \neq 0$ and put $k = \Delta u = g(a+h) - g(a)$, so that $g(a+h) = b + k$. Since $g$ is differentiable at $a$ it is continuous there, so $k \to 0$ as $h \to 0$, and in particular $b + k$ is in the domain of $f$ once $h$ is small. Substituting,

$$
\frac{f(g(a+h)) - f(g(a))}{h} = \frac{f(b+k) - f(b)}{h} = Q(k) \cdot \frac{k}{h}.
$$

As $h \to 0$ the second factor $\frac{k}{h} = \frac{g(a+h) - g(a)}{h}$ has limit $g'(a)$. For the first factor, let $\varepsilon > 0$. There is $\eta > 0$ such that $|k| < \eta$ implies $|Q(k) - f'(b)| < \varepsilon$; this holds at $k = 0$ too, where the difference is 0. And there is $\delta > 0$ such that $0 < |h| < \delta$ implies $|k| < \eta$. So $0 < |h| < \delta$ implies $|Q(k) - f'(b)| < \varepsilon$, which says $Q(k) \to f'(b)$ as $h \to 0$. By the limit law for products, the difference quotient has limit $f'(b)\,g'(a)$.

The function $Q$ is the stretch factor of $f$ over a displacement $k$ from $b$, extended by its limiting value when the displacement is zero. Each clause of the theorem was used: differentiability of $g$ gave both the limit of $k/h$ and the fact that $k \to 0$, and differentiability of $f$ *at $b$* gave the limit of $Q$.

That last hypothesis is where the rule can fail to apply. Take $f(u) = |u|$ and $g(x) = x$ at $a = 0$: the composite is $|x|$, which has no derivative at 0, and the theorem does not claim one, since $f$ is not differentiable at $b = 0$. On the other hand, with $f(u) = |u|$ and $g(x) = x^2$ the composite is $x^2$, which is differentiable at 0 even though the hypothesis still fails. When a hypothesis fails the theorem is silent, and you have to go back to the definition.

**Worked example.** **Differentiate $y = \sqrt{x^2 + 9}$ and evaluate the derivative at $x = 4$.**

Identify the chain first. The last operation performed is the square root, so the outer function is $f(u) = \sqrt{u}$ and the inner function is $u = g(x) = x^2 + 9$. Their derivatives are $f'(u) = \frac{1}{2\sqrt{u}}$ (for $u > 0$, proved in [the last lesson](@calculus/power-rule)) and $g'(x) = 2x$. Since $x^2 + 9 > 0$ for every $x$, the chain rule applies everywhere:

$$
\frac{dy}{dx} = \frac{1}{2\sqrt{x^2 + 9}} \cdot 2x = \frac{x}{\sqrt{x^2 + 9}}.
$$

At $x = 4$ the intermediate value is $u = 25$, and the derivative is $\frac{4}{5} = 0.8$.

*Check.* $y(4) = 5$ and $y(4.01) = \sqrt{25.0801} \approx 5.008004$. The difference quotient is about $0.8004$.

**Worked example.** **A spherical balloon is being inflated so that its radius after $t$ seconds is $r = 2 + 0.5t$ centimeters. How fast is its volume increasing when $t = 2$?**

The volume depends on the radius, $V = \frac{4}{3}\pi r^3$, and the radius depends on time, so $V$ is a composite function of $t$ and we want $\frac{dV}{dt}$. By the chain rule,

$$
\frac{dV}{dt} = \frac{dV}{dr} \cdot \frac{dr}{dt} = 4\pi r^2 \cdot 0.5 = 2\pi r^2,
$$

where $\frac{dV}{dr} = \frac{4}{3}\pi \cdot 3r^2$ by the power rule. At $t = 2$ the radius is $r = 3$ cm, so $\frac{dV}{dt} = 18\pi \approx 56.5$ cubic centimeters per second. The units behave like fractions: cm³ per cm, times cm per second.

*Check.* $V(2) = 36\pi \approx 113.10$. At $t = 2.01$, $r = 3.005$ and $V = \frac{4}{3}\pi (3.005)^3 \approx 113.66$. The gain of about $0.57$ over $0.01$ seconds matches a rate near $56.5$.

**Common mistake.** **Forgetting the inner derivative.** The most common chain rule error is to differentiate only the outer function: "the derivative of $(x^2+1)^2$ is $2(x^2+1)$". At $x = 1$ this gives 4, and we computed above that the true value is 8. The answer $2(x^2+1)$ is $\frac{dy}{du}$, the rate of change of $y$ per unit of $u$. But $u$ itself moves $2x$ times as fast as $x$, and that factor has to be included.

[Figure 7, image: The graph of y = (x^2 + 1)^2 with two lines through the point (1, 4). The line of slope 8 from the chain rule is tangent to the curve. The line of slope 4, from forgetting the inner derivative, cuts across it.]

**Common mistake.** **Evaluating the outer derivative at the wrong place.** For $y = (x^2+1)^2$ at $x = 1$, some students compute $f'(1) \cdot g'(1) = 2 \cdot 2 = 4$. The outer function never sees the number 1. Its input is $u = g(1) = 2$, so the factor needed is $f'(2) = 4$. In the three-line picture, the stretch on the lower link happens at the point of the middle line where $u$ actually is.

## Using both rules together

Most functions you will meet are built by several operations, and differentiating them means applying the rules from the outside in: decide what the last operation is, apply its rule, and repeat on the pieces.

**Worked example.** **Differentiate $y = x\sqrt{1 - x^2}$ for $-1 < x < 1$, and find where the derivative is zero.**

The last operation is a multiplication, so start with the product rule, with factors $x$ and $\sqrt{1 - x^2}$. The second factor is a chain with outer function $\sqrt{u}$ and inner function $u = 1 - x^2$, so its derivative is $\frac{1}{2\sqrt{1-x^2}} \cdot (-2x) = \frac{-x}{\sqrt{1-x^2}}$. Then

$$
\frac{dy}{dx} = 1 \cdot \sqrt{1 - x^2} + x \cdot \frac{-x}{\sqrt{1 - x^2}} = \frac{(1 - x^2) - x^2}{\sqrt{1 - x^2}} = \frac{1 - 2x^2}{\sqrt{1 - x^2}}.
$$

This is zero when $1 - 2x^2 = 0$, that is, at $x = \pm\frac{1}{\sqrt{2}} \approx \pm 0.707$.

*Check.* At $x = \frac{1}{\sqrt 2}$, $y = \frac{1}{\sqrt 2} \cdot \frac{1}{\sqrt 2} = 0.5$. Nearby, $y(0.6) = 0.6 \times 0.8 = 0.48$ and $y(0.8) = 0.8 \times 0.6 = 0.48$, both smaller, as they should be on either side of a point where the graph is level at a maximum.

## What to keep

Both rules come from asking what happens to each part of a construction when the input is nudged, and then deciding which effects survive division by $h$. For a product, each factor's change is multiplied by the full size of the other factor, and the two effects add. For a chain, each link multiplies the nudge it receives, and the effects multiply. The proofs showed that everything left over (the corner, and the gap between a stretch factor and its limit) goes to zero.

[The next lesson](@calculus/derivative-of-sine) needs a derivative that no rule so far can produce, that of $\sin\theta$, and finds it by nudging a point on a circle.

**Check yourself.** Let $y = (3x + 1)^4$. What is $\dfrac{dy}{dx}$ at $x = 1$?
Answer: 768 The outer derivative is $4u^3$ at $u = 3 \cdot 1 + 1 = 4$, which is 256, and the inner derivative is 3. Their product is 768.

**Recap.** - The derivative of a product is not the product of the derivatives: for $x \cdot x$ that would give 1 instead of $2x$.
- **Product rule:** if $f$ and $g$ are differentiable at $a$, then $(fg)'(a) = f'(a)g(a) + f(a)g'(a)$. These are the two strips of a rectangle with sides $f$ and $g$; the corner $\Delta f \cdot \Delta g$ vanishes because $g$ is continuous.
- A derivative is a local stretch factor: near $a$, $g$ multiplies small displacements by about $g'(a)$.
- **Chain rule:** if $g$ is differentiable at $a$ and $f$ is differentiable at $g(a)$, then $(f \circ g)'(a) = f'(g(a))\,g'(a)$. In Leibniz form, $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$.
- The outer derivative is evaluated at the inner function's value, and the inner derivative must not be left out.
- "Cancelling $du$" is a way to remember the chain rule. The proof has to deal with the possibility that $\Delta u = 0$.

## Problems

Work these on paper before opening the solutions. The first three are direct applications, the next two ask you to combine or extend the rules, and the last two are proofs.

**Problem 1.** Differentiate $x^3(2x + 5)$ in two ways: with the product rule, and by multiplying out first. Confirm that the answers agree.

**Solution.** Product rule: $3x^2(2x + 5) + x^3 \cdot 2 = 6x^3 + 15x^2 + 2x^3 = 8x^3 + 15x^2$. Multiplying out: $x^3(2x+5) = 2x^4 + 5x^3$, with derivative $8x^3 + 15x^2$. They agree.

**Problem 2.** Differentiate (a) $(x^3 - 1)^5$; (b) $\dfrac{1}{x^2 + 1}$, by treating it as $u^{-1}$ with $u = x^2 + 1$.

**Solution.** (a) Outer function $u^5$, inner function $u = x^3 - 1$: the derivative is $5(x^3 - 1)^4 \cdot 3x^2 = 15x^2(x^3-1)^4$. (b) The outer function $u^{-1}$ has derivative $-u^{-2}$, and the inner derivative is $2x$, so the derivative is $-\dfrac{2x}{(x^2+1)^2}$. The chain rule applies at every $x$ because $x^2 + 1$ is never 0.

**Problem 3.** A rectangle is 5 cm wide and 3 cm tall. Its width is growing at 2 cm/s and its height is shrinking at 1 cm/s. Is its area increasing or decreasing at this moment, and how fast? Describe the two strips.

**Solution.** With width $w$ and height $\ell$, the product rule gives $\frac{d}{dt}(w\ell) = w'\ell + w\ell' = 2 \cdot 3 + 5 \cdot (-1) = 1$ cm²/s. The area is increasing at 1 square centimeter per second. The strip gained on the right is 3 cm tall and thickens at 2 cm/s, adding 6 cm²/s. The strip lost from the top is 5 cm wide and is removed at 1 cm/s, taking away 5 cm²/s.

**Problem 4.** Use the chain rule to show that if $g$ is differentiable at $a$ and $g(a) \neq 0$, then $\dfrac{1}{g}$ has derivative $-\dfrac{g'(a)}{g(a)^2}$ at $a$. Then combine this with the product rule to obtain the **quotient rule**: $\left(\dfrac{f}{g}\right)'(a) = \dfrac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}$.

**Solution.** Write $\frac{1}{g(x)}$ as $r(g(x))$ with outer function $r(u) = u^{-1}$, which is differentiable at every $u \neq 0$ with $r'(u) = -u^{-2}$. Since $g(a) \neq 0$, the chain rule applies and gives $\left(\frac{1}{g}\right)'(a) = -\frac{1}{g(a)^2} \cdot g'(a)$. Now $\frac{f}{g} = f \cdot \frac{1}{g}$, so by the product rule

$$
\left(\frac{f}{g}\right)'(a) = f'(a) \cdot \frac{1}{g(a)} + f(a) \cdot \left(-\frac{g'(a)}{g(a)^2}\right) = \frac{f'(a)g(a) - f(a)g'(a)}{g(a)^2},
$$

after putting both terms over the common denominator $g(a)^2$.

**Problem 5.** Find a rule for the derivative of a product of three functions, $(fgh)'$, by applying the product rule twice. Then set $f = g = h = x$ and explain what each term is in the picture of a growing cube.

**Solution.** Group the product as $(fg) \cdot h$. Then $(fgh)' = (fg)'h + (fg)h' = (f'g + fg')h + fgh' = f'gh + fg'h + fgh'$. Each term differentiates one factor and leaves the other two alone. With $f = g = h = x$ every term is $1 \cdot x \cdot x = x^2$, and the sum is $3x^2$, the derivative of $x^3$. In the growing cube, each term is one slab: the side that is differentiated is the direction in which the slab is thin, and the two untouched factors are the dimensions of its face.

**Problem 6.** Give a new proof of the power rule $(x^n)' = n x^{n-1}$ for every integer $n \ge 1$, by induction on $n$, using the product rule.

**Solution.** For $n = 1$, the function is $x$ and its difference quotient is $\frac{(a + h) - a}{h} = 1$, so its derivative is $1 = 1 \cdot x^0$. Suppose the rule holds for some $n \ge 1$, so that $x^n$ is differentiable with derivative $n x^{n-1}$. Write $x^{n+1} = x \cdot x^n$. Both factors are differentiable, so by the product rule

$$
(x^{n+1})' = 1 \cdot x^n + x \cdot n x^{n-1} = x^n + n x^n = (n+1)x^n,
$$

which is the rule for $n + 1$. By induction it holds for all $n \ge 1$.

**Problem 7.** Let $p$ and $q$ be positive integers and let $y = x^{p/q}$ for $x > 0$, so that $y^q = x^p$. Assuming that $y$ is a differentiable function of $x$, differentiate both sides of $y^q = x^p$ and solve for $\frac{dy}{dx}$. Show that the result is the power rule with exponent $\frac{p}{q}$.

**Solution.** The left side is a chain: the outer function is $u^q$ and the inner function is $y$, so its derivative with respect to $x$ is $q\,y^{q-1}\frac{dy}{dx}$. The right side has derivative $p\,x^{p-1}$. Two equal functions have equal derivatives, so $q\,y^{q-1}\frac{dy}{dx} = p\,x^{p-1}$, and since $y > 0$ we may divide:

$$
\frac{dy}{dx} = \frac{p}{q} \cdot \frac{x^{p-1}}{y^{q-1}}.
$$

Now $y^{q-1} = x^{(p/q)(q-1)} = x^{p - p/q}$, so $\frac{x^{p-1}}{y^{q-1}} = x^{p - 1 - p + p/q} = x^{p/q - 1}$. Hence $\frac{dy}{dx} = \frac{p}{q}\,x^{p/q - 1}$, which is the power rule with $r = \frac{p}{q}$. The argument assumed differentiability of $y$; that assumption is justified by a theorem on inverse functions, which is outside this lesson.
