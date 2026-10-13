# Why x⁰ = 1, and negative and fractional exponents

> Powers of 2 halve as the exponent drops, and one rule, add exponents when you multiply, forces 2⁰ = 1, 2⁻¹ = 1/2 and 2^(1/2) = √2.

Series: Algebra (https://www.monocurl.com/monocurl-essays/algebra/)
Canonical: https://www.monocurl.com/monocurl-essays/algebra/exponents/
Keywords: why is x to the power 0 equal to 1, zero exponent, negative exponents, fractional exponents, rational exponents, laws of exponents, what does a fractional exponent mean

[Figure 1, animation: The powers of 2 as bars. The exponents from -3 to 3 are laid out with question marks over those not yet computed. From 2^3 = 8 each step to the left halves the height: 4, 2, then 2^0 = 1, then 2^{-1} = \frac12, 2^{-2} = \frac14 and 2^{-3} = \frac18. The bars shrink toward zero and never reach it.]

The expression $2^3$ means $2 \times 2 \times 2$, three factors of 2. By the same reading $2^0$ should mean "no factors of 2", and a product with nothing in it sounds as if it ought to be nothing, which is 0. Every textbook and calculator says $2^0 = 1$ instead. It gets stranger: the same sources say $2^{-1} = \frac12$ and $2^{1/2} = \sqrt2$, and nobody can multiply a number by itself minus one times, or half a time.

These look like conventions that someone chose. They are better described as forced moves. There is one rule about exponents that is plainly true for counting numbers, and if we insist that the rule keep working, then $2^0$, $2^{-1}$ and $2^{1/2}$ have no freedom left: each can only be one number.

## The pattern: one step left is one division

Start with what repeated multiplication does give us.

$$
2^1 = 2, \quad 2^2 = 4, \quad 2^3 = 8, \quad 2^4 = 16.
$$

Read the list from left to right and each value is double the one before, because raising the exponent by 1 puts in one more factor of 2. Read it from right to left and each value is half the one before. The second reading does not need to stop at $2^1$.

[Figure 2, steps: The values of 2^n in a row. Each step to the right adds 1 to the exponent and doubles the value, so each step to the left subtracts 1 and halves it. Continuing left from 2^1 = 2 gives 2^0 = 1, 2^{-1} = \frac12 and 2^{-2} = \frac14.]

  - step: The powers we can compute by multiplying: 2, 4, 8 and 16. What belongs in the empty boxes?
  - step: Each step to the right adds 1 to the exponent and multiplies the value by 2.
  - step: So each step to the left subtracts 1 from the exponent and divides the value by 2.
  - step: One more step left: the exponent is 0 and the value is 2 divided by 2, which is 1.
  - step: Keep going. Exponent -1 gives one half, and exponent -2 gives one quarter.
**Pause and try.** Do the same for powers of 3. Starting from $3^3 = 27$, step left three times past $3^1$. What values does the pattern give for $3^0$, $3^{-1}$ and $3^{-2}$?

**Answer.** Each step left divides by 3: $27, 9, 3$, then $3^0 = 1$, $3^{-1} = \frac13$, $3^{-2} = \frac19$. The value at exponent 0 is again 1, because one step left from $3^1 = 3$ is $3 \div 3$.

The pattern suggests $2^0 = 1$, and it suggests that the answer has nothing to do with the base: for any base $a$ other than 0, one step left from $a^1 = a$ is $a \div a = 1$.

You might object that a pattern is only a suggestion. Nothing obliges a sequence to continue the way it began. To turn the suggestion into a reason, we need to know what the pattern is a consequence of.

## The rule behind the pattern

Multiply two powers of 2 and count factors.

$$
2^3 \times 2^2 = (2 \times 2 \times 2) \times (2 \times 2) = 2^5.
$$

Three factors followed by two factors is five factors. Nothing more is going on, and the same count works for any base $a$ and any positive whole numbers $m$ and $n$:

$$
a^m \times a^n = a^{m+n}.
$$

This rule is what "one step right doubles" comes from, since $2^n \times 2^1 = 2^{n+1}$. It is a fact about counting, so for positive whole exponents it is beyond dispute.

Now suppose we want to give $2^0$ a meaning, and we want the rule to remain true when one of the exponents is 0. Then we are committed to $2^0 \times 2^2 = 2^{0+2} = 2^2$. Step through what that says.

[Figure 3, steps: The product 2^m \times 2^2 drawn as a group of m factors next to a group of 2 factors, for m = 3, 2, 1, 0. The exponents add because the factors are counted together. When the first group is empty the product is still 2^2, so the empty group must act as the number 1.]

  - step: Three factors of 2 times two factors of 2 is five factors of 2. The exponents add: 3 + 2 = 5.
  - step: Take one factor out of the first group. Now 2 + 2 = 4 factors, and the product is 16.
  - step: Take out another. One factor times two factors is three factors, and the product is 8.
  - step: Take out the last one. The first group is empty, the second group is untouched, and the product is 4.
  - step: The empty group multiplied by 4 gives 4. Only one number does that, so the empty group is worth 1.
The rule demands $2^0 \times 4 = 4$. Divide both sides by 4 and $2^0 = 1$. The guess $2^0 = 0$ fails this test immediately: it would make $2^0 \times 4 = 0$, not 4.

The picture also repairs the intuition that went wrong at the start. "No factors" does mean that nothing has been multiplied in. But multiplying nothing in leaves a product unchanged, and the number that leaves products unchanged is 1, not 0. Zero is what you get from adding nothing. It helps to read $2^n$ as "start at 1 and multiply by 2, $n$ times". Zero times leaves you at the start.

**Pause and try.** Use the rule $a^m \times a^n = a^{m+n}$ to decide what $2^{-3}$ has to be. (Choose a second exponent that makes the sum something you already know.)

**Answer.** Pair $-3$ with $3$: the rule requires $2^{-3} \times 2^3 = 2^{-3+3} = 2^0 = 1$. So $2^{-3} \times 8 = 1$, and $2^{-3} = \frac18$. This agrees with stepping left three times from 1 in the pattern.

The argument in that answer works in general. If the rule is to hold, then $a^{-n} \times a^n = a^0 = 1$, so $a^{-n}$ must be the number that multiplies $a^n$ to give 1, namely $\frac{1}{a^n}$. A negative exponent has nothing to do with negative numbers. It counts divisions: start at 1 and divide by $a$, $n$ times.

**Definition.** Let $a$ be a real number and $n$ a positive integer. Then $a^n$ is the product of $n$ factors each equal to $a$. If also $a \ne 0$, we define

$$
a^0 = 1 \qquad\text{and}\qquad a^{-n} = \frac{1}{a^n}.
$$

The condition $a \ne 0$ is there because $\frac{1}{0^n}$ would be a division by zero. We have shown that these are the only definitions compatible with the rule. That is half of what we need. The other half is that with these definitions the rule really does hold, in every combination of signs, and that requires a proof.

**Theorem.** Let $a$ be a nonzero real number. For all integers $m$ and $n$, positive, negative or zero,

$$
a^m \times a^n = a^{m+n}.
$$

**Proof.** If $m$ and $n$ are both positive, the left side is $m$ factors of $a$ followed by $n$ factors of $a$, which is $m + n$ factors.

If $m = 0$, the left side is $1 \times a^n = a^n = a^{0+n}$. The case $n = 0$ is the same.

If both are negative, write $m = -p$ and $n = -q$ with $p, q$ positive. Then $a^m a^n = \frac{1}{a^p} \cdot \frac{1}{a^q} = \frac{1}{a^{p+q}} = a^{-(p+q)} = a^{m+n}$, using the positive case in the denominator.

If one is positive and one negative, say $m > 0$ and $n = -q$ with $q > 0$ (the other order is the same since multiplication commutes), the left side is $\frac{a^m}{a^q}$, a fraction with $m$ factors of $a$ on top and $q$ below. Cancel factors in pairs. If $m > q$, all $q$ factors below cancel and $m - q$ remain on top: the result is $a^{m-q}$. If $m = q$, everything cancels and the result is $1 = a^0$. If $m < q$, the top cancels completely and $q - m$ factors remain below: the result is $\frac{1}{a^{q-m}} = a^{-(q-m)}$. In all three cases the exponent is $m - q = m + n$.

## A power of a power

One more counting fact will be needed. What is $(2^5)^3$?

[Figure 4, image: The power (2^5)^3 written out. It is three copies of 2^5 multiplied together, and each copy is a row of five factors of 2, so there are 3 \times 5 = 15 factors in all: (2^5)^3 = 2^{15}.]

It is three rows of five factors, fifteen in all. In general, for positive integers $m$ and $n$, $(a^m)^n$ is $n$ rows of $m$ factors, so

$$
(a^m)^n = a^{mn}.
$$

For $a \ne 0$ this extends to all integers $m$ and $n$ by going through the signs one case at a time with the definitions above. One case shows the pattern, $(a^m)^{-n} = \frac{1}{(a^m)^n} = \frac{1}{a^{mn}} = a^{-mn}$ for positive $m$ and $n$, and we leave the others as an exercise.

## Half a step: what the exponent 1/2 has to be

Now the harder question. A colony of bacteria doubles every hour, so after $t$ hours it is $2^t$ times its present size. After 3 hours, 8 times. At $t = 0$, which is now, 1 times. One hour ago, at $t = -1$, half. The definitions so far match the story at every whole number of hours. But the colony does not grow in hourly jumps. What is it multiplied by in half an hour?

**Pause and try.** Call the half-hour factor $f$. Growing for half an hour and then another half hour is growing for one hour. Write that as an equation for $f$. Is $f = 1.5$, the number halfway between 1 and 2, a solution? Find $f$ to two decimal places by trial.

**Answer.** Two half-hours multiply the colony by $f$ and then by $f$ again, and the total must be a doubling: $f \times f = 2$. The guess $1.5$ gives $1.5 \times 1.5 = 2.25$, too much. Trying smaller values: $1.4^2 = 1.96$ (too little), $1.41^2 = 1.9881$ (too little), $1.42^2 = 2.0164$ (too much). So $f$ is between 1.41 and 1.42. The exact value is $\sqrt2 = 1.41421\ldots$

[Figure 5, steps: Finding the factor for half an hour of growth on a number line from 1 to 2.25. One hour multiplies by 2. Two half-hour steps of 1.5 overshoot to 2.25, two steps of 1.4 fall short at 1.96, and two steps of \sqrt2 \approx 1.414 land exactly on 2.]

  - step: In one hour the colony is multiplied by 2: from size 1 to size 2.
  - step: Guess that half an hour multiplies by 1.5. Two such steps reach 2.25, which is past 2.
  - step: Try 1.4 instead. Two steps reach 1.96, which is short of 2.
  - step: The factor that works is the positive number whose square is 2, about 1.414.
The story and the rule say the same thing. If $2^{1/2}$ is to mean anything and the rule is to survive, then

$$
2^{1/2} \times 2^{1/2} = 2^{\frac12 + \frac12} = 2^1 = 2,
$$

so $2^{1/2}$ is a number whose square is 2. There are two such numbers, $\sqrt2$ and $-\sqrt2$, and we take the positive one, as the colony does. The rule leaves no choice in this either: $2^{1/2} = 2^{1/4} \times 2^{1/4}$ would be the square of a real number, and a square is never negative. The same reasoning with three equal steps gives $2^{1/3} \times 2^{1/3} \times 2^{1/3} = 2$, so $2^{1/3}$ is the cube root of 2, and in general $a^{1/n}$ must be an $n$th root of $a$.

Fractions with other numerators follow from the power-of-a-power rule: $\frac{3}{2} = 3 \times \frac12$, so $2^{3/2}$ should be $(2^{1/2})^3 = (\sqrt2)^3 = 2\sqrt2 \approx 2.828$. That is the colony after an hour and a half: one doubling and one half-step.

To make a definition out of this we need to be sure that the root in question exists and that there is only one positive one.

**Theorem.** Let $a > 0$ be a real number and $n$ a positive integer. There is exactly one real number $b > 0$ with $b^n = a$. It is called the positive $n$th root of $a$ and written $\sqrt[n]{a}$.

**Proof.** *At most one.* If $0 < b < c$, then multiplying the inequality by positive numbers repeatedly gives $b^n < c^n$. So two different positive numbers have different $n$th powers, and at most one of them can have $n$th power $a$.

*At least one.* This half is not proved here. It depends on the fact that the real numbers have no gaps (the completeness of the real numbers) and is usually deduced from the intermediate value theorem in a first course in analysis. The trial-and-error in the exercise above is the idea of the proof: the candidates whose $n$th power is too small and those whose $n$th power is too large close in on a single number from both sides.

**Definition.** Let $a > 0$, let $n$ be a positive integer and $m$ any integer. Then

$$
a^{1/n} = \sqrt[n]{a} \qquad\text{and}\qquad a^{m/n} = \left(a^{1/n}\right)^m.
$$

There is something to check before this definition can be trusted. The fractions $\frac12$ and $\frac24$ are the same number, so $a^{1/2}$ and $a^{2/4}$ had better be the same number too, although the definition computes them differently: one is $\sqrt{a}$, the other is $(\sqrt[4]{a})^2$.

**Theorem.** Let $a > 0$. (i) The value of $a^{m/n}$ depends only on the number $\frac{m}{n}$ and not on how the fraction is written. (ii) For all rational numbers $r$ and $s$, $a^r \times a^s = a^{r+s}$.

**Proof.** (i) Every way of writing a fraction comes from lowest terms by multiplying top and bottom by a positive integer, so it is enough to show $a^{km/kn} = a^{m/n}$ for a positive integer $k$. Let $c = a^{1/n}$ and $d = a^{1/kn}$, so that $c^n = a$ and $d^{kn} = a$. The number $d^k$ is positive and $(d^k)^n = d^{kn} = a$. By the uniqueness of positive $n$th roots, $d^k = c$. Therefore

$$
a^{km/kn} = d^{km} = (d^k)^m = c^m = a^{m/n}.
$$

(ii) Write $r$ and $s$ over a common denominator, $r = \frac{p}{n}$ and $s = \frac{q}{n}$, which is allowed by (i). With $c = a^{1/n}$,

$$
a^r \times a^s = c^p \times c^q = c^{p+q} = a^{(p+q)/n} = a^{r+s},
$$

where the middle step is the theorem for integer exponents.

The other two laws you may know, $(a^r)^s = a^{rs}$ and $(ab)^r = a^r b^r$ for positive $a$, $b$ and rational $r$, $s$, are true as well. We do not prove them here; the proofs run in the same style, by reducing to integer exponents and using the uniqueness of roots, and Problem 8 does one case.

**Key idea.** Read $a^x$ as "start at 1 and take $x$ steps of multiplying by $a$". Zero steps leaves 1. A negative number of steps divides. Half a step is the factor that, applied twice, multiplies by $a$. All of these are forced by the single rule $a^x \times a^y = a^{x+y}$.

## The curve through all the points

We now have a value of $2^x$ for every rational $x$. Plot them, starting with whole numbers and then adding halves, quarters and eighths.

[Figure 6, animation: The points (x, 2^x) for whole-number x from -3 to 3, then for multiples of \frac12, then \frac14, then \frac18. The new points fall between the old ones along one smooth rising curve, the graph of y = 2^x.]

The points do not scatter. In the picture each new batch lands between its neighbors, and together they trace a curve that rises from left to right, passes through $(0, 1)$, and flattens toward the horizontal axis on the left without touching it, since no power of 2 is zero or negative.

That curve has points above irrational values of $x$ as well, such as $x = \sqrt2$ or $x = \pi$, where no fraction is available. The value there is defined as the number that the values at nearby rational exponents close in on: $2^{1.4}, 2^{1.41}, 2^{1.414}, \dots$ approach a single number, about $2.665$, and that number is called $2^{\sqrt2}$. Showing that this always works, and that the rule $a^x a^y = a^{x+y}$ survives, again uses the completeness of the real numbers, and we take it on trust here.

## Worked examples

**Worked example.** **Evaluate $8^{2/3}$ and $8^{-2/3}$.**

The denominator of the exponent names a root and the numerator a power, and the definition takes the root first: $8^{1/3} = \sqrt[3]{8} = 2$, because $2^3 = 8$. Then $8^{2/3} = 2^2 = 4$.

For the negative exponent, $8^{-2/3} = (8^{1/3})^{-2} = 2^{-2} = \frac14$.

Check with the rule: $8^{2/3} \times 8^{-2/3}$ should be $8^0 = 1$, and $4 \times \frac14 = 1$.

**Worked example.** **Simplify $\dfrac{x^3 \cdot x^{-5}}{x^{-4}}$ for $x \ne 0$.**

The numerator is a product of powers of the same base, so the exponents add: $x^{3 + (-5)} = x^{-2}$. Dividing by $x^{-4}$ is multiplying by its reciprocal, and the reciprocal of $x^{-4} = \frac{1}{x^4}$ is $x^4$. So the expression is $x^{-2} \cdot x^4 = x^2$.

Check with $x = 2$: $\frac{8 \times \frac{1}{32}}{\frac{1}{16}} = \frac14 \times 16 = 4 = 2^2$.

**Worked example.** **A colony that doubles every 3 hours.** A culture contains 500 bacteria now and doubles every 3 hours. Write a formula for its size $t$ hours from now, and find the size 3 hours ago, in an hour and a half, and in four and a half hours.

Each 3 hours is one doubling, so $t$ hours is $\frac{t}{3}$ doublings, and the size is $N(t) = 500 \times 2^{t/3}$.

Three hours ago, $t = -3$: $N = 500 \times 2^{-1} = 250$. A negative time gives a negative exponent, which divides.

At $t = 1.5$: $N = 500 \times 2^{1/2} = 500\sqrt2 \approx 707$. This is less than 750, the value halfway between 500 and 1000, because the colony grows faster in the second half of each doubling than in the first.

At $t = 4.5$: $N = 500 \times 2^{3/2} = 500 \times 2\sqrt2 \approx 1414$, which is double the value at $t = 1.5$, as it must be 3 hours later.

[Figure 7, image: The size N(t) = 500 \times 2^{t/3} of a colony that doubles every 3 hours. Marked points: 250 three hours ago, 500 now, about 707 after 1.5 hours, 1000 after 3 hours, about 1414 after 4.5 hours and 2000 after 6 hours.]

## Where the rules stop

Each extension came with a condition, and each condition is needed.

**Zero as a base.** $0^n = 0$ for every positive integer $n$, but $0^{-1}$ would be $\frac10$, which is undefined. And $0^0$ is pulled two ways: the pattern $a^0 = 1$ says 1, and the pattern $0^n = 0$ says 0. The argument that forced $a^0 = 1$ divided by a power of $a$, which is not possible when $a = 0$, so the rule gives no verdict. In algebra and in counting problems $0^0$ is taken to be 1 by convention, because formulas then come out right: a polynomial's constant term $c$ is written $c\,x^0$, and that should still equal $c$ at $x = 0$. In calculus $0^0$ is left undefined, because expressions in which the base and the exponent both shrink toward 0 can approach different values depending on how they shrink.

**Negative bases.** Integer powers of negative numbers are fine: $(-2)^3 = -8$ and $(-2)^{-2} = \frac14$. Fractional powers are not. No real number squares to $-4$, so $(-4)^{1/2}$ is not a real number. Even where a root exists the rules break. The cube root of $-8$ is $-2$, so one would like $(-8)^{1/3} = -2$. But $\frac13 = \frac26$, and computing $(-8)^{2/6}$ as the sixth root of $(-8)^2 = 64$ gives $+2$, while the definition's own order, the sixth root first, has nothing to work with, since no real number has sixth power $-8$. Two ways of writing the same exponent give different answers, which is exactly what part (i) of the theorem rules out for positive bases. This is why fractional exponents are defined only for $a > 0$.

## Common mistakes

**Common mistake.** **A negative exponent gives a negative number.** A student writes $2^{-3} = -8$, or $2^{-3} = -6$.

The minus sign belongs to the exponent, which counts steps, and a negative count of multiplications is a count of divisions: $2^{-3} = \frac{1}{2^3} = \frac18$. A power of a positive number is always positive, however negative the exponent. The check is the rule itself: $2^{-3} \times 2^3$ must be $2^0 = 1$, and $-8 \times 8$ is not 1.

**Common mistake.** **Multiplying the base by a fractional exponent.** A student writes $16^{1/2} = 8$, or $9^{3/2} = 13.5$.

These are $16 \times \frac12$ and $9 \times \frac32$. An exponent is never a multiplier of the base. $16^{1/2}$ is the positive number whose square is 16, which is 4, and $9^{3/2} = (9^{1/2})^3 = 3^3 = 27$. To test an answer for $16^{1/2}$, square it: $8^2 = 64$, not 16.

## Stepping back

The difficulty at the start was that "multiply $a$ by itself $n$ times" has no meaning unless $n$ is a positive whole number. We did not look for a cleverer reading of that phrase. We found the one property of powers that everything else depends on, $a^m \times a^n = a^{m+n}$, and asked what each new kind of exponent would have to be for that property to survive. Each time there was only one candidate, and each time we then proved that the candidate works.

This way of extending an idea, keep the law and let it tell you the definition, is one of the most common moves in mathematics. It is how [the product of two negative numbers](@algebra/negative-times-negative) is decided, and it is how exponents are extended once more, to complex numbers, in [the lesson on Euler's formula](@precalculus/eulers-formula). The rule itself turns multiplication into addition of exponents, which is the idea behind [logarithms](@precalculus/logarithms).

**Check yourself.** What is $9^{-1/2}$?
Answer: $\frac13$ $9^{1/2} = 3$, and the negative exponent takes the reciprocal: $9^{-1/2} = \frac13$. Check: $\frac13 \times \frac13 = \frac19 = 9^{-1}$.

**Recap.** - For positive integers, $a^m \times a^n = a^{m+n}$ because factors are counted together, and $(a^m)^n = a^{mn}$ because they are counted in rows.
- Keeping the first rule true forces $a^0 = 1$ and $a^{-n} = \frac{1}{a^n}$ for $a \ne 0$. An empty product is 1.
- It also forces $a^{1/n}$ to be an $n$th root of $a$. For $a > 0$ we take the positive root, and $a^{m/n} = (a^{1/n})^m$.
- With these definitions the rule holds for all rational exponents when $a > 0$, and the value of $a^{m/n}$ does not depend on how the fraction is written.
- The values of $2^x$ at rational $x$ lie on one smooth rising curve, which also defines $2^x$ at irrational $x$.
- $0^0$ is not settled by the rule, negative exponents need $a \ne 0$, and fractional exponents need $a > 0$.

## Problems

**Problem 1.** Evaluate: (a) $5^0$, (b) $2^{-4}$, (c) $\left(\frac13\right)^{-2}$, (d) $10^{-3}$.

**Solution.** (a) $5^0 = 1$.

(b) $2^{-4} = \frac{1}{2^4} = \frac{1}{16}$.

(c) $\left(\frac13\right)^{-2} = \frac{1}{(1/3)^2} = \frac{1}{1/9} = 9$. A negative exponent on a fraction turns it upside down.

(d) $10^{-3} = \frac{1}{1000} = 0.001$.

**Problem 2.** Evaluate: (a) $16^{1/2}$, (b) $27^{2/3}$, (c) $16^{-3/4}$, (d) $32^{0.4}$.

**Solution.** (a) The positive number whose square is 16 is 4.

(b) $27^{1/3} = 3$ because $3^3 = 27$, so $27^{2/3} = 3^2 = 9$.

(c) $16^{1/4} = 2$ because $2^4 = 16$, so $16^{-3/4} = 2^{-3} = \frac18$.

(d) $0.4 = \frac25$, and $32^{1/5} = 2$ because $2^5 = 32$. So $32^{0.4} = 2^2 = 4$.

**Problem 3.** Simplify, writing the answer without negative exponents: (a) $(x^2y^{-3})(x^{-5}y)$ for nonzero $x, y$; (b) $(a^4)^{1/2} \cdot a^{-3}$ for $a > 0$.

**Solution.** (a) Collect the powers of each base and add exponents: $x^{2 + (-5)}\,y^{-3 + 1} = x^{-3}y^{-2} = \dfrac{1}{x^3y^2}$.

(b) $(a^4)^{1/2}$ is the positive number whose square is $a^4$, and that is $a^2$, since $a^2 > 0$ and $(a^2)^2 = a^4$. Then $a^2 \cdot a^{-3} = a^{-1} = \dfrac1a$.

**Problem 4.** Our way of writing numbers uses powers of ten. (a) Continue the pattern of place values $10^2, 10^1, \dots$ two more steps and use it to write $4.07$ as a sum of digits times powers of 10. (b) Write $0.00032$ in the form $3.2 \times 10^n$.

**Solution.** (a) Each place is worth a tenth of the place to its left: $10^2 = 100$, $10^1 = 10$, $10^0 = 1$, $10^{-1} = \frac{1}{10}$, $10^{-2} = \frac{1}{100}$. So the units place is the $10^0$ place, and

$$
4.07 = 4 \times 10^0 + 0 \times 10^{-1} + 7 \times 10^{-2}.
$$

(b) Moving the decimal point one place to the left divides by 10, which lowers the exponent by 1. To get from $3.2$ to $0.00032$ the point moves 4 places left, so $0.00032 = 3.2 \times 10^{-4}$. Check: $3.2 \times \frac{1}{10000} = 0.00032$.

**Problem 5.** A dose of a medicine leaves 80 mg in the bloodstream now, and the amount halves every 6 hours. (a) Write a formula for the amount $A(t)$ in mg after $t$ hours. (b) Find the amount after 12 hours and after 3 hours. (c) What does the formula give for $t = -6$, and what does that mean?

**Solution.** (a) Each 6 hours multiplies the amount by $\frac12 = 2^{-1}$, and $t$ hours is $\frac{t}{6}$ such periods: $A(t) = 80 \times 2^{-t/6}$.

(b) $A(12) = 80 \times 2^{-2} = 20$ mg. $A(3) = 80 \times 2^{-1/2} = \frac{80}{\sqrt2} \approx 56.6$ mg. This is less than 60, the value halfway between 80 and 40, because the amount falls faster early in each halving period.

(c) $A(-6) = 80 \times 2^{1} = 160$ mg. Six hours ago there was twice as much, provided the dose had already been given by then.

**Problem 6.** Without a calculator, decide which is larger: (a) $2^{3/2}$ or $3$; (b) $2^{1/2}$ or $3^{1/3}$.

**Solution.** For positive numbers, the larger number has the larger $n$th power (this was the "at most one" step in the proof about roots). So compare suitable powers.

(a) Square both: $(2^{3/2})^2 = 2^3 = 8$ and $3^2 = 9$. Since $8 < 9$, $2^{3/2} < 3$. (Indeed $2^{3/2} = 2\sqrt2 \approx 2.83$.)

(b) Raise both to the 6th power, which clears both roots: $(2^{1/2})^6 = 2^3 = 8$ and $(3^{1/3})^6 = 3^2 = 9$. Since $8 < 9$, $2^{1/2} < 3^{1/3}$. (They are about $1.414$ and $1.442$.)

**Problem 7.** Find the error in this argument. "$-1 = (-1)^1 = (-1)^{2/2} = \left((-1)^2\right)^{1/2} = 1^{1/2} = 1$, so $-1 = 1$."

**Solution.** The first two equalities are harmless, and so is the last: $1^{1/2} = 1$. The false step is $(-1)^{2/2} = \left((-1)^2\right)^{1/2}$. It uses the law $(a^r)^s = a^{rs}$ with $a = -1$, $r = 2$ and $s = \frac12$, and it rewrites the exponent $1$ as $\frac22$. Both the law for fractional exponents and the fact that the value does not depend on how the fraction is written were established only for a positive base, and their proofs used the uniqueness of the *positive* root. For $a = -1$ the number $(-1)^2 = 1$ has two square roots, $1$ and $-1$, and the step silently replaces one by the other.

**Problem 8.** Let $a$ and $b$ be positive real numbers and $n$ a positive integer. (a) Prove that $(ab)^{1/n} = a^{1/n}\,b^{1/n}$. (b) Use this to write $\sqrt{12}$ as a whole number times $\sqrt3$.

**Solution.** (a) Let $c = a^{1/n}$ and $d = b^{1/n}$, so $c$ and $d$ are positive, $c^n = a$ and $d^n = b$. The product $cd$ is positive, and its $n$th power is $n$ factors of $cd$, which can be reordered as $n$ factors of $c$ times $n$ factors of $d$:

$$
(cd)^n = c^n d^n = ab.
$$

So $cd$ is a positive number whose $n$th power is $ab$. There is only one such number, and by definition it is $(ab)^{1/n}$. Hence $(ab)^{1/n} = cd = a^{1/n}b^{1/n}$.

(b) $\sqrt{12} = (4 \times 3)^{1/2} = 4^{1/2} \times 3^{1/2} = 2\sqrt3$. Check by squaring: $(2\sqrt3)^2 = 4 \times 3 = 12$.
