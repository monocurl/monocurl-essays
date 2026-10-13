# Pascal's triangle and the binomial theorem

> Routes across a street grid and the coefficients of (a + b)^n are the same numbers. We prove Pascal's rule, the binomial theorem and the row sums by counting.

Series: Discrete Mathematics (https://www.monocurl.com/monocurl-essays/discrete-math/)
Canonical: https://www.monocurl.com/monocurl-essays/discrete-math/pascals-triangle/
Keywords: Pascal's triangle, binomial theorem, binomial coefficients, Pascal's rule, binomial expansion, row sums of Pascal's triangle, lattice paths, hockey stick identity

[Figure 1, animation: Pascal's triangle growing row by row, from row 0 to row 7. Every row starts and ends with 1, and each other entry is the sum of the two entries above it, as the highlighted 15 + 20 = 35 shows.]

Multiply out $(a + b)^4$ and the coefficients are 1, 4, 6, 4, 1. Now forget algebra and count the shortest routes across a street grid from one corner to the corner two blocks east and two blocks north. There are 6, the middle coefficient. The route counts to the other corners four moves away are 1, 4, 4 and 1.

An expansion and a street map have no obvious reason to agree. They agree because both are counting the same thing, a set of choices, and the array of numbers that records those counts is the triangle growing in the animation above. We will build the triangle from the street grid, find a formula for its entries, and then see why algebra produces it too.

## Counting routes on a grid

A walker starts at the south-west corner of a grid of streets and may only move east or north, one block at a time. To how many places can she go, and in how many ways can she reach each one? Following whole routes gets confusing quickly. Ask a local question at each street corner instead: how many routes end here?

[Figure 2, steps: Counting the routes from the start to each street corner when every move goes east or north. A route arrives at a corner from the west or from the south, so each count is the sum of those two counts. The far corner can be reached in 56 ways.]

  - step: Along the south and west edges there is no choice: one route leads to each corner, straight along the edge.
  - step: Two routes reach the first inside corner: east then north, or north then east.
  - step: The last move into a corner comes from the west or from the south. So its count is the sum of those two counts: 3 = 2 + 1.
  - step: The same rule fills in every corner, row by row. The far corner gets 21 + 35 = 56.
The third step is the whole method. A route into a corner made its last move either eastward, from the corner to the west, or northward, from the corner to the south. It cannot have done both, so the routes into the corner are the routes to the western neighbor plus the routes to the southern neighbor. On the two edges only one of those neighbors exists, and the count stays at 1.

**Pause and try.** Using only the rule, find the number of routes to the corner three blocks east and two blocks north of the start. Then find the number to the corner two east and two north, and compare with the opening paragraph.

**Answer.** Fill in the corners in order. One block north of the start's row the counts are 1, 2, 3, 4, and two blocks north they are 1, 3, 6, 10. So the corner three east and two north has $4 + 6 = 10$ routes, and the corner two east and two north has $3 + 3 = 6$.

## The grid is a triangle

Group the corners by how many moves it takes to reach them. Zero moves reaches only the start. One move reaches two corners, two moves reach three, and the counts along these diagonals are 1, then 1 1, then 1 2 1, then 1 3 3 1. Turn the map so that the start is at the top and these diagonals become horizontal rows.

[Figure 3, animation: The street grid turned so that the start is at the top. East moves now go down and to the right, north moves down and to the left, and corners reached in the same number of moves lie in one row. The grid becomes part of Pascal's triangle, and the gray entries complete rows 0 to 8.]

In this position the rule "west neighbor plus south neighbor" reads "the two entries above". That gives a definition that no longer mentions streets.

**Definition.** **Pascal's triangle** is the array of numbers $T(n, k)$, for integers $0 \le k \le n$, defined by

$$
T(n, 0) = T(n, n) = 1, \qquad T(n, k) = T(n-1, k-1) + T(n-1, k) \quad \text{for } 0 < k < n.
$$

The numbers $T(n, 0), T(n, 1), \dots, T(n, n)$ form **row $n$**. The top row is row 0, and the first entry of each row is entry 0.

The triangle is named for Blaise Pascal, who wrote a treatise on it in 1654. It was known centuries earlier to mathematicians in India, Persia and China.

## A formula for the entries

The definition has a practical flaw: to find one entry of row 20 we must first compute rows 1 to 19. The street picture offers a way around this. A route to the corner $k$ blocks east and $n - k$ blocks north is a list of $n$ moves, $k$ of which are east, and the route is determined by saying which $k$ of the $n$ moves are the east ones. So the number of routes is the number of ways to choose $k$ positions out of $n$.

That count was found in [the lesson on permutations and combinations](@discrete-math/permutations-and-combinations). For integers $0 \le k \le n$, the number of $k$-element subsets of a set of $n$ distinct objects is written $\binom{n}{k}$, read "$n$ choose $k$", and equals

$$
\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!} = \frac{n!}{k!\,(n-k)!},
$$

because there are $n(n-1)\cdots(n-k+1)$ ordered ways to pick $k$ different objects and each subset is picked in $k!$ orders. For the corner two east and two north, $\binom{4}{2} = \frac{4 \cdot 3}{2} = 6$, as we found.

The street argument suggests that $T(n, k) = \binom{n}{k}$. To prove it without leaning on a picture, we show that the numbers $\binom{n}{k}$ obey the triangle's addition rule.

[Figure 4, image: Pascal's rule for choosing 2 letters out of 5. The ten choices split according to whether the last letter, E, is chosen. If it is, one more letter is needed from the other four. If it is not, both letters come from the other four.]

**Theorem.** (Pascal's rule.) For integers $0 < k < n$,

$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.
$$

**Proof.** Count the $k$-element subsets of $\{1, 2, \dots, n\}$ according to whether they contain the element $n$. A subset that contains $n$ consists of $n$ together with $k - 1$ elements of $\{1, \dots, n-1\}$, so there are $\binom{n-1}{k-1}$ of these. A subset that does not contain $n$ is a $k$-element subset of $\{1, \dots, n-1\}$, and there are $\binom{n-1}{k}$ of these. Every $k$-element subset is of exactly one of the two kinds, so the total, $\binom{n}{k}$, is the sum.

The proof never used the formula with factorials. Problem 5 asks you to check the rule from the formula as well, and it is a useful exercise in fractions, but the counting argument is the one that says why the rule holds.

**Theorem.** For all integers $0 \le k \le n$, the entry $T(n, k)$ of Pascal's triangle equals $\binom{n}{k}$.

**Proof.** Row 0 agrees, since $T(0, 0) = 1 = \binom{0}{0}$. Now suppose row $n - 1$ agrees, for some $n \ge 1$. The ends of row $n$ agree, because $\binom{n}{0} = \binom{n}{n} = 1$ (there is one way to choose nothing and one way to choose everything). For $0 < k < n$,

$$
T(n, k) = T(n-1, k-1) + T(n-1, k) = \binom{n-1}{k-1} + \binom{n-1}{k} = \binom{n}{k},
$$

using the definition of $T$, then the agreement of row $n - 1$, then Pascal's rule. So row $n$ agrees. Since row 0 agrees, so does row 1, hence row 2, and so on through every row.

The last sentence of that proof, in which each row hands the property on to the next, is an argument by mathematical induction. It gets [a lesson of its own](@discrete-math/induction).

## Expanding $(a+b)^n$

Now the algebra. To expand $(a + b)^2 = (a + b)(a + b)$ with the distributive law, multiply each term of the first factor by each term of the second. The [area picture of the distributive law](@algebra/distributive-law-area) shows the four products as the four parts of a square of side $a + b$.

[Figure 5, image: A square of side a + b cut into four parts. Each part is the product of one term from the first factor and one term from the second. The two rectangles ab and ba are equal, which is where the coefficient 2 in a^2 + 2ab + b^2 comes from.]

Each product is made by taking one term from each factor: $a$ or $b$ from the first, and $a$ or $b$ from the second. There are $2 \times 2 = 4$ ways to do that. Two of them, $ab$ and $ba$, are equal, and that is the only reason a coefficient other than 1 appears.

**Pause and try.** Expanding $(a + b)^3 = (a+b)(a+b)(a+b)$ means taking one term from each of three factors. How many products are there before collecting like terms? How many of them equal $a^2b$?

**Answer.** Each of the three factors offers 2 choices, so there are $2^3 = 8$ products. A product equals $a^2b$ when $b$ is taken from exactly one factor, and that factor can be the first, second or third. So 3 of the 8 products are $a^2b$.

[Figure 6, steps: Expanding (a+b)^3 by taking a or b from each of the three factors. The eight products are grouped by how many times b was taken. The group sizes 1, 3, 3, 1 are the coefficients, and they are row 3 of Pascal's triangle.]

  - step: The eight ways to take a or b from each of the three factors, sorted by how many times b is taken.
  - step: Multiply along each row. The order of the letters does not matter, so rows with the same number of b's give the same product.
  - step: Collect equal products. Their numbers are 1, 3, 3, 1: the ways to choose which factors supply the b.
For three factors the square becomes a cube of side $a + b$, and the eight products are eight blocks.

[Figure 7, image: A cube of side a + b cut by three planes into eight blocks, drawn pulled apart. There is one cube a^3, three slabs a^2b, three rods ab^2 and one small cube b^3, so (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3.]

Nothing changes with more factors except that we can no longer draw the picture.

**Theorem.** (Binomial theorem.) Let $a$ and $b$ be numbers and let $n \ge 0$ be an integer. With the convention that $x^0 = 1$ for every number $x$, including $x = 0$,

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k}\, a^{n-k}\, b^{k} = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \dots + \binom{n}{n}b^n.
$$

**Proof.** For $n = 0$ both sides are 1. Let $n \ge 1$ and write $(a+b)^n$ as a product of $n$ factors $(a + b)$. By the distributive law, applied repeatedly, the product equals the sum of all the products formed by taking one term, $a$ or $b$, from each factor. Consider one such product in which $b$ is taken from exactly $k$ of the factors and $a$ from the other $n - k$. Since multiplication of numbers is commutative, it equals $a^{n-k}b^k$. The number of products of this kind is the number of ways to choose which $k$ of the $n$ factors supply the $b$, which is $\binom{n}{k}$. Collecting equal products for $k = 0, 1, \dots, n$ gives the formula.

The numbers $\binom{n}{k}$ are called **binomial coefficients** for this reason: a binomial is a sum of two terms. One step of the proof was quicker than it looks. "Applied repeatedly" hides a small induction on the number of factors, and the whole theorem can instead be proved by induction on $n$ using Pascal's rule. Problem 9 does that in full.

**Key idea.** Entry $k$ of row $n$ counts the ways to choose $k$ things out of $n$. For routes the things are the moves that go east. For $(a+b)^n$ they are the factors that supply $b$. Splitting on whether the last thing is chosen gives the addition rule.

## Row sums

Add up each of the first few rows: 1, 2, 4, 8, 16. The sums double.

**Pause and try.** Row 5 is 1, 5, 10, 10, 5, 1, with sum 32. Before reading on, find a reason why the sum of row 6 must be 64 without computing row 6. Use the rule that builds the triangle.

**Answer.** Each entry of row 6 is the sum of the one or two entries of row 5 above it. Adding all of row 6 therefore adds every entry of row 5 exactly twice: once in the entry below and to its left, once in the entry below and to its right. So the sum is $2 \times 32 = 64$.

[Figure 8, animation: Each entry of row 3 sends a copy of itself down to the left and down to the right. The copies that land together add to give row 4. Every entry of row 3 is used exactly twice, so the sum doubles from 8 to 16.]

**Theorem.** For every integer $n \ge 0$, $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n$.

**Proof.** *By counting.* The term $\binom{n}{k}$ is the number of subsets of $\{1, \dots, n\}$ with exactly $k$ elements, so the sum counts all subsets, of every size. A subset is determined by deciding, for each of the $n$ elements in turn, whether it is in or out. That is $n$ decisions with 2 options each, so by the product rule there are $2^n$ subsets.

*By the binomial theorem.* Put $a = b = 1$: $(1 + 1)^n = \sum_k \binom{n}{k} 1^{n-k} 1^k$.

The doubling argument of the last exercise is a third proof, and the three are the same idea in different clothes. For the walker it says: there are $2^n$ routes of $n$ moves, since each move is east or north, and sorting them by where they end gives row $n$.

## Worked examples

**Worked example.** **Expand $(x + 2)^5$.**

Row 5 is $1, 5, 10, 10, 5, 1$. Take $a = x$ and $b = 2$, so the term for each $k$ is $\binom{5}{k} x^{5-k} 2^k$, and the powers of 2 are $1, 2, 4, 8, 16, 32$:

$$
(x+2)^5 = x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32.
$$

*Check* by setting $x = 1$: the left side is $3^5 = 243$, and $1 + 10 + 40 + 80 + 80 + 32 = 243$.

**Worked example.** **Powers of 11.** $11^2 = 121$, $11^3 = 1331$ and $11^4 = 14641$ are rows 2, 3 and 4 read as numerals. Why, and does it continue?

Write $11 = 10 + 1$. By the binomial theorem $11^n = \sum_k \binom{n}{k} 10^{n-k}$, so the binomial coefficients are the digits of $11^n$ as long as each of them is a single digit. Row 5 contains 10, so there the digits carry: $11^5 = 100000 + 50000 + 10000 + 1000 + 50 + 1 = 161051$, which is not "1 5 10 10 5 1" written out.

**Worked example.** **A sum down a diagonal.** Show that $\binom{2}{2} + \binom{3}{2} + \binom{4}{2} + \binom{5}{2} + \binom{6}{2} = \binom{7}{3}$, and explain why.

The left side is $1 + 3 + 6 + 10 + 15 = 35$, and $\binom{7}{3} = \frac{7 \cdot 6 \cdot 5}{6} = 35$. For the reason, count the 3-element subsets of $\{1, \dots, 7\}$ by their largest element. If the largest element is $m + 1$, the other two are chosen from $\{1, \dots, m\}$ in $\binom{m}{2}$ ways. The largest element can be $3, 4, 5, 6$ or $7$, so $m$ runs from 2 to 6 and the counts are the five terms on the left. The same argument proves $\binom{k}{k} + \binom{k+1}{k} + \dots + \binom{n}{k} = \binom{n+1}{k+1}$ in general.

[Figure 9, image: The entries \binom{2}{2} to \binom{6}{2} run down a diagonal of Pascal's triangle, and their sum is the entry below the end of the diagonal, one step to the other side. The shape gives the result its informal name, the hockey stick identity.]

## Where the theorem stops

The binomial theorem has two hypotheses that are easy to overlook. The exponent $n$ is a non-negative integer, because the proof multiplies out $n$ factors. For an exponent such as $\frac12$ there is no finite expansion; Newton found an infinite series that plays the same role, and making sense of it needs calculus. And the proof used $ab = ba$. For objects whose multiplication is not commutative the collecting step fails. Square matrices are an example: $(A + B)^2 = A^2 + AB + BA + B^2$, and this is not $A^2 + 2AB + B^2$ unless $AB = BA$.

**Common mistake.** **Distributing the exponent.** "$(a + b)^2 = a^2 + b^2$" drops the two rectangles in the square, and in general it drops every term of the expansion except the first and last. Test with numbers: $(1 + 1)^2 = 4$ but $1^2 + 1^2 = 2$. The middle terms vanish only if $a$ or $b$ is 0.

**Common mistake.** **Losing a coefficient or a sign inside $b$.** In $(2x - 3)^4$ the two terms are $a = 2x$ and $b = -3$, and the powers apply to all of each. The term with $k = 1$ is $\binom{4}{1}(2x)^3(-3) = 4 \cdot 8x^3 \cdot (-3) = -96x^3$. Writing $4 \cdot 2x^3 \cdot 3$ makes two errors at once. Negative $b$ makes the signs alternate.

A third slip is to miscount rows. Row $n$ is the row whose second entry is $n$, so the top row is row 0, and the coefficients of $(a+b)^4$ are in the fifth line of the triangle as drawn.

## Stepping back

The difficulty at the start was that two unrelated problems gave the same numbers. The resolution is that both are sums over the ways to choose $k$ things out of $n$, and that such choices can be counted by a rule which looks one step back: the last thing is either chosen or not. The triangle is the table that rule generates, and the formula $\frac{n!}{k!(n-k)!}$ is a shortcut into the middle of the table. When binomial coefficients appear in a problem, look for the hidden choice of $k$ things from $n$. Their largest application is in probability, where they give the [binomial distribution](@probability/binomial-distribution) for the number of successes in $n$ trials.

**Check yourself.** What is the coefficient of $a^2b^3$ in the expansion of $(a + b)^5$?
Answer: 10 $b$ comes from 3 of the 5 factors, and $\binom{5}{3} = \frac{5 \cdot 4 \cdot 3}{6} = 10$.

**Recap.** - Pascal's triangle: 1s on the edges, and each other entry is the sum of the two above it. Row $n$, entry $k$ is $\binom{n}{k} = \frac{n!}{k!(n-k)!}$, counting from 0.
- Pascal's rule $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$: a $k$-element subset either contains the last element or does not.
- The number of routes to a corner $k$ blocks east and $n - k$ blocks north is $\binom{n}{k}$: choose which moves go east.
- Binomial theorem: $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$, because $a^{n-k}b^k$ arises once for each choice of the $k$ factors that supply $b$.
- Row $n$ sums to $2^n$, the number of subsets of an $n$-element set.
- The theorem needs a non-negative integer exponent and commuting $a$ and $b$.

## Problems

Problems 1 to 4 are direct. Problems 5 to 7 ask for proofs or estimates. Problems 8 and 9 are longer.

**Problem 1.** Write out rows 6 and 7 of Pascal's triangle and use row 7 to expand $(x + 1)^7$.

**Solution.** Row 5 is $1, 5, 10, 10, 5, 1$. Adding neighbors: row 6 is $1, 6, 15, 20, 15, 6, 1$ and row 7 is $1, 7, 21, 35, 35, 21, 7, 1$. With $a = x$ and $b = 1$,

$$
(x+1)^7 = x^7 + 7x^6 + 21x^5 + 35x^4 + 35x^3 + 21x^2 + 7x + 1.
$$

Check: the coefficients sum to $128 = 2^7$, the value at $x = 1$.

**Problem 2.** Expand $(2x - 3)^4$.

**Solution.** Row 4 is $1, 4, 6, 4, 1$, with $a = 2x$ and $b = -3$:

$$
(2x)^4 + 4(2x)^3(-3) + 6(2x)^2(-3)^2 + 4(2x)(-3)^3 + (-3)^4 = 16x^4 - 96x^3 + 216x^2 - 216x + 81.
$$

Check at $x = 1$: $(2 - 3)^4 = 1$ and $16 - 96 + 216 - 216 + 81 = 1$.

**Problem 3.** A walker moves only east or north on a street grid. (a) How many routes lead from the start to the corner 6 blocks east and 4 blocks north? (b) How many of those pass through the corner 3 east and 2 north?

**Solution.** (a) A route is a list of 10 moves of which 4 are north, so there are $\binom{10}{4} = \frac{10 \cdot 9 \cdot 8 \cdot 7}{24} = 210$. (b) A route through the middle corner is a route to it followed by a route from it. There are $\binom{5}{2} = 10$ routes to the corner. From there the walker needs 3 more blocks east and 2 more north, again $\binom{5}{2} = 10$ routes, whatever the first half was. By the product rule there are $10 \cdot 10 = 100$.

**Problem 4.** Find the coefficient of $x^2y^3$ in $(x - 2y)^5$.

**Solution.** The term with $b = -2y$ taken from 3 factors is $\binom{5}{3} x^2 (-2y)^3 = 10 \cdot (-8)\, x^2y^3$, so the coefficient is $-80$.

**Problem 5.** Prove Pascal's rule from the formula $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$, for $0 < k < n$.

**Solution.** Put the two fractions over the common denominator $k!\,(n-k)!$. Since $k! = k \cdot (k-1)!$ and $(n-k)! = (n-k)\cdot(n-k-1)!$,

$$
\binom{n-1}{k-1} + \binom{n-1}{k} = \frac{(n-1)!}{(k-1)!\,(n-k)!} + \frac{(n-1)!}{k!\,(n-k-1)!} = \frac{(n-1)!\,k}{k!\,(n-k)!} + \frac{(n-1)!\,(n-k)}{k!\,(n-k)!}.
$$

The numerators add to $(n-1)!\,(k + n - k) = (n-1)!\,n = n!$, so the sum is $\frac{n!}{k!\,(n-k)!} = \binom{n}{k}$.

**Problem 6.** Show that for $n \ge 1$ the alternating sum of row $n$ is zero: $\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \dots + (-1)^n\binom{n}{n} = 0$. Give a proof from the binomial theorem and a counting proof.

**Solution.** *Binomial theorem.* Put $a = 1$ and $b = -1$: $0 = (1 - 1)^n = \sum_k \binom{n}{k}(-1)^k$, valid for $n \ge 1$. *Counting.* The claim says that $\{1, \dots, n\}$ has as many subsets of even size as of odd size. Match each subset $S$ with the subset obtained by toggling the element $n$: remove $n$ if $S$ contains it, add it if not. This changes the size by one, so it matches even-sized subsets with odd-sized ones, and toggling twice returns the original, so the matching is a bijection. Hence the two kinds are equally numerous, each $2^{n-1}$. (For $n = 0$ the only subset is the empty set and the sum is 1, which is why $n \ge 1$ is needed.)

**Problem 7.** Use the binomial theorem to compute $1.01^{10}$ to five decimal places without a calculator.

**Solution.** $(1 + 0.01)^{10} = 1 + 10(0.01) + 45(0.01)^2 + 120(0.01)^3 + 210(0.01)^4 + \dots = 1 + 0.1 + 0.0045 + 0.00012 + 0.0000021 + \dots$ The first five terms add to $1.1046221$. The next term is $252 \times 10^{-10}$, about $0.00000003$, and the later ones are smaller still, so $1.01^{10} \approx 1.10462$.

**Problem 8.** Prove that $\displaystyle\binom{n}{0}^2 + \binom{n}{1}^2 + \dots + \binom{n}{n}^2 = \binom{2n}{n}$ by counting routes on a grid. Check it for $n = 3$.

**Solution.** Count the routes from the start to the corner $n$ blocks east and $n$ blocks north. Each has $2n$ moves of which $n$ are east, so there are $\binom{2n}{n}$. Now sort the routes by where they are after exactly $n$ moves. At that moment a route is at a corner $k$ blocks east and $n - k$ blocks north for exactly one $k$ between 0 and $n$. There are $\binom{n}{k}$ ways to get there. The remaining $n$ moves must include $n - k$ east moves, which can be placed in $\binom{n}{n-k} = \binom{n}{k}$ ways. By the product rule $\binom{n}{k}^2$ routes pass through that corner, and summing over $k$ counts every route once. For $n = 3$: $1 + 9 + 9 + 1 = 20 = \binom{6}{3}$.

**Problem 9.** Prove the binomial theorem by induction on $n$: assume the formula holds for the exponent $n$, multiply by $(a + b)$, and use Pascal's rule to obtain the formula for $n + 1$.

**Solution.** For $n = 0$ both sides equal 1. Suppose $(a+b)^n = \sum_{k=0}^n \binom{n}{k}a^{n-k}b^k$ for some $n \ge 0$. Then

$$
(a+b)^{n+1} = (a + b)\sum_{k=0}^n \binom{n}{k}a^{n-k}b^k = \sum_{k=0}^n \binom{n}{k}a^{n+1-k}b^k + \sum_{k=0}^n \binom{n}{k}a^{n-k}b^{k+1}.
$$

In the second sum rename $k + 1$ as $k$, so it becomes $\sum_{k=1}^{n+1} \binom{n}{k-1}a^{n+1-k}b^{k}$. Now both sums contain the same monomials $a^{n+1-k}b^k$. The monomial $a^{n+1}$ (that is, $k = 0$) occurs only in the first sum, with coefficient $\binom{n}{0} = 1 = \binom{n+1}{0}$. The monomial $b^{n+1}$ occurs only in the second, with coefficient $\binom{n}{n} = 1 = \binom{n+1}{n+1}$. For $1 \le k \le n$ the coefficient of $a^{n+1-k}b^k$ is $\binom{n}{k} + \binom{n}{k-1}$, which is $\binom{n+1}{k}$ by Pascal's rule. So $(a+b)^{n+1} = \sum_{k=0}^{n+1}\binom{n+1}{k}a^{n+1-k}b^k$, which is the formula for $n + 1$. Since it holds for $n = 0$, it holds for every $n \ge 0$.
