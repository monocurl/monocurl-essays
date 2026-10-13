# Cantor's diagonal argument: some infinities are bigger

> Sizes of infinite sets are compared by pairing. The integers and the fractions pair off with the counting numbers, and the real numbers provably do not.

Series: Logic and Proof (https://www.monocurl.com/monocurl-essays/logic/)
Canonical: https://www.monocurl.com/monocurl-essays/logic/infinity-cantor/
Keywords: Cantor's diagonal argument, countable and uncountable sets, bijection, Hilbert's hotel, rationals are countable, reals are uncountable, Cantor's theorem, continuum hypothesis

[Figure 1, animation: Each counting number n is joined to its double 2n. Every even number receives exactly one line, so the even numbers, which look like half of the counting numbers, pair off with all of them.]

Are there more counting numbers $1, 2, 3, \dots$ than even numbers $2, 4, 6, \dots$? The obvious answer is yes, twice as many, since the even numbers leave out every other one. But join each number $n$ to its double $2n$, as in the animation. Every counting number gets a partner, every even number gets a partner, and nobody is used twice. If two crowds can be lined up one against one with nobody left over, it is hard to maintain that one crowd is bigger.

So two reasonable ways of comparing sizes disagree. The same conflict, with the square numbers $1, 4, 9, \dots$ in place of the even ones, puzzled Galileo, who concluded that "equal", "greater" and "less" do not apply to infinite collections. In the 1870s Georg Cantor took the other way out: he chose one of the two ways, followed it strictly, and found that infinite sets do come in different sizes.

Notation: $\mathbb{N} = \{1, 2, 3, \dots\}$ is the set of counting numbers, $\mathbb{Z}$ the integers, $\mathbb{Q}$ the rational numbers (fractions $\frac{p}{q}$ of integers with $q \neq 0$) and $\mathbb{R}$ the real numbers. From [the lesson on sets](@logic/sets-and-counting) we use $\in$ and $\subseteq$, and from [proof by contradiction](@logic/proof-by-contradiction) the method of assuming the opposite and deriving an impossibility.

## Size without counting

To check that a hall has as many chairs as people without counting either, ask everyone to sit. If no chair is empty and nobody is standing, the numbers agree. For finite sets this test and ordinary counting always give the same verdict; indeed counting *is* this test, a pairing of the objects with $1, 2, \dots, n$. The test has the advantage that it still makes sense when no number $n$ is available.

**Definition.** Let $A$ and $B$ be sets, and let $f$ be a function from $A$ to $B$, written $f : A \to B$.

- $f$ is **injective** if different inputs give different outputs: $a \neq a'$ implies $f(a) \neq f(a')$.
- $f$ is **surjective** if every element of $B$ is an output: for every $b \in B$ there is an $a \in A$ with $f(a) = b$.
- $f$ is a **bijection** if it is both. Then each $b \in B$ equals $f(a)$ for exactly one $a$.

$A$ and $B$ have the **same size** (the same **cardinality**), written $|A| = |B|$, if there is a bijection from $A$ to $B$.

In the hall, $f$ sends each person to a chair. Injective says no chair holds two people, and surjective says no chair is empty.

The rival test, "a part is smaller than the whole", is also correct for finite sets: a finite set cannot be paired off with a proper part of itself, which is the [pigeonhole principle](@discrete-math/pigeonhole-principle). For infinite sets the two tests conflict, as the opening showed, and we keep the pairing test. The first theorem records what the animation drew.

**Theorem.** The set $E = \{2, 4, 6, \dots\}$ of even counting numbers has the same size as $\mathbb{N}$.

**Proof.** Define $f : \mathbb{N} \to E$ by $f(n) = 2n$. It is injective: if $2n = 2n'$ then $n = n'$. It is surjective: an element of $E$ is an even counting number $m$, so $m = 2k$ for a counting number $k$, and $f(k) = m$. So $f$ is a bijection.

### Hilbert's hotel

David Hilbert dramatized this with a hotel that has one room for each counting number, all occupied. A new guest arrives.

[Figure 2, animation: Hilbert's hotel. Every room is occupied, and a new guest arrives. Each guest moves from room n to room n + 1, which empties room 1 without sending anyone away. The row of rooms continues past the right edge of the picture.]

No finite hotel can do this. Here the move $n \mapsto n + 1$ is a bijection from $\mathbb{N}$ to $\{2, 3, 4, \dots\}$, so the full hotel has the same size as itself with a room removed.

**Pause and try.** Now a bus arrives with infinitely many new guests, in seats numbered $1, 2, 3, \dots$, and the hotel is full. Find new rooms for everybody. (Moving each guest "infinitely many rooms along" is not an instruction anyone can follow.)

**Answer.** Send the guest in room $n$ to room $2n$, and the passenger in seat $k$ to room $2k - 1$. The old guests fill the even rooms, once each, and the passengers fill the odd rooms, once each. Every room has exactly one occupant.

## Countable sets: the integers

A bijection $f : \mathbb{N} \to S$ is the same thing as a list $f(1), f(2), f(3), \dots$ in which every element of $S$ appears exactly once. So the question "is $S$ the same size as $\mathbb{N}$?" becomes "can the elements of $S$ be written in a list that misses nothing?"

**Definition.** A set is **countably infinite** if it has the same size as $\mathbb{N}$, and **countable** if it is finite or countably infinite. A set that is not countable is **uncountable**.

The integers go on forever in both directions, so listing them from left to right is hopeless: there is no leftmost one to start with. Listing all the positive ones first also fails, because then $-1$ would never be reached. A list must reach each element after finitely many steps. The fix is to start in the middle and alternate.

[Figure 3, animation: Listing the integers by starting at 0 and swinging outward: 0, 1, -1, 2, -2, \dots Every integer is reached after finitely many steps.]

**Theorem.** The set $\mathbb{Z}$ of integers is countably infinite.

**Proof.** List the integers as $0, 1, -1, 2, -2, 3, -3, \dots$ That is, define $f : \mathbb{N} \to \mathbb{Z}$ by $f(1) = 0$, $f(2k) = k$ and $f(2k + 1) = -k$ for $k \geq 1$. Surjective: 0 is $f(1)$, a positive integer $k$ is $f(2k)$, and a negative integer $-k$ is $f(2k+1)$. Injective: even inputs give positive outputs, odd inputs greater than 1 give negative outputs, input 1 gives 0, and within each kind different inputs give different outputs. So $f$ is a bijection.

## The fractions are countable too

The rationals look far more numerous. Between any two of them lies another (their average), so there is no "next" fraction after 0 and they cannot be listed in order of size. Many people expect this to be where countability fails.

The positive fractions can be laid out in a grid, with $\frac{p}{q}$ in column $p$ and row $q$. Reading along the rows fails for the reason that listing the positive integers first failed: the first row never ends. But the grid has another feature. The fractions with $p + q = 2$, then $p + q = 3$, then $p + q = 4$, lie along slanting lines, and each such line is *finite*.

[Figure 4, animation: The positive fractions in a grid, with p/q in column p and row q. The walk goes along the diagonals p + q = 2, 3, 4, \dots in turn. A fraction that repeats an earlier value, such as 2/2, is skipped. Every positive rational is reached.]

The walk produces the list

$$
\tfrac11,\ \tfrac12,\ \tfrac21,\ \tfrac31,\ \tfrac13,\ \tfrac14,\ \tfrac23,\ \tfrac32,\ \tfrac41,\ \tfrac51,\ \tfrac15,\ \tfrac16,\ \tfrac25,\ \tfrac34,\ \dots
$$

with $\frac22$ skipped after $\frac31$ because its value, 1, is already listed.

**Pause and try.** Where is $\frac{3}{5}$ in this scheme: on which diagonal, and at most how many grid points does the walk visit before it must have reached it?

**Answer.** $\frac35$ has $p + q = 8$, so it is on the diagonal $p + q = 8$, which is the seventh diagonal when $p + q = 2$ is counted as the first. The diagonal $p + q = s$ has $s - 1$ grid points, so the diagonals up to and including $p + q = 8$ hold $1 + 2 + \dots + 7 = 28$ points. The walk reaches $\frac35$ within its first 28 steps.

**Theorem.** The set $\mathbb{Q}$ of rational numbers is countably infinite.

**Proof.** *Positive rationals.* Every positive rational can be written in exactly one way as $\frac{p}{q}$ in lowest terms with $p, q$ positive integers. Call $p + q$ its height. For each $s \geq 2$ there are only finitely many pairs $(p, q)$ of positive integers with $p + q = s$, namely $s - 1$ of them. Make a list by going through $s = 2, 3, 4, \dots$ in turn, and for each $s$ writing down, in a fixed order, the fractions $\frac{p}{q}$ with $p + q = s$ that are in lowest terms. A positive rational of height $s$ appears in the block for $s$, which is preceded by finitely many entries, so it appears at a finite position; it appears only once because only its lowest-terms form is written. The list does not end, since it contains $\frac11, \frac12, \frac13, \dots$ So it is a bijection $r : \mathbb{N} \to \mathbb{Q}^+$, where $\mathbb{Q}^+$ denotes the positive rationals: $r_1, r_2, r_3, \dots$

*All rationals.* Use the trick that listed the integers: $0, r_1, -r_1, r_2, -r_2, \dots$ Every rational is zero, positive or negative, so it appears, and it appears once.

So the rationals, which are dense on the number line, are no more numerous than the counting numbers. At this point it is reasonable to suspect that every infinite set is countable, and that the definition has only one infinite size to offer.

## The real numbers are not countable

**Pause and try.** Before reading on, commit to a guess. Can the real numbers between 0 and 1 be listed? If you think so, what would your scheme be? If not, how could anyone prove that no scheme works, given how many clever schemes there might be?

**Answer.** They cannot. And the proof does not examine schemes one at a time: it takes an arbitrary list, whatever its origin, and builds from it a number that the list provably omits.

We will describe real numbers by their decimal expansions, and one technical point must be settled first. Some numbers have two expansions: $0.4999\ldots$ (nines forever) and $0.5000\ldots$ are the same number.

[Figure 5, animation: Zooming in on 0.5 from the left, by a factor of ten at a time, with ruler marks that rescale with the zoom. The numbers 0.49, 0.499, 0.4999 and so on always sit nine tenths of the way across the window, so the distance from 0.5 to the number with n nines shrinks below every positive bound.]

The expansion $0.4999\ldots$ means the [limit](@calculus/limits) of $0.49, 0.499, 0.4999, \dots$, and the number with $n$ nines differs from $0.5$ by exactly $\frac{1}{10^{n+1}}$, which is eventually smaller than any positive number you name. So the limit is $0.5$. (As a [geometric series](@precalculus/geometric-series): $0.4 + \frac{9}{100}\left(1 + \frac1{10} + \frac1{100} + \dots\right) = 0.4 + \frac{9}{100} \cdot \frac{10}{9} = 0.5$.) This is the only way a number can have two expansions.

**Theorem.** (Decimal expansions.) Every real number $x$ with $0 < x < 1$ has an expansion $x = 0.a_1 a_2 a_3 \ldots$ with digits $a_k \in \{0, 1, \dots, 9\}$. If two different expansions represent the same number, then one of them ends in all 0s and the other in all 9s.

We use the first sentence as a known property of the real numbers. The second can be proved here.

**Proof.** (of the second sentence.) Let $0.a_1 a_2 \ldots$ and $0.b_1 b_2 \ldots$ be different expansions, let $k$ be the first position where they differ, and say $a_k < b_k$. The digits after position $k$ contribute at most $0.00\ldots0999\ldots = \frac{1}{10^k}$ and at least 0. So the first number is at most $0.a_1 \ldots a_k + \frac{1}{10^k}$, with equality only if all its later digits are 9. The second is at least $0.b_1 \ldots b_k$, with equality only if all its later digits are 0. Since $b_k \geq a_k + 1$ and the earlier digits agree, $0.b_1 \ldots b_k \geq 0.a_1 \ldots a_k + \frac{1}{10^k}$. So the first number is at most the second, and they are equal only when the first ends in all 9s and the second in all 0s.

Now take any list of real numbers between 0 and 1. The figure uses a particular list of seven; the method does not care what the list is.

[Figure 6, steps: The diagonal construction on a list that begins with seven real numbers. The new number x takes its nth digit from a rule applied to the nth digit of the nth number, so it disagrees with every number on the list in at least one digit.]

  - step: A list of real numbers between 0 and 1, written as decimals. Suppose someone claims that the list, continued forever, contains every such number.
  - step: Mark the diagonal: digit 1 of the first number, digit 2 of the second, digit 3 of the third, and so on.
  - step: Build a new number x one digit at a time: where the diagonal digit is 5 write 6, and where it is anything else write 5.
  - step: x differs from the first number in digit 1, from the second in digit 2, and from the nth number in digit n. So x is nowhere on the list.
**Theorem.** (Cantor.) No function $f : \mathbb{N} \to (0, 1)$ is surjective, where $(0,1)$ is the set of real numbers $x$ with $0 < x < 1$. In particular $(0, 1)$ is uncountable.

**Proof.** Let $f : \mathbb{N} \to (0, 1)$ be any function. We construct a number in $(0, 1)$ that is not an output of $f$.

- For each $n$, write $f(n) = 0.a_{n1} a_{n2} a_{n3} \ldots$ in decimal. If $f(n)$ has two expansions, use the one ending in 0s. So none of the chosen expansions ends in all 9s.
- Define digits $d_1, d_2, d_3, \dots$ by $d_n = 6$ if $a_{nn} = 5$, and $d_n = 5$ if $a_{nn} \neq 5$. In either case $d_n \neq a_{nn}$.
- Let $x = 0.d_1 d_2 d_3 \ldots$ Every digit is 5 or 6, so $0.5 \leq x \leq 0.666\ldots < 1$, and $x \in (0, 1)$.
- The expansion of $x$ does not end in all 0s or in all 9s, since it contains neither digit. By the theorem on decimal expansions, $x$ has no other expansion.
- Fix any $n$. The expansion $0.d_1 d_2 \ldots$ differs from the chosen expansion of $f(n)$ at position $n$. If $x$ were equal to $f(n)$, then $x$ would have two different expansions, contradicting step 4. So $x \neq f(n)$.

Since $n$ was arbitrary, $x$ is not an output of $f$, and $f$ is not surjective. A countably infinite set would have a bijection from $\mathbb{N}$, which is surjective, and $(0,1)$ is not finite, so $(0, 1)$ is uncountable.

**Key idea.** A list of real numbers always misses one. Given any list, change the $n$th digit of the $n$th number, for every $n$, and the result differs from each listed number somewhere. So no list contains all the real numbers, while lists do contain all the integers and all the rationals.

Steps 1 and 4 are where the $0.4999\ldots = 0.5$ issue is paid for. Without them the argument has a hole: two expansions that differ in a digit can still be the same number, so "differs in the $n$th digit" would not give "is a different number". Choosing the digits 5 and 6 keeps $x$ away from the only expansions that have this ambiguity.

Cantor first proved this in 1874 by a different method; the diagonal argument comes from a paper of 1891. It follows that $\mathbb{R}$ is uncountable as well: from a list of all real numbers we could strike out those outside $(0, 1)$ and be left with a list of all of $(0,1)$.

## Cantor's theorem: no largest infinity

The diagonal idea does not depend on decimals. For a set $A$, the **power set** $\mathcal{P}(A)$ is the set of all subsets of $A$. If $A = \{1, 2, 3\}$ then $\mathcal{P}(A)$ has the 8 elements $\varnothing, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}$. Try to pair the elements of $A$ with subsets of $A$, and describe each subset by a row of yes/no marks.

[Figure 7, animation: A function f from A = \{1, 2, 3, 4\} to subsets of A, drawn as rows of marks: a filled square in row a, column c means c \in f(a). Flipping the diagonal gives a subset D that differs from the row of f(a) in column a, so D is not one of the rows.]

In the figure $D = \{2, 4\}$: it contains $a$ exactly when $f(a)$ does not. That one sentence is the whole proof, for every set.

**Definition.** For sets $A$ and $B$, write $|A| \leq |B|$ if there is an injective function from $A$ to $B$, and $|A| < |B|$ if there is an injective function from $A$ to $B$ but no bijection.

**Theorem.** (Cantor's theorem.) For every set $A$, finite or infinite, $|A| < |\mathcal{P}(A)|$.

**Proof.** The function $a \mapsto \{a\}$ from $A$ to $\mathcal{P}(A)$ is injective, since $\{a\} = \{a'\}$ forces $a = a'$. It remains to show that no function $f : A \to \mathcal{P}(A)$ is surjective, for then none is a bijection. Let $f$ be any such function and define

$$
D = \{a \in A : a \notin f(a)\}.
$$

This is a subset of $A$, so $D \in \mathcal{P}(A)$. Suppose, for contradiction, that $D = f(d)$ for some $d \in A$. Is $d \in D$? By the definition of $D$, $d \in D$ exactly when $d \notin f(d)$, and since $f(d) = D$ this says $d \in D$ exactly when $d \notin D$. That is impossible. So $D$ is not an output of $f$.

For a finite set with $n$ elements the theorem says $n < 2^n$. For infinite sets it gives $|\mathbb{N}| < |\mathcal{P}(\mathbb{N})| < |\mathcal{P}(\mathcal{P}(\mathbb{N}))| < \cdots$, an unending ladder, so there is no largest infinite size. The set $D$ is built the way Russell's set was in the [previous lesson](@logic/sets-and-counting), with $a \notin f(a)$ in place of $x \notin x$.

## Worked examples

**Worked example.** **The pairs of counting numbers are countable.**

Let $\mathbb{N} \times \mathbb{N}$ be the set of ordered pairs $(p, q)$ of counting numbers. These are the grid points of the fraction figure, with nothing skipped. List them by diagonals: for $s = 2, 3, 4, \dots$ write the $s - 1$ pairs with $p + q = s$ in order of increasing $p$. This gives $(1,1), (1,2), (2,1), (1,3), (2,2), (3,1), \dots$ The pair $(p, q)$ appears in block $s = p + q$, after the $1 + 2 + \dots + (s - 2)$ pairs of earlier blocks, so its position is

$$
\frac{(p + q - 2)(p + q - 1)}{2} + p.
$$

*Check:* $(1,1)$ gets $0 + 1 = 1$; $(2,1)$ gets $\frac{1 \cdot 2}{2} + 2 = 3$; $(2, 2)$ gets $\frac{2 \cdot 3}{2} + 2 = 5$, all as in the list.

**Worked example.** **The diagonal argument manufactures an irrational number.**

Let $r_1, r_2, r_3, \dots$ be a list of all rational numbers in $(0, 1)$, which exists because a subset of the countable set $\mathbb{Q}$ can be listed by striking out the rest. Apply steps 1 to 5 of the proof to this list. The result is a real number $x \in (0, 1)$ that differs from every $r_n$. Since the list contains every rational in $(0,1)$, $x$ is irrational. So the diagonal construction, fed a list of the rationals, proves that irrational numbers exist, with no mention of $\sqrt 2$.

**Worked example.** **Two intervals of different lengths have the same size.**

The interval $(0, 2)$ is twice as long as $(0, 1)$, and we compare their sizes by pairing. Define $g : (0, 1) \to (0, 2)$ by $g(x) = 2x$. If $2x = 2x'$ then $x = x'$, so $g$ is injective; and each $y \in (0, 2)$ is $g(y/2)$ with $y/2 \in (0, 1)$, so $g$ is surjective. The intervals have the same size. Length and cardinality measure different things.

## Common mistakes and edge cases

**Common mistake.** **"Just add the missing number to the list."** The diagonal number $x$ can be put at the front of the list, but that produces a new list, and the theorem applies to it too. The theorem says that every list fails, each with its own missing number, so repairing one list does not answer it.

**Common mistake.** **Running the diagonal argument on the rationals.** Apply the construction to a list of all rationals and you get a number $x$ not on the list. This does not show the rationals are uncountable, because nothing says $x$ is rational. In the proof for $(0,1)$ step 3 checked that $x$ belongs to the set being listed; for the rationals that check fails, and the second example above shows what the construction gives instead.

An edge case in the definitions: "uncountable" does not mean "infinite and hard to list". The rationals have no listing in order of size, and they are countable all the same, because some other listing works. To prove a set uncountable you must defeat every possible list at once.

## The continuum hypothesis

We now have two infinite sizes, $|\mathbb{N}|$ and $|\mathbb{R}|$. A further theorem, which we state without proof, says that $|\mathbb{R}| = |\mathcal{P}(\mathbb{N})|$; its proof describes a real number through its binary expansion, which is a set of positions holding a 1. Cantor asked whether anything lies in between.

**Definition.** The **continuum hypothesis** is the statement that there is no set $S$ with $|\mathbb{N}| < |S| < |\mathbb{R}|$. Equivalently: every infinite set of real numbers has either the size of $\mathbb{N}$ or the size of $\mathbb{R}$.

Cantor believed it and could not prove it, and Hilbert put it first on his 1900 list of problems for the new century. Kurt Gödel showed in 1940 that the continuum hypothesis cannot be disproved from the standard axioms of set theory (called ZFC), and Paul Cohen showed in 1963 that it cannot be proved from them either, in both cases assuming those axioms are consistent. The hypothesis is **independent** of the axioms: adding it gives a consistent mathematics, and so does adding its negation.

## Stepping back

The hard step was the first one, giving up "a part is smaller than the whole" in favor of pairing. After that, proving two sets the same size is a matter of exhibiting a list, and the craft is in arranging things so that every element is reached after finitely many steps: alternate, or sweep finite diagonals. Proving two sets different in size is harder, because it means defeating all pairings, and the diagonal construction is the tool: let the supposed pairing itself tell you how to build something it missed. The same construction gives Russell's paradox and Cantor's theorem, and in computer science it shows that some problems cannot be solved by any program.

**Check yourself.** Which of these sets is **not** countable?
Answer: The real numbers between 0 and 1 Given any list of them, changing the $n$th digit of the $n$th number produces one that the list misses.

**Recap.** - Two sets have the same size when there is a bijection between them. For infinite sets a proper part can have the same size as the whole: $n \mapsto 2n$.
- A set is countable if it is finite or can be listed as $a_1, a_2, a_3, \dots$ with every element appearing once.
- $\mathbb{Z}$ is countable: $0, 1, -1, 2, -2, \dots$ So is $\mathbb{Q}$: sweep the finite diagonals $p + q = s$ of the grid of fractions, skipping repeats.
- $(0, 1)$ is uncountable: from any list, build $x$ whose $n$th digit is 5 or 6 and differs from the $n$th digit of the $n$th number. Using only 5 and 6 avoids the double expansions such as $0.4999\ldots = 0.5$.
- Cantor's theorem: $|A| < |\mathcal{P}(A)|$ for every set, by $D = \{a : a \notin f(a)\}$. There is no largest infinity.
- The continuum hypothesis, that no size lies strictly between $|\mathbb{N}|$ and $|\mathbb{R}|$, can be neither proved nor disproved from the standard axioms.

## Problems

Problems 1 to 3 repeat the moves of the lesson, 4 and 5 combine them, and 6 and 7 go further.

**Problem 1.** (a) Give a bijection from $\mathbb{N}$ to the set of odd counting numbers and prove that it is one. (b) Give a bijection from $\mathbb{N}$ to $\{10, 11, 12, \dots\}$.

**Solution.** (a) $f(n) = 2n - 1$. Injective: $2n - 1 = 2n' - 1$ gives $n = n'$. Surjective: an odd counting number is $m = 2k - 1$ for some counting number $k$ (namely $k = \frac{m+1}{2}$, an integer at least 1 because $m$ is odd and at least 1), and $f(k) = m$. (b) $g(n) = n + 9$, with $g(1) = 10$. If $n + 9 = n' + 9$ then $n = n'$, and each $m \geq 10$ is $g(m - 9)$ with $m - 9 \geq 1$.

**Problem 2.** In the listing $0, 1, -1, 2, -2, \dots$ of the integers, at which positions do $50$ and $-50$ appear? Which integer is at position 99?

**Solution.** By the formula in the proof, the positive integer $k$ is at position $2k$ and $-k$ is at position $2k + 1$. So 50 is at position 100 and $-50$ at position 101. Position 99 is odd, $99 = 2 \cdot 49 + 1$, so it holds $-49$.

**Problem 3.** Let $A = \{1, 2, 3\}$ and let $f : A \to \mathcal{P}(A)$ be given by $f(1) = \{2, 3\}$, $f(2) = \{2\}$, $f(3) = \varnothing$. Find the set $D$ from the proof of Cantor's theorem and check directly that it is not an output of $f$.

**Solution.** $D = \{a \in A : a \notin f(a)\}$. Since $1 \notin \{2, 3\}$, $1 \in D$. Since $2 \in \{2\}$, $2 \notin D$. Since $3 \notin \varnothing$, $3 \in D$. So $D = \{1, 3\}$. It differs from $f(1) = \{2,3\}$ on the element 1, from $f(2) = \{2\}$ on the element 2 (which is in $f(2)$ and not in $D$), and from $f(3) = \varnothing$ on the element 3.

**Problem 4.** A list of real numbers begins $r_1 = 0.50000\ldots$, $r_2 = 0.25555\ldots$, $r_3 = 0.33333\ldots$, $r_4 = 0.12345\ldots$, $r_5 = 0.99995\ldots$ Find the first five digits of the diagonal number $x$ from the proof. You know only five digits of $x$ and five digits of $r_2$. Why can you already be sure that $x \neq r_2$?

**Solution.** The diagonal digits are $a_{11} = 5$, $a_{22} = 5$, $a_{33} = 3$, $a_{44} = 4$, $a_{55} = 5$. The rule gives $d_1 = 6$, $d_2 = 6$, $d_3 = 5$, $d_4 = 5$, $d_5 = 6$, so $x = 0.66556\ldots$ The expansion of $x$ differs from that of $r_2$ in the second digit (6 against 5). All digits of $x$ are 5 or 6, so $x$ has only one decimal expansion, and a number with only one expansion cannot equal a number whose expansion is different. The later digits do not matter.

**Problem 5.** Let $B$ be the set of all infinite sequences of 0s and 1s, such as $0, 1, 1, 0, 1, \dots$ (a) Prove that $B$ is uncountable. (b) Why is there no need to worry about a "$0.4999\ldots$ problem" here? (c) Show that the set of *finite* strings of 0s and 1s is countable.

**Solution.** (a) Let $f : \mathbb{N} \to B$ be any function, and write $f(n) = (b_{n1}, b_{n2}, b_{n3}, \dots)$. Define a sequence $t$ by $t_n = 1 - b_{nn}$. Then $t \in B$, and for each $n$ the sequences $t$ and $f(n)$ differ in the $n$th term, so $t \neq f(n)$. So $f$ is not surjective, and no bijection exists; $B$ is also infinite, so it is uncountable. (b) Two sequences are equal only when all their terms agree, by definition. The elements of $B$ are the sequences themselves, not numbers represented by them, so two different sequences are never the same element. (c) List the strings by length, and within each length in dictionary order: the empty string, then $0, 1$, then $00, 01, 10, 11$, and so on. There are $2^k$ strings of length $k$, a finite number, so every string is reached after finitely many steps and appears once.

**Problem 6.** A student argues: "The rationals between 0 and 1 are uncountable. Take any list of them, and form the diagonal number $x$. It is not on the list. So no list is complete." Find the error. Then explain what, if anything, the argument does prove about $x$.

**Solution.** The diagonal construction produces a real number $x$ that is not on the list. To contradict "the list contains every rational in $(0,1)$" one would need $x$ to be rational, and nothing in the construction provides that. So there is no contradiction. In fact the rationals in $(0, 1)$ are countable, so a complete list exists, and for that list the argument proves that $x$ is irrational: $x$ is a real number in $(0, 1)$ different from every rational in $(0, 1)$.

**Problem 7.** (a) Let $S$ and $T$ be countably infinite sets with no element in common. Prove that $S \cup T$ is countably infinite. (b) Deduce that the set of irrational numbers is uncountable.

**Solution.** (a) Let $s_1, s_2, \dots$ and $t_1, t_2, \dots$ be lists of $S$ and $T$ in which each element appears once. Interleave them: $s_1, t_1, s_2, t_2, \dots$, that is, $h(2k - 1) = s_k$ and $h(2k) = t_k$. Every element of $S \cup T$ is some $s_k$ or some $t_k$, so it appears. No element appears twice, because the $s_k$ are distinct, the $t_k$ are distinct, and no $s_k$ equals a $t_j$ since the sets are disjoint. So $h$ is a bijection from $\mathbb{N}$ to $S \cup T$. (b) Suppose, for contradiction, that the set $I$ of irrational numbers is countable. It is not finite: the numbers $\sqrt 2 + n$ for $n = 1, 2, 3, \dots$ are all irrational (if $\sqrt 2 + n$ were a rational $r$, then $\sqrt 2 = r - n$ would be rational) and all different. So $I$ is countably infinite. The set $\mathbb{Q}$ is countably infinite, and $\mathbb{Q}$ and $I$ have no element in common. By part (a), $\mathbb{R} = \mathbb{Q} \cup I$ is countably infinite. But $\mathbb{R}$ is uncountable. This contradiction shows that $I$ is uncountable. In this sense almost all real numbers are irrational.
