# Permutations and combinations: counting without listing

> Five runners and three medals give 60 podiums but only 10 groups of medalists. The product rule, permutations and combinations, each one proved.

Series: Discrete Mathematics (https://www.monocurl.com/monocurl-essays/discrete-math/)
Canonical: https://www.monocurl.com/monocurl-essays/discrete-math/permutations-and-combinations/
Keywords: permutations and combinations, n choose k, product rule, factorial, combinations formula, permutations formula, counting principle, binomial coefficient

[Figure 1, animation: All 60 possible podiums for five runners, each written gold, silver, bronze. They are then sorted so that every row holds the same three runners. Ten rows form, with six podiums in each.]

Five runners, A, B, C, D and E, line up for a final. Here are two questions about how it can end. Gold, silver and bronze medals are awarded, so how many different podiums are possible? And the top three also qualify for the next round, where nobody cares in what order they finished today, so how many different groups of three qualifiers are possible?

Both can be answered by writing out a list, and it is worth starting one to see what goes wrong. ABC, ABD, ABE, ACB, and by the twentieth entry you are no longer sure whether ADB is already there. The answers are 60 and 10. A list that long is easy to get wrong and tells you nothing about what happens with eight runners, or with fifty-two cards. We want a way to get both numbers, and the factor of 6 between them, without listing anything.

## Two medals first

Start with a smaller race for medals: gold and silver only. Gold can go to any of the 5 runners. Once it has, silver can go to any of the 4 who are left. Lay the outcomes out with one row for each gold medalist.

[Figure 2, image: The 20 ways to award gold and silver to five runners, one row for each gold medalist. The rows list different silver medalists, but every row has exactly four entries, so the total is 5 rows of 4.]

There are 5 rows with 4 entries each, so there are $5 \times 4 = 20$ outcomes. Look at what the multiplication used. The rows do not contain the same silver medalists: row A lists B, C, D, E, and row B lists A, C, D, E. What the rows share is their length, and their length is all that the count needs.

**Pause and try.** Now add the bronze medal. Predict the number of podiums, and say what has to be true of the 20 gold and silver outcomes for your method to be justified.

**Answer.** Each of the 20 gold and silver outcomes leaves 3 runners for bronze. Which three depends on the outcome, but there are always exactly three. So the podiums form 20 rows of 3, and there are $20 \times 3 = 60$.

## The product rule

The same count can be drawn as a tree, where each level is one decision.

[Figure 3, steps: The tree of choices for a podium. Every runner can take gold, each gold medalist leaves four runners for silver, and each gold and silver pair leaves three for bronze. The 60 leaves are the 60 podiums.]

  - step: Any of the 5 runners can take gold, so the tree starts with 5 branches.
  - step: Whoever took gold, 4 runners are left for silver. Every branch splits in 4, which gives 5 × 4 = 20.
  - step: Whoever took gold and silver, 3 runners are left for bronze. Each of the 20 branches splits in 3.
  - step: A podium is one route from the top to a leaf. This route is gold C, silver A, bronze E.
Each level multiplies the number of branches by the number of options at that level, and it can do so because every branch at one level splits into the same number of branches at the next. Stated with care, the principle is this.

**Theorem.** (Product rule.) Let $S$ be a finite set of ordered pairs $(a, b)$. Suppose that exactly $m$ different objects occur as first entries, and that each of them is paired in $S$ with exactly $n$ second entries. Then $S$ has $mn$ elements.

For the two medals, $S$ is the set of pairs (gold, silver), with $m = 5$ and $n = 4$. The phrase "each of them is paired with exactly $n$" is the equal row lengths. The theorem does not ask the second entries to be the same from row to row.

**Proof.** List the first entries as $a_1, \dots, a_m$. For each $i$, list the $n$ second entries that occur with $a_i$, in any order, as $b_{i,1}, \dots, b_{i,n}$. Send the pair $(a_i, b_{i,j})$ to the cell in row $i$ and column $j$ of a grid with $m$ rows and $n$ columns. Every pair in $S$ is sent to exactly one cell, and every cell receives exactly one pair, namely $(a_i, b_{i,j})$. Such a matching between two sets, which uses each element of each set exactly once, is called a **bijection**, and two finite sets joined by a bijection have the same number of elements. The grid has $m$ rows of $n$ cells, which is $n + n + \dots + n = mn$ cells.

The rule extends to any number of decisions. A podium is a triple, and we can regard it as a pair whose first entry is the (gold, silver) outcome and whose second entry is the bronze medalist. There are 20 first entries, each paired with exactly 3 second entries, so there are 60 triples. Repeating this, a process of $k$ decisions with $n_1$ options for the first, $n_2$ for the second whatever the first was, and so on, has $n_1 n_2 \cdots n_k$ outcomes. (Made formal, "repeating this" is a proof by [induction](@discrete-math/induction) on the number of decisions.)

The hypothesis matters. Change the rules so that silver must go to a runner who comes later in the alphabet than the gold medalist.

[Figure 4, image: A count where the product rule does not apply. If the silver medalist must come later in the alphabet than the gold medalist, the five gold medalists leave 4, 3, 2, 1 and 0 options. The branches have different sizes, so they must be added.]

Now gold for A leaves four options and gold for E leaves none. There is no single $n$, so there is nothing to multiply by, and the honest count is the sum $4 + 3 + 2 + 1 + 0 = 10$. Before multiplying, check that the number of options at a step is the same whatever came before.

## Arrangements in order

The podium count generalizes directly, and the general objects have names.

**Definition.** Let $n \ge k \ge 0$ be integers. A **$k$-permutation** of a set of $n$ distinct objects is an ordered list of $k$ different objects from the set. A **permutation** of the set is an ordered list of all $n$ of them. For $n \ge 1$, **$n$ factorial** is $n! = n(n-1)(n-2)\cdots 2 \cdot 1$, and $0!$ is defined to be $1$.

A podium is a 3-permutation of the five runners, and a complete finishing order is a permutation of them.

**Theorem.** For integers $0 \le k \le n$, the number of $k$-permutations of $n$ distinct objects is

$$
P(n, k) = n(n-1)(n-2)\cdots(n-k+1) = \frac{n!}{(n-k)!}.
$$

In particular, $n$ distinct objects have $n!$ permutations.

**Proof.** If $k = 0$ the only list is the empty one, and a product with no factors is taken to be 1, so the formula holds. For $k \ge 1$, build the list one position at a time. The first position can hold any of the $n$ objects. When position $i$ is reached, $i - 1$ different objects have been used, and whichever they were, exactly $n - (i - 1)$ remain. By the product rule for $k$ decisions the number of lists is $n(n-1)\cdots(n-k+1)$, a product of $k$ factors. For the second form, multiply and divide by $(n-k)!$: the numerator becomes $n(n-1)\cdots(n-k+1)\cdot(n-k)\cdots 1 = n!$. With $k = n$ this gives $n!/0! = n!$.

For the runners, $P(5, 3) = 5 \cdot 4 \cdot 3 = 60$ and also $\frac{5!}{2!} = \frac{120}{2} = 60$. The whole field can finish in $5! = 120$ orders. Factorials grow quickly: $10! = 3{,}628{,}800$, and a deck of 52 cards has $52!$ orders, a number with 68 digits.

## When order does not matter

Now the second question. A group of three qualifiers is a set, and the set $\{A, C, E\}$ is the same group as $\{E, A, C\}$. The product rule counts ordered things, so it cannot be applied to sets directly. Again start small, with groups of two.

**Pause and try.** There are 20 ordered outcomes for gold and silver. How many different pairs of medalists are there, if we no longer care which of the two got gold? In the array of 20, how often does the pair B and D occur?

**Answer.** The pair occurs twice, as (B, D) and as (D, B). The same is true of every pair, so the 20 ordered outcomes consist of 10 pairs, each listed twice.

[Figure 5, image: Every way to give gold (rows) and silver (columns) to five runners. The diagonal is impossible, since nobody wins both. Each cell in the shaded upper triangle has a mirror image below the diagonal with the same two runners, so the 20 ordered outcomes contain 10 different pairs.]

Dividing by 2 was legitimate for one reason: every pair appears the same number of times. For three qualifiers the same question has to be asked of the 60 podiums.

**Pause and try.** How many of the 60 podiums consist of the runners A, C and E in some order? Would the count differ for B, D and E? Use your answers to find the number of groups of three.

**Answer.** Ordering A, C, E is itself a podium problem with three runners: $3 \cdot 2 \cdot 1 = 6$ orders. Nothing in that count depends on which three runners they are, so every group of three accounts for exactly 6 podiums, and there are $60 / 6 = 10$ groups.

[Figure 6, steps: Forgetting the order sends six podiums to the same group of three. This holds for every group, so the 60 podiums fall into bundles of six, and the number of groups is 60 divided by 6.]

  - step: The group A, C, E appears among the 60 podiums six times, once for each order of its members.
  - step: Any other group does the same. B, D, E can also be ordered in 3 × 2 × 1 = 6 ways.
  - step: Every bundle has six podiums, so the number of groups is 60 / 6 = 10.
This is what the animation at the top of the page carries out for all ten groups at once. Here is the general statement.

**Definition.** Let $0 \le k \le n$ be integers. A **$k$-combination** of a set of $n$ distinct objects is a subset with $k$ elements. The number of them is written $\binom{n}{k}$ and read "$n$ choose $k$".

**Theorem.** For integers $0 \le k \le n$,

$$
\binom{n}{k} = \frac{P(n, k)}{k!} = \frac{n(n-1)\cdots(n-k+1)}{k!} = \frac{n!}{k!\,(n-k)!}.
$$

**Proof.** Let $f$ be the rule that sends each $k$-permutation of the $n$ objects to the set of its entries, which is a $k$-combination. Fix a $k$-combination $T$. The lists that $f$ sends to $T$ are exactly the ordered lists of all $k$ elements of $T$, and by the previous theorem there are $P(k, k) = k!$ of them. So the $P(n, k)$ lists are split into groups of exactly $k!$, one group for each $k$-combination. Counting the lists group by group gives $P(n, k) = k! \cdot \binom{n}{k}$. Divide by $k!$.

The step that carries the weight is "exactly $k!$ for every $T$". If the groups had different sizes, division would give nonsense, as the product rule did when the branches were uneven.

**Key idea.** Count ordered selections of $k$ different objects from $n$ with the product rule: $n(n-1)\cdots(n-k+1)$. If the order is irrelevant, every selection has been counted once for each of its $k!$ orders, so divide by $k!$.

## One identity, two proofs

**Pause and try.** Compute $\binom{5}{2}$ and $\binom{5}{3}$ from the formula. Then explain the result without any formula.

**Answer.** $\binom{5}{2} = \frac{5 \cdot 4}{2} = 10$ and $\binom{5}{3} = \frac{5 \cdot 4 \cdot 3}{6} = 10$. Choosing the three runners who qualify is the same decision as choosing the two who do not.

[Figure 7, image: The ten groups of three runners. In each row the colored tiles are the three who qualify and the gray tiles are the two who do not. Read by its colored tiles the picture lists every 3-combination; read by its gray tiles it lists every 2-combination.]

**Theorem.** For integers $0 \le k \le n$, $\displaystyle\binom{n}{k} = \binom{n}{n-k}$.

**Proof.** *By algebra.* Replace $k$ by $n - k$ in the formula:

$$
\binom{n}{n-k} = \frac{n!}{(n-k)!\,\bigl(n-(n-k)\bigr)!} = \frac{n!}{(n-k)!\,k!} = \binom{n}{k}.
$$

*By counting.* Send each $k$-element subset of the $n$ objects to its complement, the set of $n - k$ objects it leaves out. Different subsets have different complements, and every $(n-k)$-element subset is the complement of exactly one $k$-element subset, namely its own complement. So this is a bijection between the $k$-combinations and the $(n-k)$-combinations, and the two counts agree.

Both proofs are complete, and they do different jobs. The algebra confirms the identity and gives no reason for it. The counting argument never mentions a factorial: it shows the two numbers count the same decisions. An argument of this kind, which proves an equation by counting one collection in two ways or by matching two collections, is called a **combinatorial proof**.

Here is a second identity, where the counting argument also suggests the statement. Suppose the three qualifiers must name one of themselves captain. We can pick the group and then its captain, in $10 \times 3$ ways. Or we can pick the captain from all five runners and then the two who join them from the remaining four, in $5 \times \binom{4}{2} = 5 \times 6$ ways.

[Figure 8, animation: The 30 ways to pick three qualifiers and name one of them captain (solid tile). Arranged by group there are 10 stacks of 3. The same 30 cards are then rearranged by captain into 5 columns of 6.]

Nothing here is special to 5 and 3.

**Theorem.** For integers $1 \le k \le n$, $\displaystyle k\binom{n}{k} = n\binom{n-1}{k-1}$.

**Proof.** *By counting.* Count the pairs $(T, c)$ in which $T$ is a $k$-element subset of $n$ objects and $c$ is an element of $T$. Choosing $T$ first, there are $\binom{n}{k}$ subsets and each contains exactly $k$ candidates for $c$, so by the product rule there are $k\binom{n}{k}$ pairs. Choosing $c$ first, there are $n$ candidates, and each can be completed to a subset by choosing $k - 1$ of the other $n - 1$ objects, in exactly $\binom{n-1}{k-1}$ ways, so there are $n\binom{n-1}{k-1}$ pairs. Both expressions count the same set.

*By algebra.* $k \cdot \dfrac{n!}{k!\,(n-k)!} = \dfrac{n!}{(k-1)!\,(n-k)!} = n \cdot \dfrac{(n-1)!}{(k-1)!\,(n-k)!}$, and $(n-1) - (k-1) = n - k$.

## Worked examples

**Worked example.** **Eight sprinters.** A final has 8 sprinters. How many podiums are possible, and how many groups of three medalists?

A podium is an ordered list of 3 different sprinters, so the count is $P(8, 3) = 8 \cdot 7 \cdot 6 = 336$. A group of medalists is a set of 3, and each set appears as $3! = 6$ podiums, so there are $\binom{8}{3} = 336 / 6 = 56$ groups. *Check* with the factorial form: $\frac{8!}{3!\,5!} = \frac{40320}{6 \cdot 120} = 56$.

**Worked example.** **Locker codes.** A code is three letters followed by two digits. How many codes are there (a) if symbols may repeat, and (b) if no symbol may be used twice?

Five decisions are made in sequence, so this is the product rule, and the only work is to find the number of options at each step. (a) With repeats allowed each letter has 26 options and each digit has 10, whatever came before: $26^3 \cdot 10^2 = 17{,}576 \cdot 100 = 1{,}757{,}600$. (b) Without repeats the letters have $26$, $25$, $24$ options in turn. The digits cannot clash with letters, so they have $10$ and then $9$: $26 \cdot 25 \cdot 24 \cdot 10 \cdot 9 = 15{,}600 \cdot 90 = 1{,}404{,}000$. *Check:* (b) must be smaller than (a), and it is.

**Worked example.** **At least one.** A club has 5 women and 4 men. How many committees of 3 contain at least one woman?

"At least one" covers committees with one, two or three women, so it is easier to count the opposite and subtract. There are $\binom{9}{3} = \frac{9 \cdot 8 \cdot 7}{6} = 84$ committees in all, and $\binom{4}{3} = 4$ of them contain no woman. The answer is $84 - 4 = 80$.

*Check* by cases. One woman and two men: $5 \cdot \binom{4}{2} = 30$. Two women and one man: $\binom{5}{2} \cdot 4 = 40$. Three women: $\binom{5}{3} = 10$. Total $30 + 40 + 10 = 80$.

## Where the formulas stop

Each formula answers one kind of question, and neighboring questions have different answers.

*Repetition allowed.* If a runner could win more than one medal, each of the three medals would have 5 options regardless of the others, and the product rule would give $5^3 = 125$. In general there are $n^k$ ordered lists of length $k$ from $n$ objects when repeats are allowed. The formula $P(n, k)$ is for lists without repeats.

*The ends of the range.* With $k = 0$ there is one list, the empty one, and one subset, the empty set, so $P(n, 0) = \binom{n}{0} = 1$. The factorial formula agrees only because $0!$ was defined as 1, and that is the reason for the definition. With $k > n$ there are no lists without repeats and no subsets. The product $n(n-1)\cdots(n-k+1)$ then contains the factor $0$, while the form $\frac{n!}{(n-k)!}$ is meaningless there, which is why the theorems assume $k \le n$.

*Objects that are not distinct.* The word LEVEL has 5 letters but fewer than $5!$ arrangements, because swapping its two L's changes nothing. Problem 6 handles it with the same division idea.

**Common mistake.** **Using the wrong one of the two.** "Choose 3 of 5 pizza toppings: $5 \cdot 4 \cdot 3 = 60$ ways." This counts mushroom, olive, onion and onion, olive, mushroom as different pizzas. Ask whether swapping two of the chosen things gives a different outcome. For medals it does, so use $P(n, k)$. For toppings it does not, so divide by $3!$ and get 10.

**Common mistake.** **Counting in two stages what has no stages.** "At least one woman on a committee of 3 from 5 women and 4 men: choose a woman in 5 ways, then any 2 of the remaining 8 people in $\binom{8}{2} = 28$ ways, so 140." The true count is 80. The method labels one woman as "the one chosen first", and a committee with two women can be labeled in two ways, one with three women in three ways. Indeed $30 \cdot 1 + 40 \cdot 2 + 10 \cdot 3 = 140$. The product rule counts pairs (woman, rest), and several pairs give the same committee.

## Stepping back

Two ideas did all the work. The product rule counts ordered outcomes built by a sequence of decisions, provided the number of options at each decision does not depend on the earlier ones. The division step converts an ordered count into an unordered one, provided every unordered object was counted the same number of times. Both provisos are the place to look when a count comes out wrong.

The numbers $\binom{n}{k}$ satisfy many identities, and the two-way counting used here is the standard way to find and prove them. Arranged in a triangle, they obey a simple addition rule, which is the subject of [the lesson on Pascal's triangle](@discrete-math/pascals-triangle).

**Check yourself.** A class of 10 students elects a president and a vice-president (different people). How many outcomes are possible?
Answer: 90 The two offices are different, so order matters: $P(10, 2) = 10 \cdot 9 = 90$.

**Recap.** - Product rule: if a first decision has $m$ options and each leaves exactly $n$ options for a second, there are $mn$ outcomes. The proof is a bijection with an $m \times n$ grid.
- Ordered lists of $k$ different objects from $n$: $P(n, k) = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$. All $n$ objects: $n!$ orders.
- Subsets of size $k$: $\binom{n}{k} = \frac{P(n,k)}{k!} = \frac{n!}{k!\,(n-k)!}$, because each subset is counted $k!$ times among the ordered lists.
- $\binom{n}{k} = \binom{n}{n-k}$ (choosing what to take is choosing what to leave) and $k\binom{n}{k} = n\binom{n-1}{k-1}$ (a group with a captain, counted two ways).
- With repeats allowed, there are $n^k$ ordered lists.
- Multiply only when the number of options is the same on every branch. Divide only when every object is counted equally often.

## Problems

The first three use the formulas directly. The next four need a choice of method or an explanation. The last two extend the lesson.

**Problem 1.** Seven different books are on a desk. (a) In how many ways can three of them be lined up on a shelf? (b) In how many ways can three of them be chosen to take on a trip?

**Solution.** (a) The shelf has an order, so this is $P(7, 3) = 7 \cdot 6 \cdot 5 = 210$. (b) A choice is a set, and each set of three books was counted $3! = 6$ times in (a), so the answer is $\binom{7}{3} = 210 / 6 = 35$.

**Problem 2.** Ten people meet, and every two of them shake hands once. How many handshakes take place?

**Solution.** A handshake is a set of two people, so the count is $\binom{10}{2} = \frac{10 \cdot 9}{2} = 45$. The product $10 \cdot 9 = 90$ counts each handshake twice, once from each side.

**Problem 3.** A PIN is a list of four digits, each from 0 to 9. How many PINs are there, and what fraction of them have four different digits?

**Solution.** Each digit has 10 options regardless of the others, so there are $10^4 = 10{,}000$ PINs. With four different digits the options are 10, 9, 8, 7 in turn: $P(10, 4) = 5040$. The fraction is $\frac{5040}{10000} = 0.504$, so just over half of all PINs have no repeated digit.

**Problem 4.** Compute $\binom{100}{98}$ without a calculator, and explain in terms of choosing why $\binom{n}{1} = \binom{n}{n-1} = n$.

**Solution.** By symmetry $\binom{100}{98} = \binom{100}{2} = \frac{100 \cdot 99}{2} = 4950$. Choosing one object from $n$ can be done in $n$ ways, one for each object. Choosing $n - 1$ objects is the same as choosing the single object to leave out, which can again be done in $n$ ways.

**Problem 5.** A committee of 4 is to be formed from 6 men and 5 women. (a) How many committees have exactly two women? (b) How many have at least one woman?

**Solution.** (a) Choose the two women in $\binom{5}{2} = 10$ ways and, whichever they are, the two men in $\binom{6}{2} = 15$ ways. The product rule applies because the number of ways to choose the men does not depend on the women chosen, and each committee arises from exactly one such pair of choices: $10 \cdot 15 = 150$. (b) There are $\binom{11}{4} = \frac{11 \cdot 10 \cdot 9 \cdot 8}{24} = 330$ committees and $\binom{6}{4} = 15$ with no woman, so $330 - 15 = 315$ have at least one. Check by cases: $5 \cdot 20 + 10 \cdot 15 + 10 \cdot 6 + 5 = 100 + 150 + 60 + 5 = 315$.

**Problem 6.** How many different arrangements are there of the letters of the word LEVEL? Justify the division you use.

**Solution.** Make the letters temporarily distinct: $L_1, E_1, V, E_2, L_2$. These five distinct symbols have $5! = 120$ arrangements. Erasing the subscripts sends each of these to an arrangement of LEVEL. A given arrangement of LEVEL comes from exactly $2! \cdot 2! = 4$ labeled arrangements, since the two L's can be labeled in 2 ways and, independently, the two E's in 2 ways. Every bundle has the same size 4, so the number of arrangements is $120 / 4 = 30$.

**Problem 7.** A student is asked how many 5-card hands from a standard 52-card deck contain at least one ace, and writes: "Choose an ace, 4 ways. Then choose any 4 of the other 51 cards, $\binom{51}{4} = 249{,}900$ ways. Answer: $999{,}600$." Find the error and the correct count.

**Solution.** The method counts pairs (a marked ace, four other cards). A hand with two aces arises from two such pairs, since either ace could be the marked one, and a hand with three or four aces arises three or four times. So hands are not counted equally often and the total is too large. Correctly: there are $\binom{52}{5} = 2{,}598{,}960$ hands, and $\binom{48}{5} = 1{,}712{,}304$ of them avoid all four aces, so $2{,}598{,}960 - 1{,}712{,}304 = 886{,}656$ contain at least one ace.

**Problem 8.** Prove in two ways, by counting and by algebra, that for integers $0 \le m \le k \le n$,

$$
\binom{n}{k}\binom{k}{m} = \binom{n}{m}\binom{n-m}{k-m}.
$$

**Solution.** *By counting.* From $n$ people, form a committee of $k$ and, inside it, a subcommittee of $m$. Choosing the committee first gives $\binom{n}{k}$ committees, each with exactly $\binom{k}{m}$ subcommittees: $\binom{n}{k}\binom{k}{m}$ outcomes. Choosing the subcommittee first gives $\binom{n}{m}$ subcommittees, each of which is completed to a committee by choosing the other $k - m$ members from the remaining $n - m$ people, in exactly $\binom{n-m}{k-m}$ ways. Each outcome (a committee together with a subcommittee) arises exactly once either way, so the two products are equal. With $m = 1$ this is the captain identity. *By algebra.*

$$
\binom{n}{k}\binom{k}{m} = \frac{n!}{k!\,(n-k)!} \cdot \frac{k!}{m!\,(k-m)!} = \frac{n!}{m!\,(k-m)!\,(n-k)!},
$$

$$
\binom{n}{m}\binom{n-m}{k-m} = \frac{n!}{m!\,(n-m)!} \cdot \frac{(n-m)!}{(k-m)!\,(n-k)!} = \frac{n!}{m!\,(k-m)!\,(n-k)!}.
$$

Numerical check with $n = 5$, $k = 3$, $m = 2$: $10 \cdot 3 = 30$ and $10 \cdot 3 = 30$.

**Problem 9.** Five people sit down at a round table with five identical chairs. Two seatings count as the same if one can be turned into the other by rotating everybody around the table. How many different seatings are there? Generalize to $n$ people.

**Solution.** Number the chairs. There are $5! = 120$ ways to seat the people in numbered chairs. Rotating everyone by one chair, two chairs, and so on gives 5 numbered seatings (including the original) that all count as the same round-table seating, and these 5 are different from one another because each rotation moves a given person to a different chair. So the 120 numbered seatings fall into bundles of exactly 5, and there are $120 / 5 = 24$ seatings. For $n$ people the same argument gives $n!/n = (n-1)!$. Another way to see it: seat one person anywhere, which fixes the rotation, and arrange the other $n - 1$ people in the remaining chairs in $(n-1)!$ ways.
