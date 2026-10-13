# The probabilistic method: Ramsey numbers by coin flips

> Six party guests always include three mutual friends or three mutual strangers. For larger parties, the best lower bounds come from coloring at random.

Series: Discrete Mathematics (https://www.monocurl.com/monocurl-essays/discrete-math/)
Canonical: https://www.monocurl.com/monocurl-essays/discrete-math/the-probabilistic-method/
Keywords: probabilistic method, Ramsey numbers, R(3, 3) = 6, party problem, union bound, Erdos lower bound, Erdos-Szekeres bound, R(5, 5)

[Figure 1, animation: Each pair of six party guests is made friends (blue) or strangers (orange) by a coin flip. Once all fifteen pairs are decided, three guests who are all friends or all strangers can be found, as happens for every outcome of the flips.]

You are hosting a party with five guests. You hope for some level of familiarity, but also some level of strangeness between the guests. Specifically, you hope that no three guests all know each other beforehand, and that no three are all mutual strangers. Is there a guest list like that? And if there is one for five guests, is there one for six?

The first question yields to a few minutes of trial and error. The second is a different kind of problem, because among six people there are $2^{15} = 32{,}768$ ways to decide who knows whom, and for bigger versions of the question the count outruns every computer. We will settle both by proof. Then we turn to the bigger versions, where the best known way to produce a good arrangement is to flip a coin for every pair and prove that the coins cannot fail every time.

## Graphs and colorings

To make the problem mathematical, represent it as a graph. Each person is a vertex, and a line is drawn between every pair. Color the line blue if the two people are friends and orange if they are strangers. Below is a first attempt for five guests, colored without much thought. It fails: $A$, $B$ and $E$ all know each other.

[Figure 2, image: A first attempt at the party of five. Blue edges join friends and orange edges join strangers. The three guests A, B and E are joined by three blue edges, so they are three mutual friends and the attempt fails.]

**Definition.** The **complete graph** $K_n$ has $n$ vertices and one edge joining each pair of them, so it has $\binom{n}{2}$ edges. A **2-coloring** of $K_n$ assigns to every edge one of two colors, here blue or orange. A set of $s$ vertices is a **blue clique of size $s$** if all $\binom{s}{2}$ edges among them are blue, and an orange clique is defined the same way. A clique in either color is **monochromatic**. A monochromatic clique of size 3 is a **monochromatic triangle**.

The number $\binom{n}{2} = \frac{n(n-1)}{2}$ counts the [ways to choose 2 vertices from $n$](@discrete-math/permutations-and-combinations). A blue triangle is three mutual friends and an orange triangle is three mutual strangers, so the host wants a 2-coloring of $K_5$ with no monochromatic triangle. I will call such a coloring valid.

## Building up: small cases

It's instructive to start with smaller examples. With three people the arrangement is not difficult to construct. Color $AB$ blue, then $AC$ blue, and we're forced to color $BC$ orange to avoid a blue triangle. For four, we can reuse that coloring and try to color the three new edges.

[Figure 3, steps: Valid colorings for three guests and then four. The coloring of the triangle A, B, C is kept when D arrives, and the three new edges are colored so that each of the four triangles has both colors.]

  - step: With three guests, color AB and AC blue. One edge is left.
  - step: BC must be orange, or A, B, C would be three mutual friends. The triangle now has both colors.
  - step: A fourth guest D arrives. Keep the old colors. Three new edges need a color.
  - step: Color BD blue and AD, CD orange. Each of the four triangles has both colors, so four guests work too.
**Pause and try.** Find a valid coloring of $K_5$ before reading on. A hint from the failed attempt above: $B$ had three blue edges there. Try to give every vertex two edges of each color.

**Answer.** Place the five vertices at the corners of a regular pentagon. Color the five sides orange and the five diagonals blue. Every vertex then has two orange and two blue edges, and the check that no triangle is monochromatic is the proof below.

For five, extending the four-guest coloring by hand works, but the pentagon coloring is more regular, which lets us check all ten triangles with one argument.

**Theorem.** There is a 2-coloring of $K_5$ with no monochromatic triangle.

**Proof.** Number the vertices $0, 1, 2, 3, 4$ around a pentagon. Color an edge orange if its ends are neighbors on the pentagon and blue otherwise. Take any three vertices and walk once around the pentagon, recording how many steps separate each chosen vertex from the next chosen one. The three gaps are positive whole numbers that add up to 5, so they are $1, 1, 3$ or $1, 2, 2$ in some order. Two chosen vertices at gap 1 are neighbors, joined by an orange edge. Two at gap 2 or 3 are not neighbors, and their edge is blue. Both patterns contain a 1 and a number larger than 1, so the triangle has an orange edge and a blue edge.

[Figure 4, image: The pentagon coloring of five guests, with orange sides and blue diagonals, beside all ten of its triangles. Each triangle contains at least one edge of each color, so no three guests are all friends or all strangers.]

So the answer to the party question is yes: with five guests a valid arrangement exists.

## The wall at six

It is natural to try to keep going. Based on the past it might seem that there is an inductive argument: take a valid coloring on $n - 1$ vertices and extend it to $n$. But once we get to $n = 6$, no matter what you try, you can't avoid a monochromatic triangle. Here are 24 colorings of $K_6$ chosen by coin flips. A search finds a monochromatic triangle in every one.

[Figure 5, animation: Eight copies of the complete graph on six vertices, each colored by coin flips three times over. In every one of the 24 random colorings a search finds a triangle whose three edges have one color, and that triangle is shaded.]

Twenty-four failures out of 32,768 colorings are evidence and not a proof. Checking the rest by machine would settle six guests and teach us nothing about seven, so let us look for a reason. The earlier hint pointed at it: trouble started at a vertex with three edges of one color.

**Pause and try.** In a 2-coloring of $K_6$, pick one vertex $F$. Five edges leave it. At least how many of them must share a color, and why?

**Answer.** Three. If each color appeared at most twice, $F$ would have at most 4 edges. This is the [pigeonhole principle](@discrete-math/pigeonhole-principle): 5 edges in 2 colors put at least $\lceil 5/2 \rceil = 3$ in one color.

**Theorem.** Every 2-coloring of $K_6$ contains a monochromatic triangle.

**Proof.** Fix a 2-coloring of $K_6$ and a vertex $F$. Five edges leave $F$, so by the pigeonhole principle at least three of them have the same color. The argument is the same for either color with the two names exchanged, so say three of them are blue, joining $F$ to vertices $A$, $B$ and $C$. Now look at the three edges among $A$, $B$ and $C$. If one of them is blue, say $AB$, then $F$, $A$, $B$ is a blue triangle. If none of them is blue, all three are orange, and $A$, $B$, $C$ is an orange triangle.

[Figure 6, steps: The proof that six guests always contain a one-color triangle. Three edges of one color leave the vertex F. If any edge among their far ends has that color it closes a triangle with F, and if none does, the far ends form a triangle of the other color.]

  - step: Take any coloring and any guest F. Of the five edges at F, at least three share a color. Say FA, FB and FC are blue.
  - step: If AB were blue, then F, A and B would be three mutual friends.
  - step: The same goes for BC and AC. To avoid a blue triangle, all three edges among A, B, C must be orange.
  - step: But then A, B and C are three mutual strangers. Either way a one-color triangle appears.
The proof used nothing about the coloring except that $F$ has five edges. With five guests a vertex has four edges, which can split two and two, and that is the room the pentagon uses.

## Ramsey numbers

Three mutual friends or three mutual strangers are forced at six guests and not at five. The same question can be asked with other clique sizes.

**Definition.** Let $s \ge 2$ and $t \ge 2$ be integers. The **Ramsey number** $R(s, t)$ is the smallest positive integer $n$ such that every 2-coloring of $K_n$ contains a blue clique of size $s$ or an orange clique of size $t$.

Read the definition against what we did. To show $R(s,t) \le n$ you must argue about every coloring of $K_n$, as in the proof for six. To show $R(s,t) > n$ it is enough to exhibit one coloring of $K_n$ with neither clique, as the pentagon does for $n = 5$. Together the two theorems above say

$$
R(3, 3) = 6.
$$

If every coloring of $K_n$ contains one of the cliques, so does every coloring of a larger $K_m$, because $n$ of its vertices already carry a coloring of $K_n$. So $R(s,t)$ is a threshold: below it some coloring avoids both cliques, and from it onward none does.

**Common mistake.** **One example in the wrong direction.** "I colored $K_6$ and found a monochromatic triangle, so $R(3,3) \le 6$" proves nothing, since the first attempt at $K_5$ also had one. An upper bound is a statement about all colorings. A single coloring can only ever prove a lower bound, and only if it has no monochromatic clique.

A priori these numbers aren't even well defined, since nothing so far says that any $n$ at all works for, say, $s = t = 10$. In 1930 Frank Ramsey proved that such an $n$ always exists. A few years later, Erdős and Szekeres found a short argument that also gives an explicit upper bound. It is the proof for six guests with the numbers replaced by letters.

**Theorem.** (Erdős and Szekeres, 1935.) For all integers $s, t \ge 2$ the number $R(s,t)$ exists. It satisfies $R(s, 2) = s$ and $R(2, t) = t$, and for $s, t \ge 3$

$$
R(s, t) \le R(s - 1, t) + R(s, t - 1).
$$

Consequently $R(s, t) \le \binom{s + t - 2}{s - 1}$.

**Proof.** *Base cases.* An orange clique of size 2 is one orange edge. A coloring of $K_s$ either has an orange edge or is entirely blue, which makes all $s$ vertices a blue clique. So $R(s, 2) \le s$, and the all-blue coloring of $K_{s-1}$ has neither clique, so $R(s,2) = s$. Exchanging the colors gives $R(2, t) = t$.

*The recurrence.* We use [induction](@discrete-math/induction) on $s + t$. Let $s, t \ge 3$, suppose $R(s-1, t)$ and $R(s, t-1)$ exist, and put $N = R(s-1,t) + R(s,t-1)$. Fix a 2-coloring of $K_N$ and a vertex $v$. Let $B$ be the set of vertices joined to $v$ by a blue edge and $O$ the set joined to $v$ by an orange edge, so $|B| + |O| = N - 1$. If we had $|B| \le R(s-1,t) - 1$ and $|O| \le R(s,t-1) - 1$, the sum would be at most $N - 2$. So $|B| \ge R(s-1,t)$ or $|O| \ge R(s,t-1)$.

In the first case, the coloring restricted to $B$ contains an orange clique of size $t$, and we are done, or a blue clique of size $s - 1$. All edges from $v$ to $B$ are blue, so adding $v$ to that clique gives a blue clique of size $s$. In the second case, the coloring restricted to $O$ contains a blue clique of size $s$ or an orange clique of size $t - 1$, which $v$ extends to size $t$. Either way $K_N$ has one of the required cliques, so $R(s,t)$ exists and is at most $N$.

*The binomial bound.* Again by induction on $s + t$. In the base cases $\binom{s}{s-1} = s$ and $\binom{t}{1} = t$, with equality. For $s, t \ge 3$,

$$
R(s,t) \le \binom{s + t - 3}{s - 2} + \binom{s + t - 3}{s - 1} = \binom{s + t - 2}{s - 1},
$$

where the equality is [Pascal's rule](@discrete-math/pascals-triangle).

**Worked example.** **Reading the bound.** For $s = t = 3$ the recurrence gives $R(3,3) \le R(2,3) + R(3,2) = 3 + 3 = 6$, which we know is exact. On the diagonal the bound is $R(k,k) \le \binom{2k-2}{k-1}$: that is $\binom{4}{2} = 6$ for $k = 3$, $\binom{6}{3} = 20$ for $k = 4$ and $\binom{8}{4} = 70$ for $k = 5$. To see the growth, note that $\binom{2k-2}{k-1}$ is one entry of row $2k - 2$ of Pascal's triangle, and the entries of that row add up to $2^{2k-2}$. So

$$
R(k,k) < 4^{k-1}.
$$

*Check:* $6 < 16$, $20 < 64$, $70 < 256$. The true value of $R(4,4)$ is 18, found by Greenwood and Gleason in 1955, so the bound is close for small $k$ and not exact.

[Figure 7, image: A timeline of bounds on Ramsey numbers. Ramsey proved in 1930 that they are finite, Erdős and Szekeres gave the binomial upper bound in 1935, Erdős proved an exponential lower bound by random coloring in 1947, Greenwood and Gleason found R(4,4) = 18 in 1955, Campos and coauthors lowered the base of the upper bound below 4 in 2023, and in 2023 Angeltveit and McKay showed that R(5,5) is at most 46.]

Upper bounds, then, come from an argument about every coloring. Lower bounds need colorings that avoid large monochromatic cliques, and for a while those came from increasingly clever constructions. The simple ones grow only like a power of $k$ (see Problem 4). Then in 1947 Erdős published an argument only a few lines long that gives a lower bound growing exponentially in $k$, and it constructs nothing.

## A random coloring

The core idea behind Erdős's method is probabilistic instead of constructive. We start with a completely random coloring and ask for the probability that it contains a monochromatic clique of size $k$. If that probability is less than 1, then some coloring contains none.

Try it first where everything can be counted: triangles in $K_4$. Flip a fair coin for each of the 6 edges. The [sample space](@probability/sample-spaces) is the set of $2^6 = 64$ colorings, all equally likely. A particular triangle is monochromatic when its 3 edges are all blue or all orange, which fixes those edges in one of 2 ways and leaves the other 3 edges free. That is $2 \cdot 2^3 = 16$ colorings, a probability of $\frac{16}{64} = \frac14$.

**Pause and try.** $K_4$ has four triangles, and each is monochromatic with probability $\frac14$. Is the probability that at least one of them is monochromatic equal to $4 \cdot \frac14 = 1$? Decide by finding one coloring of $K_4$ with no monochromatic triangle.

**Answer.** It is less than 1: the valid coloring of four guests found earlier is one of the 64 outcomes. Adding the four probabilities counts a coloring once for every monochromatic triangle it has, so colorings with several are counted several times. The figure below does the exact count.

[Figure 8, image: All 64 two-colorings of the complete graph on four vertices, sorted by how many of the four triangles are monochromatic. Eighteen colorings have none, 32 have one, 12 have two and 2 have all four, so 46 of the 64 contain a monochromatic triangle while the four separate probabilities add up to 1.]

The exact probability is $\frac{46}{64} \approx 0.72$. Computing it took a full enumeration, which is out of the question for large graphs. Adding the individual probabilities is cheap, and the picture shows that it can only overshoot.

**Theorem.** (Union bound.) Let $A_1, \dots, A_m$ be events in a finite sample space. Then

$$
P(A_1 \cup A_2 \cup \dots \cup A_m) \le P(A_1) + P(A_2) + \dots + P(A_m).
$$

**Proof.** The probability of an event is the sum of the probabilities of the outcomes in it. Every outcome in the union belongs to at least one $A_i$, so its probability appears at least once in the sum on the right. All the terms are nonnegative, so the right side is at least the left side.

Equality holds exactly when no outcome of positive probability lies in two of the events. For $K_4$ the bound gives $1$, which is true and useless. The bound is useful when the sum comes out below 1.

**Common mistake.** **Multiplying as if the events were independent.** Each triangle of $K_4$ fails to be monochromatic with probability $\frac34$, so it is tempting to say that no triangle is monochromatic with probability $\left(\frac34\right)^4 = \frac{81}{256} \approx 0.316$. The count says $\frac{18}{64} \approx 0.281$. The product rule needs independence, and triangles that share edges are not independent as a family: all four are monochromatic with probability $\frac{2}{64}$, not $\left(\frac14\right)^4$. The union bound needs no independence at all, which is why it is the tool here.

**Worked example.** **A first existence proof.** Color $K_6$ at random and look for monochromatic cliques of size 4. There are $\binom{6}{4} = 15$ sets of four vertices. A set of four has $\binom{4}{2} = 6$ edges, and it is monochromatic with probability $2 \cdot 2^{-6} = \frac{1}{32}$. By the union bound,

$$
P(\text{some monochromatic clique of size 4}) \le \frac{15}{32} < 1.
$$

So with probability at least $\frac{17}{32}$ the coloring has no monochromatic clique of size 4. An event of positive probability contains at least one outcome, so such a coloring of $K_6$ exists, and $R(4,4) > 6$. We did not write the coloring down.

**Pause and try.** For which $n$ does the same calculation show that $K_n$ has a 2-coloring with no monochromatic clique of size 4? You need $\binom{n}{4} \cdot \frac{1}{32} < 1$.

**Answer.** We need $\binom{n}{4} < 32$. Since $\binom{6}{4} = 15$ and $\binom{7}{4} = 35$, the calculation works up to $n = 6$ and says nothing from $n = 7$ on.

[Figure 9, image: The union bound on the chance of a monochromatic clique of size 4 in a random coloring of the complete graph on n vertices, for n from 4 to 9. It is below 1 up to n = 6, which proves that a coloring with no such clique exists there, and above 1 from n = 7, where it proves nothing.]

Since $R(4,4) = 18$, the result $R(4,4) > 6$ is weak. The strength of the method is in how it grows with $k$.

## The lower bound

Fix $k$ and color $K_n$ at random. There are $\binom{n}{k}$ sets of $k$ vertices, and each is monochromatic with probability $2 \cdot 2^{-\binom{k}{2}}$, where the factor of 2 accounts for the two possible colors. The union bound gives

$$
P(\text{some monochromatic clique of size } k) \le \binom{n}{k} \, 2^{1 - \binom{k}{2}}.
$$

If we choose $n$ so that the right side is less than 1, then some coloring of $K_n$ has no monochromatic clique of size $k$, and therefore $R(k,k) > n$. What remains is to find out how large $n$ can be.

**Theorem.** (Erdős, 1947.) For every integer $k \ge 3$,

$$
R(k, k) > 2^{k/2}.
$$

**Proof.** Let $n$ be the largest integer with $n \le 2^{k/2}$. Color each edge of $K_n$ blue or orange by an independent fair coin flip, so that all $2^{\binom{n}{2}}$ colorings are equally likely. For a set $S$ of $k$ vertices let $A_S$ be the event that $S$ is a monochromatic clique. The $\binom{k}{2}$ edges inside $S$ are all blue or all orange in 2 of their $2^{\binom{k}{2}}$ equally likely colorings, so $P(A_S) = 2^{1 - \binom{k}{2}}$. By the union bound, the probability $p$ that some $A_S$ occurs satisfies

$$
p \le \binom{n}{k}\, 2^{1 - \binom{k}{2}}.
$$

Now estimate the right side in three steps.

First, $\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!} < \frac{n^k}{k!}$, because the numerator is a product of $k$ factors, each at most $n$ and the last $k - 1$ of them smaller than $n$. (If $n < k$ the left side is 0 and the inequality still holds.)

Second, $n \le 2^{k/2}$ gives $n^k \le 2^{k^2/2}$, and $\binom{k}{2} = \frac{k^2 - k}{2}$. So

$$
p < \frac{2^{k^2/2} \cdot 2^{1 - (k^2 - k)/2}}{k!} = \frac{2^{1 + k/2}}{k!}.
$$

Third, $2^{1 + k/2} < k!$ for every $k \ge 3$. For $k = 3$ this reads $2^{5/2} \approx 5.66 < 6$. Each time $k$ increases by 1, the left side is multiplied by $\sqrt2$ and the right side by $k + 1 \ge 4$, so the inequality persists.

Hence $p < 1$, and the event that no $A_S$ occurs has positive probability. It therefore contains at least one coloring: a 2-coloring of $K_n$ with no monochromatic clique of size $k$. So $R(k,k) > n$, that is, $R(k,k) \ge n + 1$. Since $n$ is the largest integer not exceeding $2^{k/2}$, we get $n + 1 > 2^{k/2}$.

**Key idea.** To prove that an object with some property exists, choose one at random and show that the probability of failure is less than 1. For Ramsey numbers this gives $2^{k/2} < R(k,k) < 4^{k-1}$ for $k \ge 3$: the lower bound from random colorings, the upper from Erdős and Szekeres.

You might object that probability did no real work, and for this proof you would be right. Multiply everything by the number of colorings, and the argument says that the colorings with a monochromatic clique of size $k$, even counted with repetition, number fewer than the total, so some coloring is left over. The probabilistic language is bookkeeping for that count, and it stays manageable in later arguments where the coins are unfair.

## Hay in a haystack

The proof says more than that a good coloring exists. For $k = 20$ we have $n = 2^{10} = 1024$, and the failure probability is below $\frac{2^{11}}{20!} \approx 8 \times 10^{-16}$. Almost every coloring of $K_{1024}$ has no monochromatic clique of size 20. Yet the proof hands us none of them, and to verify a candidate one would have to examine $\binom{1024}{20}$ sets of vertices, which is more than $10^{41}$. As far as I know, nobody has found an explicit, efficiently computable rule for coloring $K_n$ that provably avoids monochromatic cliques of size $k$ with $n$ growing like $c^k$ for some constant $c > 1$; finding one is a well-known open problem. A completely random method with no intelligence at all gives a better lower bound than the thought-out constructions. It's as if we are unable to find hay in a haystack.

The result is an existence statement with no construction behind it. And the two bounds in the key statement are far apart: one grows like $1.414^k$ and the other like $4^k$. The base $\sqrt2$ of the lower bound has not been improved since 1947. In 2023 Campos, Griffiths, Morris and Sahasrabudhe announced the first improvement in the base of the upper bound, to $(4 - \varepsilon)^k$ for a small constant $\varepsilon > 0$.

**Worked example.** **What we know about $R(5,5)$.** The theorem gives $R(5,5) > 2^{5/2} \approx 5.66$, which is no news, since a clique of size 5 needs 5 vertices. Using the union bound directly does better. We need $\binom{n}{5} \cdot 2^{1 - 10} < 1$, that is, $\binom{n}{5} < 512$. Since $\binom{11}{5} = 462$ and $\binom{12}{5} = 792$, we get $R(5,5) > 11$. The Erdős and Szekeres bound is $R(5,5) \le \binom{8}{4} = 70$.

The state of knowledge, as of 2026, is $43 \le R(5,5) \le 46$. The lower bound is an explicit coloring of $K_{42}$ found by Exoo in 1989 with a computer search. The upper bound is a computer-assisted proof by Angeltveit and McKay, announced in 2023, which improved their earlier bound of 48 from 2016. The exact value is still unknown.

The probabilistic method has since become a standard technique in combinatorics for proving the existence of objects that no one knows how to construct explicitly. The reusable step is to replace "find one" by "show that a random one works with positive probability".

To illustrate how challenging the problem remains despite its simple statement, Joel Spencer recounts the following anecdote: "Erdős asks us to imagine an alien force, vastly more powerful than us, landing on Earth and demanding the value of $R(5, 5)$ or they will destroy our planet. In that case, he claims, we should marshal all our computers and all our mathematicians and attempt to find the value. But suppose, instead, that they ask for $R(6, 6)$. In that case, he believes, we should attempt to destroy the aliens." For $R(6,6)$ the known bounds are far apart: it is at least 102, and the best proved upper bound is 160.

**Check yourself.** A random 2-coloring of $K_5$ has 10 triangles, each monochromatic with probability $\frac14$, so the union bound on "some triangle is monochromatic" is $2.5$. What follows?
Answer: Nothing about existence in either direction The union bound only helps when it comes out below 1. Here it is above 1, so we must argue another way, and the pentagon shows that a valid coloring does exist.

**Recap.** - $R(s,t)$ is the least $n$ such that every 2-coloring of $K_n$ has a blue clique of size $s$ or an orange clique of size $t$. An upper bound needs an argument about all colorings. A lower bound needs one good coloring.
- $R(3,3) = 6$: the pentagon coloring of $K_5$ has no monochromatic triangle, and in $K_6$ any vertex has three edges of one color, whose far ends finish the argument.
- Erdős and Szekeres: $R(s,t) \le R(s-1,t) + R(s,t-1)$, hence $R(s,t) \le \binom{s+t-2}{s-1}$ and $R(k,k) < 4^{k-1}$.
- Union bound: $P(A_1 \cup \dots \cup A_m) \le P(A_1) + \dots + P(A_m)$, with no independence needed.
- Erdős: if $\binom{n}{k} 2^{1 - \binom{k}{2}} < 1$ then $R(k,k) > n$. This gives $R(k,k) > 2^{k/2}$ for $k \ge 3$. The proof shows that a coloring exists and does not construct one.
- As of 2026, $43 \le R(5,5) \le 46$.

## Problems

Problems 1 and 2 repeat the lesson's moves, 3 to 5 combine them, and 6 and 7 go further.

**Problem 1.** Use the theorem of Erdős and Szekeres to show that $R(3,4) \le 10$ and $R(4,4) \le 20$. Check both against the binomial bound.

**Solution.** By the recurrence and the base case $R(2,4) = 4$, we get $R(3,4) \le R(2,4) + R(3,3) = 4 + 6 = 10$. Exchanging the two colors in the definition shows $R(4,3) = R(3,4)$, so $R(4,4) \le R(3,4) + R(4,3) \le 10 + 10 = 20$. The binomial bound gives $\binom{3+4-2}{2} = \binom{5}{2} = 10$ and $\binom{6}{3} = 20$, the same numbers. (The true values are $R(3,4) = 9$ and $R(4,4) = 18$.)

**Problem 2.** Each edge of $K_n$ is colored blue or orange by a fair coin flip. (a) Find the expected number of monochromatic triangles, and evaluate it for $n = 6$. (b) For $n = 5$ the expected number is $2.5$, yet the pentagon coloring has none. Why is there no contradiction?

**Solution.** (a) For each of the $\binom{n}{3}$ triangles $T$, let $X_T$ be 1 if $T$ is monochromatic and 0 otherwise. Its [expected value](@probability/expected-value) is $P(T \text{ is monochromatic}) = 2 \cdot 2^{-3} = \frac14$. The number of monochromatic triangles is the sum of the $X_T$, and the expected value of a sum is the sum of the expected values, whether or not the terms are independent. So the expected number is $\frac14\binom{n}{3}$. For $n = 6$ it is $\frac{20}{4} = 5$. (b) An expected value is an average over all colorings. An average of 2.5 requires some colorings with at most 2 monochromatic triangles and some with at least 3, and puts no other restriction on the smallest value, which can be 0. The number 2.5 is also the union bound: the sum of the probabilities of the events is the expected number of events that occur.

**Problem 3.** Now use three colors. Show that the edges of $K_{10}$ can be colored red, green and blue so that no four vertices have all six of their edges the same color.

**Solution.** Color each edge independently, with each color having probability $\frac13$. All $3^{45}$ colorings are equally likely. A given set of four vertices has 6 edges, and they all agree in 3 of the $3^6$ ways to color them, so the set is monochromatic with probability $3 \cdot 3^{-6} = \frac{1}{243}$. There are $\binom{10}{4} = 210$ such sets. By the union bound the probability that some set of four is monochromatic is at most $\frac{210}{243} < 1$. So with positive probability no set is, and a coloring of the required kind exists. For $K_{11}$ the same sum is $\frac{330}{243} > 1$ and this argument gives nothing.

**Problem 4.** Split $(k-1)^2$ vertices into $k - 1$ groups of $k - 1$ vertices each. Color an edge blue if its ends are in the same group and orange otherwise. Show that this proves $R(k,k) > (k-1)^2$, and compare with $2^{k/2}$ for $k = 20$ and $k = 40$.

**Solution.** In a blue clique every two vertices are in the same group, so the whole clique lies in one group and has at most $k - 1$ vertices. In an orange clique every two vertices are in different groups, so it has at most one vertex per group, again at most $k - 1$. So this coloring of $K_{(k-1)^2}$ has no monochromatic clique of size $k$, and $R(k,k) > (k-1)^2$. For $k = 20$ that is $361$ against $2^{10} = 1024$. For $k = 40$ it is $1521$ against $2^{20} = 1{,}048{,}576$. The construction grows like $k^2$ and the random bound grows exponentially.

**Problem 5.** For triangles in $K_5$ the union bound is $2.5$. Find the exact probability that a random 2-coloring of $K_5$ has a monochromatic triangle, by showing that exactly 12 of the $2^{10} = 1024$ colorings are valid.

**Solution.** Take a valid coloring. If some vertex $v$ had three edges of one color, to $x$, $y$ and $z$, the argument for $K_6$ would apply word for word: an edge among $x, y, z$ of that color closes a triangle with $v$, and otherwise $x, y, z$ is a triangle of the other color. So every vertex has at most two edges of each color, and since it has four edges, exactly two blue and two orange. Now follow the blue edges. Each vertex lies on exactly two of them, so the blue edges form closed loops with no vertex shared between loops. A loop has at least 3 vertices and there are 5 vertices, so there is a single loop through all five. Conversely, if the blue edges form a loop through all five vertices, draw the vertices around a pentagon in the order of the loop. This is the pentagon coloring with the colors exchanged, and it is valid by the gap argument. So the valid colorings correspond to the loops through five labeled vertices. There are $5! = 120$ ways to list the vertices in order, and each loop is listed $10$ times (5 starting points, 2 directions), which makes $12$ loops. The probability of a monochromatic triangle is $\frac{1024 - 12}{1024} = \frac{1012}{1024} \approx 0.988$. The union bound of 2.5 is correct and far from tight, because a typical coloring has several monochromatic triangles and the sum counts it once for each.

**Problem 6.** Every edge of $K_{17}$ is colored red, green or blue. Prove that there is a monochromatic triangle.

**Solution.** Fix a vertex $v$. It has 16 edges in 3 colors, so by the pigeonhole principle at least $\lceil 16/3 \rceil = 6$ of them share a color, say red, and they lead to six vertices $x_1, \dots, x_6$. If some edge $x_i x_j$ is red, then $v, x_i, x_j$ is a red triangle. Otherwise every edge among the six vertices is green or blue, which is a 2-coloring of $K_6$, and by the theorem that $R(3,3) \le 6$ it contains a green or a blue triangle. (Greenwood and Gleason showed in 1955 that 17 cannot be lowered.)

**Problem 7.** Show that every 2-coloring of $K_6$ contains at least two monochromatic triangles.

**Solution.** Call two edges that meet at a vertex a *mixed corner* if they have different colors. A triangle that is not monochromatic has two edges of one color and one of the other, so exactly two of its three corners are mixed: the two at the ends of the odd edge. A monochromatic triangle has no mixed corner. Now count mixed corners vertex by vertex. A vertex with $b$ blue edges and $5 - b$ orange edges is the meeting point of $b(5 - b)$ mixed corners, and $b(5-b)$ takes the values $0, 4, 6, 6, 4, 0$ for $b = 0, \dots, 5$, so it is at most 6. Over the six vertices there are at most 36 mixed corners. Every triangle that is not monochromatic uses up two of them, so at most 18 triangles are not monochromatic. $K_6$ has $\binom{6}{3} = 20$ triangles, so at least 2 are monochromatic.
