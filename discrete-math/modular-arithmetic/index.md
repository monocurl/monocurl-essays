# Clock arithmetic: modular arithmetic and why it works

> Arithmetic with remainders, made exact. Congruences, the divisibility tests for 9 and 11, when division is allowed, and Fermat's little theorem, with proofs.

Series: Discrete Mathematics (https://www.monocurl.com/monocurl-essays/discrete-math/)
Canonical: https://www.monocurl.com/monocurl-essays/discrete-math/modular-arithmetic/
Keywords: modular arithmetic, clock arithmetic, congruence modulo n, divisibility rule for 9, divisibility rule for 11, modular inverse, Fermat's little theorem, remainders

[Figure 1, animation: The whole numbers from 0 to 20 on a number line, wound around a circle with 7 places. Numbers that differ by 7, such as 0, 7 and 14, land on the same place. Each place collects the numbers with one particular remainder on division by 7.]

Today is a Tuesday. What day of the week will it be 1000 days from now? And what day will it be $10^{100}$ days from now, a number of days with 101 digits?

The first question can be done by patient counting. The second cannot: no calendar reaches that far and no calculator will hold the number. Yet both have short pencil-and-paper answers, and the second takes barely longer than the first. The method is to stop caring about the numbers themselves and keep only their remainders. Our job is to find out exactly which calculations survive that loss of information, and one of them does not.

## Wrapping the number line

Days of the week repeat every 7. Seven days from a Tuesday is a Tuesday, and so is 14 days, and 700. So to move 1000 days ahead, remove as many whole weeks as possible and see what is left over.

[Figure 2, steps: The seven days of the week on a circle. Moving ahead 7 days goes once around. Moving ahead 1000 days goes around 142 times and then 6 places further, so only the remainder 6 matters.]

  - step: Start on Tuesday. Moving ahead 7 days goes once around the circle and comes back to Tuesday.
  - step: 1000 days is 142 whole weeks and 6 days more. The whole weeks bring us back to Tuesday every time.
  - step: Only the remainder 6 is left to do. Six days after a Tuesday is a Monday.
Dividing, $1000 = 7 \times 142 + 6$. The 142 weeks change nothing and the remainder 6 carries Tuesday to Monday. The animation at the top shows the same idea for all numbers at once: wind the number line around a circle with 7 places, and two numbers land on the same place exactly when they differ by a multiple of 7. A clock does this with 12 places, which is why the subject is nicknamed clock arithmetic.

The fact about division being used here is the **division theorem**: for every integer $a$ and every integer $n \ge 1$ there is exactly one pair of integers $q$ and $r$ with $a = qn + r$ and $0 \le r < n$. The number $r$ is the **remainder** of $a$ on division by $n$. We take this as known. Note that it covers negative numbers: $-5 = (-1) \times 7 + 2$, so the remainder of $-5$ on division by 7 is 2, and five days before a Tuesday is the same weekday as two days after it.

**Definition.** Let $n \ge 1$ be an integer, called the **modulus**. Integers $a$ and $b$ are **congruent modulo $n$**, written

$$
a \equiv b \pmod n,
$$

if $n$ divides $a - b$, that is, if $a - b = nk$ for some integer $k$.

So $1000 \equiv 6 \pmod 7$, because $1000 - 6 = 994 = 7 \times 142$. The definition speaks of differences and the story spoke of remainders. They agree: $a \equiv b \pmod n$ exactly when $a$ and $b$ have the same remainder on division by $n$. Indeed, if $a = qn + r$ and $b = q'n + r$ then $a - b = (q - q')n$. Conversely, if $a - b = nk$ and $b = q'n + r$ with $0 \le r < n$, then $a = (q' + k)n + r$, and since the division theorem allows only one remainder, $r$ is the remainder of $a$ too.

We want to treat congruent numbers as "the same for present purposes", and for that the relation must behave like equality in three basic ways.

**Theorem.** Congruence modulo $n$ is an equivalence relation. For all integers $a$, $b$, $c$: (1) $a \equiv a$; (2) if $a \equiv b$ then $b \equiv a$; (3) if $a \equiv b$ and $b \equiv c$ then $a \equiv c$, all modulo $n$.

**Proof.** (1) $a - a = 0 = n \times 0$. (2) If $a - b = nk$ then $b - a = n(-k)$. (3) If $a - b = nk$ and $b - c = nl$, adding gives $a - c = n(k + l)$.

The integers therefore fall into $n$ classes, one for each remainder $0, 1, \dots, n - 1$. They are the $n$ places on the circle.

## Arithmetic survives the wrapping

Suppose that after the 1000 days we wait another 500. Since $500 = 7 \times 71 + 3$, that is 3 more places, and $6 + 3 = 9$, which is 2 places past a whole turn. Is $1500 \equiv 2$? Yes: $1500 = 7 \times 214 + 2$. Adding the remainders gave the right remainder of the sum. That is what the circle suggests, since moving ahead by $a$ and then by $b$ ends where moving ahead by $a + b$ does.

Multiplication is less obvious. Does the remainder of a product depend only on the remainders of the factors?

**Pause and try.** Find the remainder of $9 \times 10$ on division by 7. Then multiply the remainders of 9 and of 10 and compare. Try the same with $23 \times 45$.

**Answer.** $9 \times 10 = 90 = 7 \times 12 + 6$, remainder 6. The remainders of the factors are 2 and 3, and $2 \times 3 = 6$. For the second, $23 \times 45 = 1035 = 7 \times 147 + 6$, while $23 \equiv 2$ and $45 \equiv 3$, and again $2 \times 3 = 6$.

[Figure 3, steps: Why the remainder of 9 × 10 modulo 7 is the remainder of 2 × 3. Split each side into a multiple of 7 and a remainder. Three of the four blocks have a side of length 7, so they hold a multiple of 7 cells, and only the 2 by 3 block is left.]

  - step: A rectangle of 9 rows and 10 columns has 90 cells.
  - step: Split 9 as 7 + 2 and 10 as 7 + 3. The rectangle falls into four blocks.
  - step: Three blocks have a side of length 7. Together they hold 49 + 21 + 14 = 84 cells, a multiple of 7.
  - step: What is left is the 2 by 3 block. So 90 and 2 × 3 = 6 differ by a multiple of 7.
The picture is a proof for these numbers. With letters in place of the numbers it becomes a proof for all.

**Theorem.** Let $n \ge 1$. If $a \equiv a'$ and $b \equiv b' \pmod n$, then

$$
a + b \equiv a' + b', \qquad a - b \equiv a' - b', \qquad ab \equiv a'b' \pmod n.
$$

Consequently $a^k \equiv a'^k \pmod n$ for every integer $k \ge 1$.

**Proof.** Write $a - a' = nk$ and $b - b' = nl$ with integers $k$ and $l$. Then $(a + b) - (a' + b') = n(k + l)$ and $(a - b) - (a' - b') = n(k - l)$. For the product, subtract and add $a'b$:

$$
ab - a'b' = (a - a')\,b + a'\,(b - b') = n\,(kb + a'l).
$$

Each difference is a multiple of $n$. The statement about powers follows by applying the product rule repeatedly: from $a \equiv a'$ and $a \equiv a'$ we get $a^2 \equiv a'^2$, then with $a \equiv a'$ again $a^3 \equiv a'^3$, and so on up to the exponent $k$. (Formally this is an [induction](@discrete-math/induction) on $k$.)

**Key idea.** In any calculation built from $+$, $-$ and $\times$, a number may be replaced at any stage by anything congruent to it. So reduce early and often, and the numbers never grow.

**Pause and try.** Now answer the second opening question. Find the remainder of $10^{100}$ on division by 7. (Replace 10 by something smaller, then look at the remainders of the first few powers until you see 1.)

**Answer.** $10 \equiv 3 \pmod 7$, so $10^{100} \equiv 3^{100}$. The powers of 3 modulo 7 are $3,\ 9 \equiv 2,\ 6,\ 18 \equiv 4,\ 12 \equiv 5,\ 15 \equiv 1$. So $3^6 \equiv 1$, and since $100 = 6 \times 16 + 4$ we get $3^{100} = (3^6)^{16} \times 3^4 \equiv 1 \times 4 = 4$. Four days after Tuesday is Saturday. Nothing larger than 18 was ever written down.

## The divisibility tests for 9 and 11

You may know the rule that a number is divisible by 9 exactly when the sum of its digits is. Take 5832. Its digits add up to 18, which is divisible by 9, and indeed $5832 = 9 \times 648$. The rule is usually taught as a trick. With congruences it is one line.

[Figure 4, image: Why digit sums work. The number 5832 is 5 × 1000 + 8 × 100 + 3 × 10 + 2. Modulo 9 every power of 10 is congruent to 1, so the number is congruent to the sum of its digits. Modulo 11 the powers of 10 alternate between 1 and −1.]

**Theorem.** Let $N$ be a positive integer with decimal digits $d_k, \dots, d_1, d_0$ from left to right, so that $N = d_k 10^k + \dots + d_1 10 + d_0$. Then

$$
N \equiv d_0 + d_1 + \dots + d_k \pmod 9 \qquad \text{and} \qquad N \equiv d_0 - d_1 + d_2 - \dots + (-1)^k d_k \pmod{11}.
$$

In particular $N$ is divisible by 9 exactly when its digit sum is, and divisible by 11 exactly when its alternating digit sum is.

**Proof.** Since $10 - 1 = 9$, we have $10 \equiv 1 \pmod 9$, and so $10^i \equiv 1^i = 1$ for every $i$. Replacing each power of 10 by 1 in the expression for $N$ gives the first congruence. Since $10 - (-1) = 11$, we have $10 \equiv -1 \pmod{11}$, and so $10^i \equiv (-1)^i$. Replacing each power of 10 by $(-1)^i$ gives the second. Finally, a number is divisible by $n$ exactly when it is congruent to 0 modulo $n$, and congruent numbers are congruent to 0 together.

The theorem says more than the school rule: the digit sum has the same remainder as $N$, whether or not that remainder is 0. For 5832 the alternating sum is $2 - 3 + 8 - 5 = 2$, so 5832 leaves remainder 2 on division by 11, and indeed $5832 = 11 \times 530 + 2$.

## Division is the operation that fails

We have added, subtracted and multiplied congruences. Can we divide them? Try it: $8 \equiv 2 \pmod 6$, that is, $2 \times 4 \equiv 2 \times 1$. Cancelling the 2 would give $4 \equiv 1 \pmod 6$, which is false. Yet in other cases cancelling works. To see what decides it, look at what multiplying by a fixed number does to all the places on the circle at once.

[Figure 5, steps: Multiplication tables drawn as arrows. Each place i is joined to the place of k × i, for k = 2, 3, 4, on a circle of 7 places (left) and of 10 places (right). Modulo 7 the arrows always rearrange the nonzero places. Modulo 10 that happens for 3, but for 2 and 4 arrows collide: the places shaded red receive more than one number, and the unshaded places receive none.]

  - step: Multiply by 2. Modulo 7 each of the places 1 to 6 receives one arrow. Modulo 10 the even places receive two numbers each and the odd places none.
  - step: Multiply by 3. Both tables are rearrangements. Modulo 10 the place 5 is sent to itself.
  - step: Multiply by 4. Modulo 7 it is a rearrangement again. Modulo 10 the arrows collide, as they did for 2.
Modulo 10, multiplying by 2 sends both 1 and 6 to 2. Once two places have been merged, no operation can separate them again, so "dividing by 2" cannot exist modulo 10. Multiplying by 3 merges nothing: it rearranges the places, and a rearrangement can be undone.

**Pause and try.** Work modulo 10. For each $a$ from 1 to 9, look for a number $b$ with $ab \equiv 1 \pmod{10}$. Which $a$ have one? What do those $a$ have in common?

**Answer.** $1 \times 1 = 1$, $3 \times 7 = 21 \equiv 1$, $7 \times 3 \equiv 1$ and $9 \times 9 = 81 \equiv 1$. For $a = 2, 4, 6, 8$ every multiple of $a$ is even, so it cannot end in 1, and every multiple of 5 ends in 0 or 5. The successful values 1, 3, 7, 9 are exactly those with no common factor with 10 other than 1.

A number $b$ with $ab \equiv 1 \pmod n$ is called an **inverse** of $a$ modulo $n$. Multiplying by $b$ undoes multiplying by $a$, which is all that division ever meant. Write $\gcd(a, n)$ for the greatest common divisor of $a$ and $n$.

**Theorem.** Let $n \ge 2$ and let $a$ be an integer. Then $a$ has an inverse modulo $n$ if and only if $\gcd(a, n) = 1$. In that case cancellation is valid: if $ax \equiv ay \pmod n$, then $x \equiv y \pmod n$.

The proof leans on one fact that we cite without proof. **Bézout's identity** says that for any integers $a$ and $n$, not both zero, there are integers $s$ and $t$ with $as + nt = \gcd(a, n)$. It is proved by running Euclid's algorithm for the greatest common divisor backwards, and it is believable from small cases: $\gcd(3, 10) = 1$ and $3 \times 7 + 10 \times (-2) = 1$.

**Proof.** Suppose $\gcd(a, n) = 1$. By Bézout's identity there are integers $s$ and $t$ with $as + nt = 1$. Then $as - 1 = n(-t)$, so $as \equiv 1 \pmod n$, and $s$ is an inverse of $a$.

Conversely, suppose $ab \equiv 1 \pmod n$, say $ab - 1 = nk$. Let $d$ be a positive common divisor of $a$ and $n$. Then $d$ divides $ab - nk = 1$, so $d = 1$. Hence $\gcd(a, n) = 1$.

For cancellation, let $b$ be an inverse of $a$ and multiply $ax \equiv ay$ by $b$: this gives $bax \equiv bay$, and since $ba \equiv 1$, it reads $x \equiv y$.

When $n$ is a prime $p$, every $a$ not divisible by $p$ has $\gcd(a, p) = 1$. So modulo a prime every nonzero place has an inverse, and the circle of 7 behaved well for that reason.

## Fermat's little theorem

In the weekday problem the key was $3^6 \equiv 1 \pmod 7$, found by trial. Was that luck? Compute all the powers of all the nonzero remainders modulo 7.

[Figure 6, image: The powers of 1, 2, 3, 4, 5, 6 reduced modulo 7. Row a, column k shows the remainder of a to the power k. The rows differ, but the sixth column is 1 in every row.]

Every row ends in 1. To find the reason, go back to the arrows. Multiplying by 3 rearranges the places 1 to 6, so the six numbers $3 \times 1, 3 \times 2, \dots, 3 \times 6$ are, after reduction, the numbers 1 to 6 in another order. A product does not care about order.

[Figure 7, steps: The rearrangement argument for 3 modulo 7. Multiply 1, ..., 6 by 3 and reduce. The results are 1, ..., 6 in a different order, so the two rows have congruent products, and cancelling the common factors leaves 3 to the power 6 congruent to 1.]

  - step: Take 1 to 6, all the nonzero remainders modulo 7, and multiply each by 3.
  - step: Reduce modulo 7. None of the results is 0 and no two are equal.
  - step: Put them in order: they are 1 to 6 again. Multiplying by 3 only rearranged the list.
  - step: So the product of the multiples is congruent to the product of 1 to 6. Cancelling 1, 2, ..., 6 leaves the sixth power of 3 congruent to 1.
**Theorem.** (Fermat's little theorem.) Let $p$ be a prime and let $a$ be an integer not divisible by $p$. Then

$$
a^{p-1} \equiv 1 \pmod p.
$$

**Proof.** The only positive divisors of the prime $p$ are 1 and $p$, and $p$ does not divide $a$, so $\gcd(a, p) = 1$. By the theorem on inverses in the previous section, cancelling $a$ is therefore valid modulo $p$. Consider the $p - 1$ numbers $a, 2a, 3a, \dots, (p-1)a$.

*None is congruent to 0.* If $ia \equiv 0 = 0a$ with $1 \le i \le p - 1$, cancelling $a$ gives $i \equiv 0 \pmod p$, which is false for $i$ in that range.

*No two are congruent.* If $ia \equiv ja$ with $1 \le i, j \le p - 1$, cancelling $a$ gives $i \equiv j \pmod p$. Two numbers between 1 and $p - 1$ differ by less than $p$, so $i = j$.

So the remainders of $a, 2a, \dots, (p-1)a$ are $p - 1$ different numbers among $1, 2, \dots, p - 1$, hence all of them, each exactly once. Multiplying everything together, the product rule for congruences gives

$$
a \cdot 2a \cdot 3a \cdots (p-1)a \equiv 1 \cdot 2 \cdot 3 \cdots (p-1) \pmod p, \qquad \text{that is,} \qquad a^{p-1}\, W \equiv W,
$$

where $W = 1 \cdot 2 \cdots (p-1)$. Each factor $i$ of $W$ is between 1 and $p - 1$, so $p$ does not divide it, and because $p$ is prime this means $\gcd(i, p) = 1$. By the same theorem on inverses each factor can be cancelled. Cancelling them one at a time leaves $a^{p-1} \equiv 1 \pmod p$.

The theorem is from 1640, and Fermat stated it without proof, as was his habit. Both hypotheses are needed. If $p$ divides $a$, every power of $a$ is congruent to 0. And if the modulus is not prime the conclusion can fail: $2^8 = 256 = 9 \times 28 + 4$, so $2^8 \equiv 4 \pmod 9$. Problem 8 asks where the proof breaks.

**Note.** The powers in the table look scrambled, and that is useful. Computing $a^k$ modulo a large number is fast, because one can reduce after every multiplication. Going backwards, from the result to $k$ or to $a$, has no known fast method when the modulus is suitably chosen. Public-key systems such as RSA and Diffie-Hellman key exchange, which are used to secure connections on the internet, are built on that one-way behavior, and the correctness of RSA rests on a generalization of Fermat's little theorem.

## Worked examples

**Worked example.** **A last digit.** Find the last digit of $7^{2026}$.

The last digit of a number is its remainder modulo 10, so we work modulo 10. The powers of 7 are $7,\ 49 \equiv 9,\ 63 \equiv 3,\ 21 \equiv 1$, so $7^4 \equiv 1$. Now $2026 = 4 \times 506 + 2$, hence $7^{2026} = (7^4)^{506} \times 7^2 \equiv 1 \times 49 \equiv 9$. The last digit is 9.

*Check on a small case.* The same reasoning predicts that $7^6$ ends in 9, and $7^6 = 117649$.

**Worked example.** **Testing a long number.** Is 123456789 divisible by 9? By 11?

The digit sum is $1 + 2 + \dots + 9 = 45 = 9 \times 5$, so the number is divisible by 9. For 11, start the alternating sum at the units digit: $9 - 8 + 7 - 6 + 5 - 4 + 3 - 2 + 1 = 5$. So the number leaves remainder 5 on division by 11 and is not divisible by 11.

*Check.* $123456789 = 9 \times 13717421$ and $123456789 = 11 \times 11223344 + 5$.

**Worked example.** **Solving a congruence, and one that misbehaves.** Solve $5x \equiv 3 \pmod 7$. Then try $4x \equiv 2 \pmod 6$.

Since $\gcd(5, 7) = 1$, the number 5 has an inverse modulo 7. Searching the multiples of 5 gives $5 \times 3 = 15 \equiv 1$, so the inverse is 3. Multiply both sides by 3: $x \equiv 9 \equiv 2 \pmod 7$. *Check:* $5 \times 2 = 10 = 7 + 3$.

For the second, $\gcd(4, 6) = 2$, so there is no inverse and we must not divide. Test all six remainders: $4x$ is $0, 4, 2, 0, 4, 2$ for $x = 0, \dots, 5$. So there are two solutions, $x \equiv 2$ and $x \equiv 5 \pmod 6$, where "dividing by 2" would have suggested only $2x \equiv 1$, which has none. And $4x \equiv 3 \pmod 6$ has no solution at all, because 3 never appears in the list.

## Common mistakes

**Common mistake.** **Cancelling a common factor from a congruence.** From $2 \times 4 \equiv 2 \times 1 \pmod 6$ it does not follow that $4 \equiv 1$. Cancelling $a$ is valid only when $\gcd(a, n) = 1$. The habit comes from ordinary equations, where every nonzero number has an inverse. Modulo $n$ only the numbers with no common factor with $n$ do.

**Common mistake.** **Reducing an exponent by the modulus.** Bases may be replaced by congruent numbers, and exponents may not. Modulo 7 we have $10 \equiv 3$, but $2^{10} = 1024 \equiv 2$ while $2^3 = 8 \equiv 1$. The exponent counts how many times we multiply, and it is not a remainder. By Fermat's little theorem, when the base is not divisible by the prime $p$, exponents may be reduced modulo $p - 1$: here $10 \equiv 4 \pmod 6$, and $2^4 = 16 \equiv 2$, which is correct.

## Stepping back

The difficulty at the start was size: $10^{100}$ days cannot be counted. The idea that removed it was to decide in advance what we want to know about a number, here its place in the week, and to check which operations respect that. Addition, subtraction and multiplication do, so we could reduce at every step and never hold a large number. Division does not, and tracking down exactly when it does led to inverses and to primes.

The same pattern, throwing away most of a number and computing with what remains, gives the digit tests, check digits on bank cards and book numbers, and the cryptography mentioned above. The rearrangement idea in the proof of Fermat's theorem is also worth keeping: when an operation only shuffles a finite set, anything that ignores order, such as a product or a sum, is unchanged by it.

**Check yourself.** What is the remainder of $2^{50}$ on division by 7?
Answer: 4 $2^6 \equiv 1 \pmod 7$ by Fermat's little theorem, and $50 = 6 \times 8 + 2$, so $2^{50} \equiv 2^2 = 4$. (Even quicker: $2^3 = 8 \equiv 1$.)

**Recap.** - $a \equiv b \pmod n$ means $n$ divides $a - b$. Equivalently, $a$ and $b$ have the same remainder on division by $n$. It is an equivalence relation with $n$ classes.
- Congruences can be added, subtracted, multiplied and raised to powers. Reduce at every step.
- $10 \equiv 1 \pmod 9$ gives the digit-sum test, and $10 \equiv -1 \pmod{11}$ gives the alternating-sum test. Both give the remainder as well as divisibility.
- $a$ has an inverse modulo $n$ exactly when $\gcd(a, n) = 1$ (by Bézout's identity). Only then may $a$ be cancelled.
- Fermat's little theorem: if $p$ is prime and does not divide $a$, then $a^{p-1} \equiv 1 \pmod p$, because multiplying by $a$ rearranges $1, \dots, p - 1$.
- Exponents are not remainders. Modulo a prime $p$, and for a base not divisible by $p$, they reduce modulo $p - 1$.

## Problems

Problems 1 to 3 are direct. Problems 4 to 6 combine ideas or ask for a proof. Problems 7 and 8 extend the lesson.

**Problem 1.** (a) Find the remainders of 2026 and of $-12$ on division by 7. (b) If today is Tuesday, what day is it 100 days from now, and what day was it 100 days ago?

**Solution.** (a) $2026 = 7 \times 289 + 3$, so the remainder is 3. And $-12 = 7 \times (-2) + 2$, so the remainder is 2. (b) $100 = 7 \times 14 + 2$, so 100 days ahead is 2 days after Tuesday, a Thursday. Going back, $-100 \equiv -2 \equiv 5 \pmod 7$, so it was the same weekday as 5 days after Tuesday, or 2 days before it: a Sunday.

**Problem 2.** Find the last digit of $3^{2026}$.

**Solution.** Work modulo 10. $3^2 = 9$, $3^3 = 27 \equiv 7$, $3^4 = 81 \equiv 1$. Since $2026 = 4 \times 506 + 2$, we get $3^{2026} = (3^4)^{506} \times 3^2 \equiv 9$. The last digit is 9.

**Problem 3.** Without dividing, find the remainders of 918082 on division by 9 and by 11.

**Solution.** The digit sum is $9 + 1 + 8 + 0 + 8 + 2 = 28 \equiv 1 \pmod 9$ (since $28 = 27 + 1$), so the remainder modulo 9 is 1. The alternating sum from the units digit is $2 - 8 + 0 - 8 + 1 - 9 = -22 = 11 \times (-2)$, so the number is divisible by 11 and the remainder is 0. Check: $918082 = 11 \times 83462$ and $918082 = 9 \times 102009 + 1$.

**Problem 4.** Find the inverse of 7 modulo 11, and use it to solve $7x \equiv 5 \pmod{11}$.

**Solution.** The multiples of 7 are $7, 14, 21, 28, 35, 42, 49, 56$, and $56 = 55 + 1 \equiv 1 \pmod{11}$. So the inverse of 7 is 8. Multiplying $7x \equiv 5$ by 8 gives $x \equiv 40 = 33 + 7 \equiv 7 \pmod{11}$. Check: $7 \times 7 = 49 = 44 + 5$.

**Problem 5.** Show that the square of an integer is congruent to 0 or 1 modulo 4. Deduce that no number of the form $4k + 3$ is a sum of two squares of integers.

**Solution.** Every integer is congruent modulo 4 to one of $0, 1, 2, 3$, and by the product rule its square is congruent to $0^2 = 0$, $1^2 = 1$, $2^2 = 4 \equiv 0$ or $3^2 = 9 \equiv 1$. So squares are congruent to 0 or 1. A sum of two squares is then congruent to $0 + 0$, $0 + 1$, $1 + 0$ or $1 + 1$, that is, to 0, 1 or 2 modulo 4, and never to 3. So numbers such as 3, 7, 11, 2027 are not sums of two squares. One calculation with four cases has settled a question about infinitely many numbers.

**Problem 6.** Find all solutions of $6x \equiv 4 \pmod{10}$ and of $6x \equiv 3 \pmod{10}$. Explain the outcome using $\gcd(6, 10)$.

**Solution.** $\gcd(6, 10) = 2$, so 6 has no inverse and we test the ten remainders. For $x = 0, 1, \dots, 9$ the values of $6x$ modulo 10 are $0, 6, 2, 8, 4, 0, 6, 2, 8, 4$. The value 4 occurs for $x \equiv 4$ and $x \equiv 9$, so the first congruence has two solutions modulo 10. The value 3 never occurs, so the second has none. The reason: $6x - 10k$ is always even, so $6x$ can only be congruent to even numbers, and each even remainder is hit twice because multiplying by 6 merges $x$ with $x + 5$ (as $6 \times 5 = 30 \equiv 0$).

**Problem 7.** (a) Find the remainder of $2^{100}$ on division by 13. (b) Prove that $n^7 - n$ is divisible by 7 for every integer $n$.

**Solution.** (a) 13 is prime and does not divide 2, so $2^{12} \equiv 1 \pmod{13}$. Since $100 = 12 \times 8 + 4$, $2^{100} \equiv 2^4 = 16 \equiv 3$. (b) If 7 does not divide $n$, Fermat's little theorem gives $n^6 \equiv 1 \pmod 7$, and multiplying by $n$ gives $n^7 \equiv n$. If 7 divides $n$, then $n \equiv 0$ and $n^7 \equiv 0$, so again $n^7 \equiv n$. In both cases 7 divides $n^7 - n$. For example $2^7 - 2 = 126 = 7 \times 18$.

**Problem 8.** For the modulus 9 and $a = 2$, the conclusion of Fermat's little theorem fails: $2^8 \equiv 4 \pmod 9$. Go through the proof with $p$ replaced by 9 and find the first step that is false. Then show that the weaker statement $2^6 \equiv 1 \pmod 9$ is true, by applying the rearrangement idea to the list $1, 2, 4, 5, 7, 8$.

**Solution.** Since $\gcd(2, 9) = 1$, cancelling 2 is valid modulo 9, so the two claims about $2, 4, \dots, 16$ hold: the remainders of $2i$ for $i = 1, \dots, 8$ are $2, 4, 6, 8, 1, 3, 5, 7$, a rearrangement of 1 to 8. The product step holds too: $2^8\, W \equiv W \pmod 9$ with $W = 1 \cdot 2 \cdots 8$. The false step is the last one, "each factor of $W$ has no common factor with the modulus and can be cancelled". The factors 3 and 6 share the factor 3 with 9. In fact $W$ contains $3 \times 6 = 18$, so $W \equiv 0$ and the congruence only says $0 \equiv 0$.

For the repair, use only the numbers that can be cancelled, $1, 2, 4, 5, 7, 8$, which are those with no common factor with 9. Doubling them gives $2, 4, 8, 10, 14, 16$, with remainders $2, 4, 8, 1, 5, 7$: the same six numbers rearranged. So $2^6 V \equiv V \pmod 9$ with $V = 1 \cdot 2 \cdot 4 \cdot 5 \cdot 7 \cdot 8$, and now every factor of $V$ may be cancelled, leaving $2^6 \equiv 1$. Check: $2^6 = 64 = 63 + 1$. This is the idea behind Euler's generalization of Fermat's theorem, the one that RSA uses.
