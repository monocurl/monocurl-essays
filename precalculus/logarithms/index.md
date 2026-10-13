# What a logarithm is: turning multiplication into addition

> A logarithm answers "what exponent gives this number?". Because exponents add when powers multiply, logarithms turn every product into a sum.

Series: Precalculus (https://www.monocurl.com/monocurl-essays/precalculus/)
Canonical: https://www.monocurl.com/monocurl-essays/precalculus/logarithms/
Keywords: what is a logarithm, logarithm definition, log rules proof, change of base formula, log as inverse of exponential, slide rule, logarithmic scale, decibels

[Figure 1, animation: A slide rule: two rulers on which each number is printed at a distance proportional to its logarithm. Sliding the top ruler until its 1 sits over 2 puts every top number over its double; sliding to 4 puts 5 over 20.]

Light travels 299,792 kilometers in a second, and a year has 31,557,600 seconds. To find the length of a light-year you have to multiply those two numbers. For an astronomer in 1620, a product of numbers that long meant most of a page of long multiplication, with every digit a chance to slip. Kepler's work on the orbit of Mars required an enormous amount of such multiplication.

Yet by 1630 astronomers were doing such a multiplication in about a minute, without multiplying anything. They looked up two numbers in a book, added them, and looked up the sum. The book was a table of logarithms. This lesson explains what was in the book, why adding could do the work of multiplying, and why the same idea is now built into the way we measure earthquakes and sound.

## Multiplying by adding

The trick is easiest to see on numbers chosen to make it work. Here are the powers of 2.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 |

Suppose you want $32 \times 128$. Both numbers are in the bottom row.

[Figure 2, steps: Multiplying 32 \times 128 with a table of powers of 2. Look up the two exponents, add them, and look up the sum.]

  - step: Find 32 and 128 in the bottom row. Above them are the exponents 5 and 7.
  - step: Add the exponents: 5 + 7 = 12.
  - step: Look up 12 in the top row. Below it is 4096, so 32 × 128 = 4096, and nothing was multiplied.
The reason is the first law of exponents. $2^5$ is five 2s multiplied together and $2^7$ is seven, so their product is twelve 2s:

$$
2^5 \times 2^7 = 2^{5 + 7} = 2^{12}.
$$

In the top row of the table, multiplication has become addition. Division becomes subtraction in the same way, since $2^m \div 2^n = 2^{m - n}$.

**Pause and try.** Use the table, and no multiplication, to find $64 \times 16$, then $4096 \div 128$, then $8^4$.

**Answer.** $64 \times 16 = 2^6 \times 2^4 = 2^{10} = 1024$. $4096 \div 128 = 2^{12} \div 2^7 = 2^5 = 32$. For the last one, $8 = 2^3$, so $8^4 = 2^3 \times 2^3 \times 2^3 \times 2^3 = 2^{12} = 4096$: raising to the fourth power multiplied the exponent by 4.

## The exponent for a number that is not in the table

The method has an obvious weakness: it only handles numbers in the bottom row. To multiply $3 \times 5$ this way we would need exponents $x$ and $y$ with $2^x = 3$ and $2^y = 5$, and no whole number will do, because $2^1 = 2$ is too small and $2^2 = 4$ is too big.

So we are stuck unless exponents can fall between whole numbers. They can. [The lesson on exponents](@algebra/exponents) showed that keeping the law $2^x \times 2^y = 2^{x+y}$ true forces $2^{1/2} = \sqrt2$ and, in general, $2^{m/n} = \sqrt[n]{2^m}$. Let us hunt for the exponent of 3. Halfway between 1 and 2 we get $2^{1.5} = 2\sqrt2 \approx 2.828$, which is too small. Then $2^{1.75} \approx 3.364$ is too big, $2^{1.625} \approx 3.084$ is too big, and $2^{1.5625} \approx 2.954$ is too small. The exponent we want is trapped between $1.5625$ and $1.625$, and each further halving traps it more tightly.

**Pause and try.** The next halving point is $1.59375$, and $2^{1.59375} \approx 3.018$. Between which two of the exponents tried so far does the answer now lie? How many more halvings until the interval is shorter than $0.01$?

**Answer.** $3.018$ is too big, so the exponent lies between $1.5625$ and $1.59375$, an interval of length $0.03125$. Two more halvings give lengths $0.0156$ and then $0.0078 < 0.01$. Carried further, the search gives $1.585$ to three decimal places.

On the graph of $y = 2^x$, the hunt is a search for the place where the curve reaches height 3.

[Figure 3, animation: The graph of y = 2^x read backwards. Choose a height y on the vertical axis, go across to the curve and down to the horizontal axis: the number you land on is the exponent x with 2^x = y. The curve rises through every positive height exactly once.]

Two things have to be true for this reading-backwards to define a number. Some exponent must work, and only one must work. Here is the precise statement, for any base.

**Theorem.** Let $b$ be a positive real number with $b \neq 1$. For every real number $y > 0$ there is exactly one real number $x$ such that $b^x = y$.

Half of this theorem is proved here and half is cited.

**Proof.** *At most one (shown for $b > 1$).* It is enough to show that a larger exponent gives a larger power. First, $b^r > 1$ for every rational $r = \frac{m}{n} > 0$: the root $\sqrt[n]{b}$ is greater than 1, since a positive number that is at most 1 has an $n$th power that is at most 1, and so $b^r = \left(\sqrt[n]{b}\right)^m > 1$. Now if $s < t$ are rational, $b^t = b^s \times b^{t - s} > b^s$. Real powers are defined as limits of rational ones, and a limit keeps a weak inequality $\le$ (this belongs to the construction of real powers, which we are citing). So for real numbers $x < y$, choose rational numbers $s$ and $t$ with $x < s < t < y$; then $b^x \le b^s < b^t \le b^y$. Two different exponents therefore never give the same power. For $0 < b < 1$, apply the argument to $\frac1b > 1$: since $b^x = \left(\frac1b\right)^{-x}$, a larger exponent now gives a smaller power, and again different exponents give different powers.

*At least one (cited).* The function $b^x$ is continuous, it exceeds any given number when $x$ is large enough, and it drops below any positive number when $x$ is negative enough (for $b > 1$; reversed for $b < 1$). The **intermediate value theorem** says that a continuous function on an interval takes every value between any two of its values. So $b^x$ takes the value $y$. That theorem is proved in real analysis from the fact that the number line has no gaps, and our halving search is the proof in miniature.

Both clauses matter. In the language of [functions](@precalculus/functions-and-transformations), "at most one" says $b^x$ is one-to-one, and "at least one" says its range is all of the positive numbers. Together they say that swapping inputs and outputs gives a function, defined on the positive numbers. That function gets a name.

**Definition.** Let $b > 0$, $b \neq 1$, and let $y > 0$. The **logarithm of $y$ to base $b$**, written $\log_b y$, is the unique real number $x$ such that $b^x = y$. In symbols,

$$
\log_b y = x \quad \text{means exactly} \quad b^x = y.
$$

So $\log_2 8 = 3$ because $2^3 = 8$, $\log_2 \frac12 = -1$ because $2^{-1} = \frac12$, and $\log_2 3 = 1.58496\ldots$ is the number we were hunting. A logarithm is an exponent. The definition says at once that the two operations undo each other:

$$
b^{\log_b y} = y \ \text{ for } y > 0, \qquad \log_b (b^x) = x \ \text{ for all real } x.
$$

The exclusions are forced. Base 1 is useless because $1^x = 1$ for every $x$: the equation $1^x = 5$ has no solution and $1^x = 1$ has too many. And since $b^x$ is always positive, $\log_b 0$ and $\log_b(-4)$ do not exist.

[Figure 4, image: The graphs of y = 2^x and y = \log_2 x. Each point of one is a point of the other with its coordinates swapped, so the two curves are mirror images in the dashed line y = x.]

The mirror image carries every feature of the exponential across. The exponential has domain all real numbers and range $y > 0$, so the logarithm has domain $x > 0$ and range all real numbers. The exponential passes through $(0, 1)$ and $(1, b)$, so $\log_b 1 = 0$ and $\log_b b = 1$ for every base. And where $2^x$ doubles with each step of 1 to the right, $\log_2 x$ needs its input doubled to rise by 1, which makes it one of the slowest-growing functions you will meet: $\log_2 x$ does not reach 20 until $x$ passes a million.

## The three laws

The table of powers of 2 can now be read as a table of logarithms: the top row is $\log_2$ of the bottom row. Our multiplication of $32 \times 128$ went $\log_2 32 + \log_2 128 = 5 + 7 = 12 = \log_2 4096$.

**Pause and try.** From the table, compute $\log_2 8 + \log_2 16$ and compare with $\log_2(8 \times 16)$. Then compare $\log_2 4096 - \log_2 64$ with $\log_2(4096 \div 64)$, and $4 \times \log_2 8$ with $\log_2(8^4)$. State the three rules you are seeing.

**Answer.** $3 + 4 = 7$ and $8 \times 16 = 128 = 2^7$. $12 - 6 = 6$ and $4096 \div 64 = 64 = 2^6$. $4 \times 3 = 12$ and $8^4 = 4096 = 2^{12}$. The log of a product is the sum of the logs, the log of a quotient is the difference, and the log of a power is the exponent times the log.

These are the laws of exponents seen from the other side. Recall them for a base $b > 0$ and all real $x$, $y$, $r$: $b^x b^y = b^{x+y}$, $b^x / b^y = b^{x-y}$ and $(b^x)^r = b^{xr}$ (proved for rational exponents in [the exponents lesson](@algebra/exponents), and carried to real exponents by the limiting construction mentioned there).

**Theorem.** Let $b > 0$ with $b \neq 1$, let $u$ and $v$ be positive real numbers, and let $r$ be any real number. Then

- $\log_b(uv) = \log_b u + \log_b v$,
- $\log_b\!\left(\dfrac{u}{v}\right) = \log_b u - \log_b v$,
- $\log_b(u^r) = r \log_b u$.

**Proof.** Let $x = \log_b u$ and $y = \log_b v$. By the definition of the logarithm this means $u = b^x$ and $v = b^y$.

- $uv = b^x b^y = b^{x + y}$. So $x + y$ is an exponent that turns $b$ into $uv$, and by definition $\log_b(uv)$ is the only such exponent. Hence $\log_b(uv) = x + y$.
- $\frac{u}{v} = \frac{b^x}{b^y} = b^{x - y}$, so in the same way $\log_b\frac{u}{v} = x - y$.
- $u^r = (b^x)^r = b^{xr}$, so $\log_b(u^r) = xr = r\log_b u$.

Each line used uniqueness: to show that a number is $\log_b$ of something, it is enough to check that $b$ raised to it gives that something.

**Key idea.** $\log_b y$ is the exponent that turns $b$ into $y$. Exponents add when powers are multiplied, so logarithms turn multiplication into addition, division into subtraction, and powers into multiplication.

**Worked example.** **Evaluate $\log_9 27$, and write $\log_2 \frac{x^3}{8}$ in terms of $\log_2 x$ for $x > 0$.**

For the first we need the exponent $t$ with $9^t = 27$. Both numbers are powers of 3, so write $9^t = 3^{2t}$ and $27 = 3^3$. Then $2t = 3$ and $t = \frac32$. *Check:* $9^{3/2} = \left(\sqrt9\right)^3 = 27$.

For the second, law 2 and then law 3 give $\log_2 \frac{x^3}{8} = \log_2 (x^3) - \log_2 8 = 3\log_2 x - 3$. *Check at $x = 4$:* the left side is $\log_2 \frac{64}{8} = \log_2 8 = 3$ and the right side is $3 \cdot 2 - 3 = 3$.

## Changing the base

A calculator has two logarithm keys: `log`, which is $\log_{10}$, and `ln`, which is $\log_e$ for the number $e = 2.71828\ldots$ from [the lesson on compound interest](@precalculus/exponential-growth-and-e). There is no key for $\log_2$. We are stuck on $\log_2 3$ again unless one base can be converted to another.

Law 3 does it. Let $x = \log_2 3$, so $2^x = 3$. Take $\log_{10}$ of both sides: $\log_{10}(2^x) = x \log_{10} 2$, so $x \log_{10} 2 = \log_{10} 3$, and

$$
\log_2 3 = \frac{\log_{10} 3}{\log_{10} 2} \approx \frac{0.47712}{0.30103} \approx 1.58496.
$$

**Theorem.** **(Change of base.)** Let $b$ and $c$ be positive numbers different from 1, and let $u > 0$. Then

$$
\log_b u = \frac{\log_c u}{\log_c b}.
$$

**Proof.** Let $x = \log_b u$, so $b^x = u$. Two equal positive numbers have equal logarithms, so $\log_c(b^x) = \log_c u$, and by law 3 the left side is $x \log_c b$. Because $b \neq 1$ and $\log_c$ is one-to-one with $\log_c 1 = 0$, we have $\log_c b \neq 0$ and may divide: $x = \frac{\log_c u}{\log_c b}$.

The denominator $\log_c b$ does not depend on $u$. So $\log_b u$ is a fixed multiple of $\log_c u$: for example $\log_2 u = 3.3219 \times \log_{10} u$ for every $u > 0$, since $\frac{1}{\log_{10} 2} \approx 3.3219$. In terms of graphs, the logarithm functions with base above 1 are vertical stretches of one another (a base below 1 adds a flip in the $x$ axis, as Problem 5 shows).

[Figure 5, image: The graphs of \log_2 x, \ln x and \log_{10} x. At every x the three heights are in the same proportions, here marked at x = 4 and x = 10: each curve is a vertical stretch of the others.]

Since they differ only by a constant factor, which base to use is a matter of convenience. Base 2 suits doublings and computer memory, base $e$ suits calculus, and base 10 suits hand calculation in decimal notation, where it is called the **common logarithm**. From here on, $\log$ with no base means $\log_{10}$.

**Worked example.** **Money grows by 7% a year, compounded yearly. How long until it doubles?**

After $t$ years the money has been multiplied by $1.07^t$, so we need $1.07^t = 2$. The unknown is an exponent, and a logarithm is the tool that brings an exponent down: take $\log$ of both sides and use law 3 to get $t \log 1.07 = \log 2$. So

$$
t = \frac{\log 2}{\log 1.07} \approx \frac{0.30103}{0.029384} \approx 10.24 \text{ years}.
$$

This is $\log_{1.07} 2$, computed by change of base. *Check:* $1.07^{10} \approx 1.967$ and $1.07^{11} \approx 2.105$, so the doubling does fall between years 10 and 11.

## Tables and the slide rule

Now the astronomers' book. It listed $\log u$ for every $u$ from 1 to 10 in small steps. That range is enough, because any positive number is a number between 1 and 10 times a power of 10, and law 1 handles the power of 10: $\log 299{,}792 = \log(2.99792 \times 10^5) = \log 2.99792 + 5$.

**Worked example.** **The length of a light-year, with a table of logarithms.**

We want $299{,}792 \times 31{,}557{,}600$. From the table, to five places, $\log 2.99792 = 0.47682$ and $\log 3.15576 = 0.49910$, so the two logarithms are $5.47682$ and $7.49910$. Add them:

$$
5.47682 + 7.49910 = 12.97592.
$$

Now go backwards: we need the number whose logarithm is $12.97592$. The table gives $0.97592$ as the logarithm of about $9.4606$, and the 12 contributes a factor $10^{12}$. The product is about $9.4606 \times 10^{12}$ kilometers.

*Check.* Long multiplication gives $9{,}460{,}716{,}019{,}200$. The table's answer is right to four figures, which is all a five-place table promises. For more figures, astronomers used seven-place and ten-place tables.

John Napier published the first such table in 1614, and Henry Briggs recomputed it in base 10 soon after. Within a decade someone had the idea of doing the addition mechanically, by placing lengths end to end.

[Figure 6, steps: Why a slide rule multiplies. On each ruler the number u is printed at distance \log u from the 1, taking the length from 1 to 10 as the unit. Placing the length \log 3 after the length \log 2 reaches the mark at \log 2 + \log 3 = \log 6.]

  - step: The 2 is printed at distance log 2, about 0.301, from the 1, and the 3 at distance log 3, about 0.477.
  - step: Slide the top ruler until its 1 is over the 2 below. The two lengths now lie end to end.
  - step: The 3 on top is now at distance log 2 + log 3 along the bottom ruler, about 0.778, and log 2 + log 3 = log 6. Under the 3 you read 6.
That is the slide rule in the animation at the top of the page. Engineers carried one until electronic calculators replaced it in the 1970s.

## Logarithmic scales

Calculators ended the use of logarithms for arithmetic and left their other use untouched. Some quantities range over so many powers of 10 that an ordinary axis cannot show them. The faintest sound you can hear and ordinary speech differ in intensity (power per unit area) by a factor of about a million.

[Figure 7, image: Five sounds placed by intensity, measured in multiples of the faintest audible sound. On a linear axis four of them are crushed against zero. On a logarithmic axis, where each step to the right multiplies the intensity by 10, all five are spread out.]

Placing a quantity on a logarithmic axis means plotting its logarithm, so equal distances stand for equal ratios. The **decibel** scale for sound is exactly this: a sound of intensity $I$ has level $10 \log\frac{I}{I_0}$ decibels, where $I_0$ is the faintest audible intensity. Speech, at a million times $I_0$, is $10 \log 10^6 = 60$ dB. Earthquake magnitude works the same way. It is the logarithm of the ground motion recorded by a standard seismograph, so one more unit of magnitude means ten times the shaking, and a magnitude 7 earthquake moves the ground 1000 times as much as a magnitude 4.

**Pause and try.** One machine produces 80 dB. By law 1, what is the level of two such machines running together? (The intensities add.) Guess before computing: 160 dB, or something else?

**Answer.** Two machines give intensity $2I$, so the level is $10\log\frac{2I}{I_0} = 10\log 2 + 10\log\frac{I}{I_0} \approx 3 + 80 = 83$ dB. Doubling the intensity adds $10 \log 2 \approx 3.01$ dB whatever the starting level. Reaching 160 dB would take $10^8$ machines.

## Where the laws stop

The laws convert products, quotients and powers. They say nothing about sums.

**Common mistake.** **Writing $\log(u + v) = \log u + \log v$.** The symbol $\log$ looks like something that multiplies out over a bracket, but it is a function, and it converts products, not sums. Test with numbers from the table: $\log_2(4 + 4) = \log_2 8 = 3$, while $\log_2 4 + \log_2 4 = 4$, which is $\log_2(4 \times 4)$. There is no simplification of $\log(u + v)$.

**Common mistake.** **Confusing $\log(u^2)$ with $(\log u)^2$.** Law 3 moves an exponent that is inside the logarithm: $\log(1000^2) = 2 \log 1000 = 6$. The square of the logarithm is a different number, $(\log 1000)^2 = 9$.

The hypotheses $u > 0$, $v > 0$ also matter. The expression $\log(x^2)$ makes sense for $x = -3$, where it equals $\log 9$, but $2 \log x$ does not, since $-3$ has no logarithm. Law 3 applies only where $\log x$ exists; the statement valid for every $x \neq 0$ is $\log(x^2) = 2\log|x|$. In the same way $\log\bigl((-2)(-5)\bigr) = \log 10 = 1$ exists while $\log(-2) + \log(-5)$ does not.

Stepping back: the hard step was the first one, deciding to call "the exponent that gives $y$" a number in its own right and checking that it is one, which needed the exponential to hit every positive value exactly once. After that, every property of logarithms was a property of exponents read in the other direction. Inverting a function and reading its laws backwards is a move you will make again, with square roots, with inverse trigonometric functions, and soon with $e^x$ and $\ln x$ in calculus.

**Check yourself.** Which of these equals $\log(1000x)$ for every $x > 0$? (Here $\log$ is base 10.)
Answer: $3 + \log x$ By law 1, $\log(1000x) = \log 1000 + \log x$, and $\log 1000 = 3$ because $10^3 = 1000$.

**Recap.** - For $b > 0$, $b \neq 1$, the function $b^x$ takes every positive value exactly once. So for $y > 0$ there is one exponent $x$ with $b^x = y$, and that exponent is $\log_b y$.
- $\log_b$ and $b^x$ undo each other, and their graphs are mirror images in the line $y = x$. The logarithm has domain $x > 0$, and $\log_b 1 = 0$, $\log_b b = 1$.
- For $u, v > 0$: $\log_b(uv) = \log_b u + \log_b v$, $\log_b\frac{u}{v} = \log_b u - \log_b v$, $\log_b(u^r) = r\log_b u$. Each is a law of exponents read backwards.
- Change of base: $\log_b u = \frac{\log_c u}{\log_c b}$. All logarithm functions are constant multiples of each other.
- To solve $b^x = y$ for $x$, take logarithms of both sides.
- A logarithmic scale plots the logarithm of a quantity, so equal steps mean equal ratios: 10 dB or one unit of earthquake magnitude is a factor of 10.

## Problems

Work these on paper before opening the solutions. A calculator is needed only where a decimal answer is asked for. The first three repeat the lesson's moves, the next three combine them, and the last two go further.

**Problem 1.** Evaluate without a calculator: (a) $\log_2 64$, (b) $\log_3 \frac19$, (c) $\log_{10} 0.001$, (d) $\log_4 8$, (e) $\log_5 1$.

**Solution.** In each case find the exponent. (a) $2^6 = 64$, so 6. (b) $3^{-2} = \frac19$, so $-2$. (c) $10^{-3} = 0.001$, so $-3$. (d) We need $4^t = 8$; writing both as powers of 2, $2^{2t} = 2^3$, so $t = \frac32$. Check: $4^{3/2} = (\sqrt4)^3 = 8$. (e) $5^0 = 1$, so 0.

**Problem 2.** Given only $\log 2 \approx 0.3010$ and $\log 3 \approx 0.4771$ (base 10), find (a) $\log 6$, (b) $\log 5$, (c) $\log 12$, (d) $\log 1.5$, (e) $\log \sqrt{3}$.

**Solution.** (a) $\log 6 = \log 2 + \log 3 \approx 0.7781$. (b) $5 = \frac{10}{2}$, so $\log 5 = \log 10 - \log 2 = 1 - 0.3010 = 0.6990$. (c) $12 = 2^2 \times 3$, so $\log 12 = 2(0.3010) + 0.4771 = 1.0791$. (d) $\log\frac32 = 0.4771 - 0.3010 = 0.1761$. (e) $\sqrt3 = 3^{1/2}$, so $\log\sqrt3 = \frac12(0.4771) \approx 0.2386$.

**Problem 3.** Solve $3^x = 20$ to three decimal places, and check your answer.

**Solution.** Take common logarithms: $x \log 3 = \log 20$, so $x = \frac{\log 20}{\log 3} \approx \frac{1.30103}{0.47712} \approx 2.727$. Check: $3^2 = 9$ and $3^3 = 27$, so the exponent must lie between 2 and 3, nearer 3; and a calculator gives $3^{2.727} \approx 20.00$.

**Problem 4.** A concert measures 105 dB and a busy street 75 dB. How many times as intense is the sound at the concert? What decibel level is 50 times as intense as the street?

**Solution.** The levels differ by 30 dB, so $10\log\frac{I_1}{I_0} - 10\log\frac{I_2}{I_0} = 30$. By law 2 the left side is $10\log\frac{I_1}{I_2}$, so $\log\frac{I_1}{I_2} = 3$ and the ratio is $10^3 = 1000$. For the second part, multiplying the intensity by 50 adds $10\log 50 = 10(\log 100 - \log 2) \approx 10(2 - 0.3010) = 16.99$ dB, giving about 92 dB.

**Problem 5.** Let $b > 0$, $b \neq 1$ and $u > 0$. Prove that (a) $\log_b \frac1u = -\log_b u$, and (b) $\log_{1/b} u = -\log_b u$. What does (b) say about the graphs of $\log_2 x$ and $\log_{1/2} x$?

**Solution.** (a) By law 2, $\log_b\frac1u = \log_b 1 - \log_b u = 0 - \log_b u$. (b) By change of base with $c = b$, $\log_{1/b} u = \frac{\log_b u}{\log_b (1/b)}$, and $\log_b\frac1b = -\log_b b = -1$ by part (a). So $\log_{1/b} u = -\log_b u$. (The base $\frac1b$ is allowed: it is positive and not 1.) For the graphs: $\log_{1/2} x = -\log_2 x$, so each is the mirror image of the other in the $x$ axis. A logarithm with base less than 1 is a decreasing function.

**Problem 6.** How many digits does $2^{100}$ have? First explain why a whole number $N \geq 1$ has $\lfloor \log N \rfloor + 1$ digits, where $\lfloor t \rfloor$ means $t$ rounded down to a whole number.

**Solution.** A whole number with $d$ digits satisfies $10^{d-1} \le N < 10^d$. Because $\log$ is increasing, this is the same as $d - 1 \le \log N < d$, which says $\lfloor\log N\rfloor = d - 1$. So $d = \lfloor\log N\rfloor + 1$. For $N = 2^{100}$, law 3 gives $\log N = 100\log 2 \approx 30.103$, so $N$ has $30 + 1 = 31$ digits. (Indeed $2^{100} = 1{,}267{,}650{,}600{,}228{,}229{,}401{,}496{,}703{,}205{,}376$.)

**Problem 7.** Find the error in this argument. "We know $\frac14 > \frac18$, that is, $\left(\frac12\right)^2 > \left(\frac12\right)^3$. Take logarithms: $2\log\frac12 > 3\log\frac12$. Divide both sides by $\log\frac12$: $2 > 3$."

**Solution.** Every step is correct except the last. Taking logarithms preserves the inequality because $\log$ is increasing, and law 3 is applied correctly. But $\log\frac12 = -\log 2 \approx -0.301$ is negative, and dividing an inequality by a negative number reverses it. Done correctly the last step gives $2 < 3$. As a check, the middle line says $-0.602 > -0.903$, which is true.

**Problem 8.** Prove that $\log_2 3$ is irrational, that is, not equal to any fraction $\frac{p}{q}$ of whole numbers.

**Solution.** Suppose $\log_2 3 = \frac{p}{q}$ with $p$ and $q$ whole numbers and $q > 0$. Since $\log_2 3 > \log_2 1 = 0$, also $p > 0$. By definition $2^{p/q} = 3$, and raising both sides to the power $q$ gives $2^p = 3^q$. The left side is even, because $p \ge 1$. The right side is a product of 3s, which is odd. An even number cannot equal an odd one, so no such fraction exists. This is why the halving search for $\log_2 3$ never ended: it was closing in on a number that no fraction reaches.
