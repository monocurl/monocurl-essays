# Sets, Venn diagrams and inclusion-exclusion

> Union, intersection and complement defined exactly, De Morgan's laws for sets, and how to count a union of overlapping sets without counting anything twice.

Series: Logic and Proof (https://www.monocurl.com/monocurl-essays/logic/)
Canonical: https://www.monocurl.com/monocurl-essays/logic/sets-and-counting/
Keywords: sets, Venn diagram, union and intersection, complement of a set, De Morgan's laws for sets, inclusion-exclusion principle, counting with Venn diagrams, Russell's paradox

[Figure 1, animation: A class of 30 in which 18 play football and 15 play tennis. The two totals do not fix the overlap: it can be anything from 3, with nobody left outside, to 15, with every tennis player inside the football circle. The picture settles on the case where 4 students play neither.]

A class has 30 students. Eighteen of them play football and fifteen play tennis. How many play both?

The numbers look like enough to work with. They are not, and the animation shows why: the same three totals fit a class where 3 students play both, a class where all 15 tennis players also play football, and everything in between. We can say that somebody plays both, because $18 + 15 = 33$ is more than the 30 students there are. To get further we need one more fact, and we need a way of reasoning about overlapping groups that keeps track of who has been counted.

**Pause and try.** Why can the number who play both not be less than 3, and why not more than 15? For each extreme, how many students play neither sport?

**Answer.** If $b$ students play both, then $18 - b$ play only football and $15 - b$ play only tennis, so $(18 - b) + b + (15 - b) = 33 - b$ students play at least one. That cannot exceed 30, so $b \ge 3$; at $b = 3$ all 30 play something and nobody plays neither. Those who play both are among the 15 tennis players, so $b \le 15$; at $b = 15$ only 18 students play anything and 12 play neither.

## Sets and membership

The language for this is the language of sets, and it is built directly on the logic of the earlier lessons. From [truth tables](@logic/truth-tables) we use the connectives $\land$ (and), $\lor$ (or, in the inclusive sense) and $\lnot$ (not), and De Morgan's laws, $\lnot(P \lor Q) \equiv \lnot P \land \lnot Q$ and $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$. From [quantifiers](@logic/quantifiers) we use $\forall$, "for all".

**Definition.** A **set** is a collection of objects, called its **elements**. We write $x \in A$ for "$x$ is an element of $A$" and $x \notin A$ for its negation.

- Two sets are **equal** when they have the same elements. Order and repetition do not matter: $\{1, 2\} = \{2, 1, 1\}$.
- $A$ is a **subset** of $B$, written $A \subseteq B$, when every element of $A$ is an element of $B$: $\forall x\,(x \in A \to x \in B)$.
- The **empty set** $\varnothing$ has no elements.
- If $A$ has finitely many elements, $|A|$ denotes how many.

A set can be given by listing, as in $\{2, 4, 6\}$, or by a condition on the elements of a set we already have, as in $\{n \in \mathbb{Z} : n \text{ is even}\}$, read "the set of integers $n$ such that $n$ is even". The empty set is a subset of every set, because "every element of $\varnothing$ is in $B$" is a universal statement with no counterexample.

For a small example that we can hold completely in view, let the **universe**, the set of all objects under discussion, be

$$
U = \{1, 2, \dots, 12\},
$$

and inside it let $A$ be the multiples of 2 and $B$ the multiples of 3. So $A = \{2, 4, 6, 8, 10, 12\}$ and $B = \{3, 6, 9, 12\}$, with $|A| = 6$ and $|B| = 4$.

## Union, intersection and complement

Draw $U$ as a box and each set as a circle, and put every number where it belongs.

[Figure 2, steps: The numbers 1 to 12 sorted into a Venn diagram, with A the multiples of 2 and B the multiples of 3. The shaded region shows in turn the intersection, the union, the complement of A and the difference A \setminus B.]

  - step: Every number from 1 to 12 sits in one of four regions, according to whether it is a multiple of 2 and whether it is a multiple of 3.
  - step: The intersection of A and B is the overlap: the numbers in both sets, which are 6 and 12.
  - step: The union of A and B is everything inside at least one circle.
  - step: The complement of A is everything in the universe that is outside A.
  - step: The difference A minus B is the part of A that lies outside B.
Each region was described with one of the words "and", "or", "not". That is the definition.

**Definition.** Let $A$ and $B$ be subsets of a universe $U$.

- The **intersection** is $A \cap B = \{x \in U : x \in A \land x \in B\}$.
- The **union** is $A \cup B = \{x \in U : x \in A \lor x \in B\}$.
- The **complement** of $A$ is $A^c = \{x \in U : x \notin A\}$.
- The **difference** is $A \setminus B = \{x \in U : x \in A \land x \notin B\}$, which equals $A \cap B^c$.

$A$ and $B$ are **disjoint** if $A \cap B = \varnothing$.

In the example, $A \cap B = \{6, 12\}$, the multiples of 6. The union is $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$; the "or" is inclusive, so 6 and 12 belong to it, and each is listed once. The complement $A^c = \{1, 3, 5, 7, 9, 11\}$ depends on the universe: in a universe of 1 to 20 it would be a different set, which is why $U$ must be stated before a complement means anything.

So a set operation is a logical connective applied to membership statements, and every law about $\land$, $\lor$ and $\lnot$ becomes a law about $\cap$, $\cup$ and complement. To prove that two sets are equal, show that $x$ belongs to one exactly when it belongs to the other.

## De Morgan's laws for sets

**Pause and try.** In the example, list $(A \cup B)^c$. Then list $A^c$ and $B^c$ separately and find $A^c \cap B^c$. What do you notice?

**Answer.** $(A \cup B)^c$ is what is left of $U$ after removing $\{2, 3, 4, 6, 8, 9, 10, 12\}$, namely $\{1, 5, 7, 11\}$. Separately, $A^c = \{1, 3, 5, 7, 9, 11\}$ and $B^c = \{1, 2, 4, 5, 7, 8, 10, 11\}$, and the numbers in both lists are $1, 5, 7, 11$. The two answers are the same set.

The agreement can be watched number by number.

[Figure 3, animation: A membership table for the numbers 1 to 12. A filled square means the number belongs to the set named on the left. The row for (A \cup B)^c and the row for A^c \cap B^c are filled in exactly the same columns.]

Twelve agreements are evidence about one example. The theorem is about all sets, and its proof is the logical De Morgan law applied to one element at a time.

**Theorem.** (De Morgan's laws for sets.) For all subsets $A$ and $B$ of a universe $U$,

$$
(A \cup B)^c = A^c \cap B^c \qquad \text{and} \qquad (A \cap B)^c = A^c \cup B^c.
$$

**Proof.** Let $x$ be any element of $U$, and write $P$ for the statement $x \in A$ and $Q$ for $x \in B$. Then

$$
x \in (A \cup B)^c \iff \lnot(P \lor Q) \iff \lnot P \land \lnot Q \iff x \in A^c \cap B^c.
$$

The first step is the definition of complement and union, the second is De Morgan's law for statements, and the third is the definition of complement and intersection. So the two sets have the same elements and are equal. The second law is the same argument with $\land$ and $\lor$ exchanged, using $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$.

## Counting a union

We return to counting. In the example $|A| = 6$ and $|B| = 4$, but the union has 8 elements, not 10. To see where the other two went, count the way a careless clerk would: go through $A$ and give each element a tick, then go through $B$ and do the same.

[Figure 4, animation: Counting |A| + |B| by ticks. Each element of A gets a blue tick and each element of B an orange one. There are 10 ticks on only 8 numbers, because 6 and 12 are ticked twice.]

Every element of the union received one tick, except the elements of $A \cap B$, which received two. So the number of ticks, $|A| + |B|$, overshoots the size of the union by exactly $|A \cap B|$. Here that is $6 + 4 - 2 = 8$.

To prove this for all finite sets we need one fact about counting to stand on, and it is the simplest one. The **addition principle**: if finite sets $X$ and $Y$ are disjoint, then $|X \cup Y| = |X| + |Y|$, and likewise for three or more sets no two of which share an element. This is what counting separate piles and adding the results means, and we take it as the starting point.

**Theorem.** (Inclusion-exclusion for two sets.) For all finite sets $A$ and $B$,

$$
|A \cup B| = |A| + |B| - |A \cap B|.
$$

**Proof.** The three sets $A \setminus B$, $A \cap B$ and $B \setminus A$ are pairwise disjoint, since an element of the first is not in $B$, an element of the third is not in $A$, and an element of the second is in both. Every element of $A$ is either in $B$ or not, so $A = (A \setminus B) \cup (A \cap B)$, and similarly $B = (B \setminus A) \cup (A \cap B)$ and $A \cup B = (A \setminus B) \cup (A \cap B) \cup (B \setminus A)$. By the addition principle,

$$
|A| = |A \setminus B| + |A \cap B|, \qquad |B| = |B \setminus A| + |A \cap B|, \qquad |A \cup B| = |A \setminus B| + |A \cap B| + |B \setminus A|.
$$

Adding the first two equations gives $|A| + |B| = |A \cup B| + |A \cap B|$, which is the claim.

**Key idea.** To count a union, add the sizes of the sets and subtract what was counted twice: $|A \cup B| = |A| + |B| - |A \cap B|$. The formula links four numbers, so any three of them determine the fourth.

The last remark is what the opening question needed. We knew $|F| = 18$ and $|T| = 15$ for the sets $F$ of football players and $T$ of tennis players: two of the four numbers, which is one too few. Suppose we now learn that 4 students play neither sport.

[Figure 5, steps: The class question solved once a third fact is known. Four students play neither sport, so 26 are in the union, and inclusion-exclusion gives the overlap.]

  - step: Thirty students, 18 who play football, 15 who play tennis, and one new fact: 4 play neither.
  - step: The 4 who play neither are the complement of the union, so the union has 30 − 4 = 26 students.
  - step: Adding 18 and 15 gives 33, which counts the overlap twice. So the overlap is 33 − 26 = 7.
  - step: Then 18 − 7 = 11 play only football and 15 − 7 = 8 play only tennis. The four regions add up to 30.
In symbols: $|F \cup T| = |U| - |(F \cup T)^c| = 30 - 4 = 26$, and then $26 = 18 + 15 - |F \cap T|$ gives $|F \cap T| = 7$.

## Three sets

With three sets $A$, $B$, $C$ the same idea should work: add the three sizes and subtract the three pairwise overlaps.

**Pause and try.** Suppose you compute $|A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C|$. Consider an element that lies in all three sets. How many times has it been counted, in total? What must be done to repair the formula?

**Answer.** It is counted once in each of $|A|$, $|B|$, $|C|$, for $+3$, and once in each of the three pairwise intersections, for $-3$. The total is 0, so the element has disappeared from the count. Adding $|A \cap B \cap C|$ counts it once more and brings the total to 1.

[Figure 6, steps: Three overlapping sets cut their union into seven regions. The number in each region is how many times its elements have been counted so far: after adding the three sets, after subtracting the three pairwise intersections, and after adding the triple intersection back.]

  - step: Three sets cut their union into seven regions. Nothing has been counted yet.
  - step: Add the sizes of A, B and C. A region inside two sets is counted twice, and the center three times.
  - step: Subtract the three pairwise intersections. The regions in exactly two sets drop to 1, but the center drops to 0.
  - step: Add the triple intersection back. Every region is now counted exactly once.
**Theorem.** (Inclusion-exclusion for three sets.) For all finite sets $A$, $B$ and $C$,

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|.
$$

The picture checks seven regions. For a proof, we reduce to the two-set theorem by treating $A \cup B$ as a single set.

**Proof.** Apply the two-set theorem to the sets $A \cup B$ and $C$:

$$
|A \cup B \cup C| = |A \cup B| + |C| - |(A \cup B) \cap C|.
$$

We need the last term. An element $x$ is in $(A \cup B) \cap C$ when $(x \in A \lor x \in B) \land x \in C$, which is equivalent to $(x \in A \land x \in C) \lor (x \in B \land x \in C)$ by the distributive law for $\land$ over $\lor$ (an eight-row truth table confirms it). So $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$. Apply the two-set theorem to this union, noting that $(A \cap C) \cap (B \cap C) = A \cap B \cap C$:

$$
|(A \cup B) \cap C| = |A \cap C| + |B \cap C| - |A \cap B \cap C|.
$$

Finally $|A \cup B| = |A| + |B| - |A \cap B|$. Substituting both into the first line gives the formula.

## Worked examples

**Worked example.** **How many of the numbers 1 to 100 are divisible by 2, 3 or 5?**

Let $A$, $B$, $C$ be the sets of multiples of 2, of 3 and of 5 in $U = \{1, \dots, 100\}$. We want $|A \cup B \cup C|$. The multiples of $d$ up to 100 are $d, 2d, 3d, \dots$, and there are $\lfloor 100/d \rfloor$ of them, where $\lfloor\ \rfloor$ means "round down". So $|A| = 50$, $|B| = 33$, $|C| = 20$.

A number is in $A \cap B$ when it is divisible by both 2 and 3, that is, by 6. So $|A \cap B| = \lfloor 100/6 \rfloor = 16$. Likewise $|A \cap C| = \lfloor 100/10 \rfloor = 10$, $|B \cap C| = \lfloor 100/15 \rfloor = 6$, and $|A \cap B \cap C| = \lfloor 100/30 \rfloor = 3$. Therefore

$$
|A \cup B \cup C| = 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74.
$$

*Check.* The figure below marks the numbers directly, in three passes, and counts 74. By De Morgan, the other 26 numbers are those divisible by none of 2, 3, 5.

[Figure 7, animation: The numbers 1 to 100 in rows of ten. The first pass marks the multiples of 2, the second marks the multiples of 3 not already marked, and the third the multiples of 5 not already marked. In all 74 squares are marked and 26 are left.]

**Worked example.** **Filling a three-set diagram from the inside out.**

Of 60 students, 30 take math, 25 take physics and 20 take chemistry; 12 take math and physics, 9 take math and chemistry, 8 take physics and chemistry; and 5 take all three. How many take none of the three, and how many take exactly one?

*None.* By the three-set formula the union has $30 + 25 + 20 - 12 - 9 - 8 + 5 = 51$ students, so $60 - 51 = 9$ take none.

*Exactly one.* The given numbers are sizes of whole sets, and we need sizes of regions, so start at the center and work outward. The center has 5. "Math and physics" has 12 including those 5, so the region for math and physics but not chemistry has $12 - 5 = 7$. In the same way math and chemistry only has $9 - 5 = 4$, and physics and chemistry only has $8 - 5 = 3$. Math alone is what remains of 30: $30 - 7 - 4 - 5 = 14$. Physics alone is $25 - 7 - 3 - 5 = 10$, and chemistry alone is $20 - 4 - 3 - 5 = 8$. So $14 + 10 + 8 = 32$ students take exactly one.

*Check.* The seven regions total $14 + 10 + 8 + 7 + 4 + 3 + 5 = 51$, matching the formula.

Dividing a count by $|U|$ turns it into a proportion, so the same formula governs probabilities of [equally likely outcomes](@probability/sample-spaces): $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

## The general formula

The pattern continues: add the single sets, subtract the pairs, add the triples, subtract the quadruples, and so on with alternating signs.

**Theorem.** (Inclusion-exclusion, general form.) For finite sets $A_1, A_2, \dots, A_n$,

$$
|A_1 \cup \dots \cup A_n| = \sum_{i} |A_i| - \sum_{i<j} |A_i \cap A_j| + \sum_{i<j<k} |A_i \cap A_j \cap A_k| - \dots + (-1)^{n+1} |A_1 \cap \dots \cap A_n|.
$$

We state this without a full proof; here is a sketch of why it is true. Take an element that lies in exactly $m$ of the sets, with $m \ge 1$. It is counted in $\binom{m}{1}$ of the single terms, $\binom{m}{2}$ of the pair terms, and so on, where $\binom{m}{j}$ is the number of ways to [choose $j$ things from $m$](@discrete-math/permutations-and-combinations). Its total count is $\binom{m}{1} - \binom{m}{2} + \binom{m}{3} - \dots$, and this alternating sum always equals 1. For $m = 3$ it is $3 - 3 + 1$, as in the figure, and for $m = 4$ it is $4 - 6 + 4 - 1 = 1$. In general it follows from the [binomial theorem](@discrete-math/pascals-triangle) applied to $(1 - 1)^m = 0$. A complete proof can also be given by [induction](@discrete-math/induction) on $n$, repeating the step that took us from two sets to three.

## Why there is no set of all sets

Every set so far was carved out of a universe fixed in advance, and the complement was defined relative to it. One might hope for a single universe containing everything, including all sets. In 1901 Bertrand Russell showed that this cannot be had, by an argument that is a [proof by contradiction](@logic/proof-by-contradiction) in three lines.

Suppose every condition defined a set. Most sets are not elements of themselves: the set of even numbers is not an even number. So consider the condition "$x$ is a set and $x \notin x$", and let $R$ be the set it defines. Is $R \in R$? If it is, then $R$ fails the condition for membership in $R$, so $R \notin R$. If it is not, then $R$ meets the condition, so $R \in R$. Either way $R \in R$ holds exactly when it fails, which is a contradiction. So $R$ does not exist, and "every condition defines a set" is false.

This is **Russell's paradox**. The repair adopted in modern set theory is the one we have been using all along: a condition may be used to select elements *from a set already in hand*, as in $\{x \in U : \dots\}$, but not from "everything". Under that rule there can be no set of all sets, because Russell's condition would select from it a set that leads to the same contradiction (Problem 8).

## Common mistakes and edge cases

**Common mistake.** **Adding the totals.** "18 play football and 15 play tennis, so 33 play a sport" counts each student who plays both twice. Adding sizes is correct only for disjoint sets.

**Common mistake.** **Reading a set total as a region.** "18 play football" describes the whole football circle, including those who also play tennis. The region "football only" is $18$ minus the overlap. In a three-set problem, likewise, "12 take math and physics" includes the students who take all three.

Three special cases are worth checking against the formula. If $A$ and $B$ are disjoint, then $|A \cap B| = 0$ and it reduces to the addition principle. If $A \subseteq B$, then $A \cap B = A$ and it gives $|A \cup B| = |B|$, as it should. And the formula is about finite sets only: for infinite sets "size" needs a new definition, which is the subject of the [next lesson](@logic/infinity-cantor).

## Stepping back

The opening question could not be answered because the formula for a union links four numbers and we had only two of them, the class total being a fact about the universe and not about the union. The work was to say exactly what "both", "either" and "neither" mean, which turned out to be "and", "or" and "not" applied to membership, and then to count carefully: adding sizes ticks the overlap twice, so take it off once. With three sets the correction itself overcorrects, and the signs alternate from there. The habit to keep is to ask, of any total, how many times each object has been counted.

**Check yourself.** In a club, 12 members play piano, 9 play guitar and 4 play both. How many play at least one of the two instruments?
Answer: 17 $|P \cup G| = 12 + 9 - 4 = 17$.

**Recap.** - $A \cap B$, $A \cup B$, $A^c$ are defined by "and", "or", "not" applied to membership. The complement is taken inside a stated universe $U$. $A \subseteq B$ means $\forall x\,(x \in A \to x \in B)$.
- De Morgan for sets: $(A \cup B)^c = A^c \cap B^c$ and $(A \cap B)^c = A^c \cup B^c$, proved from the laws for statements one element at a time.
- Two sets: $|A \cup B| = |A| + |B| - |A \cap B|$.
- Three sets: add the singles, subtract the pairs, add the triple. In general the signs alternate.
- A stated total such as $|A|$ covers the whole circle. To find regions, start from the innermost intersection and work outward.
- There is no set of all sets (Russell's paradox). Conditions select elements from a set already given.

## Problems

Problems 1 to 3 repeat the moves of the lesson, 4 to 6 combine them, and 7 and 8 go further.

**Problem 1.** Let $U = \{1, 2, \dots, 10\}$, $A = \{1, 2, 3, 4, 5\}$ and $B = \{4, 5, 6, 7\}$. Find $A \cup B$, $A \cap B$, $A^c$, $A \setminus B$ and $(A \cup B)^c$. Verify De Morgan's first law and the two-set counting formula on this example.

**Solution.** $A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$, $A \cap B = \{4, 5\}$, $A^c = \{6, 7, 8, 9, 10\}$, $A \setminus B = \{1, 2, 3\}$ and $(A \cup B)^c = \{8, 9, 10\}$. For De Morgan: $B^c = \{1, 2, 3, 8, 9, 10\}$, and the elements common to $A^c$ and $B^c$ are $8, 9, 10$, so $A^c \cap B^c = \{8, 9, 10\} = (A \cup B)^c$. For counting: $|A| + |B| - |A \cap B| = 5 + 4 - 2 = 7 = |A \cup B|$.

**Problem 2.** In a class of 40 students, 25 have a dog, 18 have a cat and 6 have neither. How many have both? How many have a dog but no cat?

**Solution.** The union has $40 - 6 = 34$ students. From $34 = 25 + 18 - |D \cap C|$ we get $|D \cap C| = 9$. Dog but no cat is $|D \setminus C| = 25 - 9 = 16$. Check: the regions are 16 (dog only), 9 (both), $18 - 9 = 9$ (cat only) and 6 (neither), and $16 + 9 + 9 + 6 = 40$.

**Problem 3.** How many of the integers from 1 to 200 are divisible by 4 or by 6?

**Solution.** There are $\lfloor 200/4 \rfloor = 50$ multiples of 4 and $\lfloor 200/6 \rfloor = 33$ multiples of 6. A number is divisible by both exactly when it is divisible by their least common multiple, which is 12 (not $4 \times 6 = 24$: the number 12 is divisible by both). There are $\lfloor 200/12 \rfloor = 16$ of those. So the answer is $50 + 33 - 16 = 67$.

**Problem 4.** Let $A$ and $B$ be subsets of a universe $U$. Prove that $A \subseteq B$ if and only if $B^c \subseteq A^c$. Which law of logic is this?

**Solution.** By definition, $A \subseteq B$ means $\forall x \in U\,(x \in A \to x \in B)$, and $B^c \subseteq A^c$ means $\forall x \in U\,(x \notin B \to x \notin A)$. For each $x$, the conditional $x \notin B \to x \notin A$ is the contrapositive of $x \in A \to x \in B$, and a conditional is equivalent to its contrapositive. So for each $x$ the two conditionals have the same truth value, and one universal statement holds exactly when the other does. The law is the equivalence of a conditional with its contrapositive. In the picture: if the circle $A$ lies inside the circle $B$, then everything outside $B$ is outside $A$.

**Problem 5.** How many integers from 1 to 1000 are divisible by none of 3, 5 and 7?

**Solution.** Let $A$, $B$, $C$ be the multiples of 3, 5, 7 up to 1000. Then $|A| = \lfloor 1000/3 \rfloor = 333$, $|B| = 200$, $|C| = \lfloor 1000/7 \rfloor = 142$. The pairwise intersections are the multiples of 15, 21 and 35: $\lfloor 1000/15 \rfloor = 66$, $\lfloor 1000/21 \rfloor = 47$, $\lfloor 1000/35 \rfloor = 28$. The triple intersection is the multiples of 105: $\lfloor 1000/105 \rfloor = 9$. So

$$
|A \cup B \cup C| = 333 + 200 + 142 - 66 - 47 - 28 + 9 = 543.
$$

By De Morgan the numbers divisible by none are the complement of the union, and there are $1000 - 543 = 457$ of them. As a rough check, the fraction of integers divisible by none of 3, 5, 7 should be about $\frac23 \cdot \frac45 \cdot \frac67 = \frac{48}{105} \approx 0.457$.

**Problem 6.** Let $A$ and $B$ be subsets of a finite universe $U$. Prove that

$$
|A| + |B| - |U| \;\le\; |A \cap B| \;\le\; \min(|A|, |B|).
$$

Deduce that if 70 of 100 people speak English and 60 speak Spanish, then at least 30 speak both. Can exactly 30 happen?

**Solution.** First, if $X \subseteq Y$ are finite then $|X| \le |Y|$, because $Y$ is the disjoint union of $X$ and $Y \setminus X$, so $|Y| = |X| + |Y \setminus X|$. *Upper bound.* $A \cap B \subseteq A$ and $A \cap B \subseteq B$, so $|A \cap B|$ is at most both $|A|$ and $|B|$. *Lower bound.* $A \cup B \subseteq U$, so $|A \cup B| \le |U|$. By the two-set formula $|A \cup B| = |A| + |B| - |A \cap B|$, so $|A| + |B| - |A \cap B| \le |U|$, which rearranges to the claim. *Application.* $|E \cap S| \ge 70 + 60 - 100 = 30$. Exactly 30 happens when the union is everyone: 40 speak only English, 30 both, 30 only Spanish, nobody neither.

**Problem 7.** Four letters are put into four addressed envelopes, one letter in each. In how many of the $4! = 24$ arrangements does no letter go into its own envelope? Use the general formula with $A_i$ the set of arrangements in which letter $i$ is in the right envelope. (Such arrangements are called *derangements*.)

**Solution.** We count the union $A_1 \cup A_2 \cup A_3 \cup A_4$, the arrangements with at least one letter correct, and subtract from 24. If letter $i$ is fixed in place, the other three can be arranged in $3! = 6$ ways, so $|A_i| = 6$, and there are 4 such sets. If two given letters are fixed, the other two can be arranged in $2! = 2$ ways, and there are $\binom42 = 6$ pairs. If three given letters are fixed, the fourth is forced: 1 way, for each of the $\binom43 = 4$ triples. All four fixed: 1 way. So

$$
|A_1 \cup A_2 \cup A_3 \cup A_4| = 4 \cdot 6 - 6 \cdot 2 + 4 \cdot 1 - 1 = 15,
$$

and the number of derangements is $24 - 15 = 9$. As a check, writing each arrangement as the list of envelopes receiving letters 1 to 4, the nine are 2143, 2341, 2413, 3142, 3412, 3421, 4123, 4312, 4321.

**Problem 8.** Let $A$ be any set, and define $R_A = \{x \in A : x \notin x\}$. Prove that $R_A \notin A$. Deduce that no set contains every set as an element.

**Solution.** Suppose, for contradiction, that $R_A \in A$. By the definition of $R_A$, an object $x$ belongs to $R_A$ exactly when $x \in A$ and $x \notin x$. Apply this to $x = R_A$: since $R_A \in A$ by assumption, we get that $R_A \in R_A$ holds exactly when $R_A \notin R_A$ holds. A statement cannot have the same truth value as its negation, so this is a contradiction, and $R_A \notin A$. Now if some set $V$ contained every set as an element, it would contain the set $R_V$, contradicting what was just proved with $A = V$. So there is no set of all sets. Notice the difference from Russell's original paradox: here $R_A$ exists without any difficulty, because it is selected from the set $A$, and the argument shows only that it lies outside $A$.
