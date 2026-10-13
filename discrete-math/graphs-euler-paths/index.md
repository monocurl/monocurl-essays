# Bridges of Königsberg: Euler paths and circuits

> Seven bridges and a walk that nobody could find. Counting the edges at each vertex proves it cannot exist and settles every draw-without-lifting puzzle.

Series: Discrete Mathematics (https://www.monocurl.com/monocurl-essays/discrete-math/)
Canonical: https://www.monocurl.com/monocurl-essays/discrete-math/graphs-euler-paths/
Keywords: bridges of Königsberg, Euler path, Euler circuit, Eulerian graph, degree of a vertex, handshake lemma, graph theory introduction, draw without lifting the pen

[Figure 1, animation: A map of Königsberg in the 1730s: a river, an island, and seven bridges. A walker tries to cross every bridge exactly once, and after six bridges is stuck with one bridge still uncrossed.]

The city of Königsberg stood on a river with an island in the middle, and in the 1730s seven bridges joined the island, the two banks and the land to the east, as on the map above. The townspeople had a puzzle about them. Plan a walk that crosses every bridge exactly once. You may start wherever you like and finish wherever you like, but no bridge may be skipped and none may be crossed twice.

The walker in the animation starts on the north bank and does well for a while. After six bridges every bridge that touches the eastern land has been used, the walker is standing on it, and one bridge on the far side of the map has not been crossed.

**Pause and try.** Copy the map and try for yourself, with a different starting point and different choices. What is the largest number of bridges you can cross before you are stuck?

**Answer.** Six is the most that anyone manages, and many attempts stop at five. For instance, calling the north bank $A$, the south bank $B$, the island $C$ and the eastern land $D$, the walk $A, C, B, D, C, A, D$ crosses six bridges and leaves one of the bridges between $B$ and $C$ unused.

Failing many times does not show that the task is impossible, because a clever route might be hiding among the thousands not yet tried. The people of Königsberg suspected there was no such walk and could not say why. In 1736 Leonhard Euler could, and the idea he used is usually counted as the first theorem of a subject called graph theory.

## Throwing away the map

Most of the map has nothing to do with the puzzle. The lengths of the bridges and the shape of the island can change without changing which walks are possible. The only facts that matter are which pieces of land there are and which bridges join which. So shrink each piece of land to a dot and stretch each bridge into a line between two dots.

[Figure 2, animation: Each of the four land masses shrinks to a dot and each of the seven bridges stretches into a line joining two dots. Everything the puzzle depends on survives: 4 vertices and 7 edges.]

A picture of this kind is called a graph.

**Definition.** A **graph** consists of a finite set of **vertices** and a finite collection of **edges**. Each edge joins two different vertices, which are called its ends, and two vertices may be joined by more than one edge. The **degree** of a vertex $v$, written $\deg(v)$, is the number of edges that have $v$ as an end.

In the Königsberg graph the vertices are $A$, $B$, $C$, $D$ and the edges are the seven bridges. Two edges join $A$ to $C$ and two join $B$ to $C$, which is why the definition allows repeated edges. The puzzle now reads: trace along the edges, from vertex to vertex, so that every edge is traced exactly once.

On the graph it is easy to run several attempts and compare them.

[Figure 3, steps: Three attempts on the Königsberg graph, from three different starting vertices. Each one runs out of unused edges at some vertex while other edges, shown in red, are still untraced.]

  - step: Start at A. After six edges the walker is at D and all three edges at D are used. One edge is left over.
  - step: Start at C. This time the walker is stuck at D after five edges, with two edges left over.
  - step: Start at D. The walker uses all five edges at C and is stuck there, with two edges left over.
## Why an odd vertex is trouble

Look at where the three attempts died. Twice the walker was stranded at $D$, a vertex with three edges, and once at $C$, a vertex with five. To see why that keeps happening, forget the rest of the graph and watch a single vertex while a walk passes through it.

[Figure 4, steps: One vertex with 3 edges and one with 4, watched while a walk passes through. Each visit uses two edges, one to arrive and one to leave. With 3 edges the second visit cannot leave. With 4 edges it can.]

  - step: A walker in the middle of a trail arrives at the vertex. That uses one of its edges.
  - step: The walker must leave along a different edge. One visit has used two edges.
  - step: The walker comes back. At the vertex of degree 3 that uses the last edge, and there is no way out: the trail has to end here.
  - step: At the vertex of degree 4 the walker leaves again. Two visits used two edges each, and no edge is left over.
Each visit to a vertex consumes two of its edges, one coming in and one going out. To build a proof on that we need names for the kinds of route.

**Definition.** A **walk** in a graph is a sequence $v_0, e_1, v_1, e_2, \dots, e_k, v_k$ in which each $e_i$ is an edge joining the vertices $v_{i-1}$ and $v_i$. A **trail** is a walk in which no edge appears twice. A walk is **closed** if $v_k = v_0$, and a closed trail is called a **circuit**. An **Euler trail** is a trail that contains every edge of the graph, and an **Euler circuit** is a circuit that contains every edge.

The Königsberg puzzle asks for an Euler trail. The stricter version, in which you must also finish where you started, asks for an Euler circuit.

**Theorem.** (Necessity.) If a graph has an Euler circuit, then every vertex has even degree. If it has an Euler trail that is not closed, then the first and last vertices of the trail have odd degree and every other vertex has even degree.

**Proof.** Let $v_0, e_1, v_1, \dots, e_k, v_k$ be an Euler trail and let $v$ be any vertex. We count the edges at $v$ by going along the trail. Each time $v$ appears strictly inside the sequence, as $v_i$ with $0 < i < k$, it sits between the two edges $e_i$ and $e_{i+1}$, and both have $v$ as an end. If $v = v_0$, the edge $e_1$ has $v$ as an end, and if $v = v_k$, so does $e_k$. Every edge at $v$ is counted this way, because every edge of the graph is on the trail, and none is counted twice, because no edge is on the trail twice and no edge has $v$ at both ends. So

$$
\deg(v) = 2 \times (\text{number of inside appearances of } v) + [v = v_0] + [v = v_k],
$$

where a bracket is 1 if the statement in it is true and 0 if not. If the trail is closed, $v_0 = v_k$, so the two brackets are equal and $\deg(v)$ is even for every $v$. If it is not closed, the brackets add up to 1 when $v$ is $v_0$ or $v_k$ and to 0 otherwise.

Now count the edges at each vertex of the Königsberg graph.

[Figure 5, image: The Königsberg graph with the degree of each vertex. Each edge has two ends, marked by dots, so the degrees add up to twice the number of edges. All four degrees are odd.]

The degrees are 3, 3, 5 and 3. An Euler circuit would need all four to be even, and an Euler trail that is not closed would need exactly two to be odd. Königsberg has four odd vertices, so it has neither. The puzzle has no solution, and we know it without examining a single route.

**Key idea.** A walk passes through a vertex by using its edges two at a time. So a walk that uses every edge exactly once can exist only if every vertex has even degree, except possibly the two vertices where the walk starts and stops.

## The handshake lemma

Could a town be built with exactly one odd vertex? Or three? The figure above suggests a constraint: the degrees added up to 14, which is twice the number of bridges.

**Pause and try.** Draw any graph you like, with five or six vertices, and add up its degrees. Compare with the number of edges. Then explain what you see.

**Answer.** The sum is always twice the number of edges. Each edge has two ends, and the degree of a vertex counts the edge ends that sit at it. Adding the degrees therefore counts every edge end once, which counts every edge twice.

**Theorem.** (Handshake lemma.) In any graph with $m$ edges, the sum of the degrees of all the vertices is $2m$. Consequently the number of vertices of odd degree is even.

**Proof.** Count the pairs $(v, e)$ in which $e$ is an edge and $v$ is an end of $e$. Grouping the pairs by vertex, the vertex $v$ is in $\deg(v)$ of them, so their number is the sum of the degrees. Grouping by edge, each edge is in exactly 2 pairs, so their number is $2m$. For the second claim, split the sum of the degrees into the even degrees and the odd ones. The total is even and the even degrees contribute an even amount, so the odd degrees add up to an even number. A sum of odd numbers is even only when there is an even number of them.

The name comes from parties, with guests as vertices and handshakes as edges. For us it means that the possible counts of odd vertices are 0, 2, 4 and so on. Zero and two are the cases the necessity theorem leaves open.

**Pause and try.** Each of the three figures below is to be drawn with one stroke of the pen, without lifting it and without going over any line twice. In each figure a crossing of two lines in the middle is not a vertex. Count degrees and predict: which figures are impossible? For the others, where would you have to start?

**Answer.** (a) The two bottom corners have degree 3, the two upper corners have degree 4 and the top has degree 2. With exactly two odd vertices a closed tour is impossible, and an open one would have to start at one bottom corner and end at the other. (b) All four corners have degree 3, so it is impossible. (c) All five vertices have degree 4, so nothing we have proved forbids it. Whether figures (a) and (c) can in fact be drawn is the next question.

[Figure 6, image: Three figures to draw without lifting the pen: (a) a house with both diagonals, (b) a square with both diagonals, (c) a pentagon with all five diagonals.]

## Even degrees are enough, in a connected graph

So far the theorem only forbids. It says that odd vertices spoil a tour, and it does not say that a graph without odd vertices has one. In fact there is one more way to fail.

[Figure 7, image: Left: two separate triangles. Every degree is 2, but no trail can get from one triangle to the other. Right: the same triangles sharing a vertex. The graph is connected, and it has an Euler circuit.]

**Definition.** A graph is **connected** if for every two of its vertices there is a walk from one to the other.

A graph with an Euler trail and no vertices of degree 0 is certainly connected, since the trail itself visits every vertex. The surprise is that connectedness and even degrees together are sufficient. To find out why, take a connected graph with all degrees even and try the most naive plan: start somewhere and keep walking along unused edges until you cannot.

**Pause and try.** The graph in the next figure is a triangle with its three midpoints joined. Starting at the corner $P$, a walker goes around the outside, $P, U, Q, V, R, W, P$, and is stuck at $P$ with three edges untraced. Before stepping through the figure, find a way to enlarge this circuit so that it takes in the three missing edges.

**Answer.** The missing edges form the small triangle $U, V, W, U$, which is itself a circuit, and it touches the big circuit at $U$. On reaching $U$ for the first time, go around the small triangle and return to $U$, then carry on as before: $P, U, V, W, U, Q, V, R, W, P$. All nine edges are used once each.

[Figure 8, steps: Building an Euler circuit by splicing. A first circuit from P stops after 6 edges. The leftover edges form a second circuit through U. Inserting the second circuit into the first at U gives one circuit through all 9 edges.]

  - step: Every vertex has even degree: 2 at the corners P, Q, R and 4 at the midpoints U, V, W.
  - step: Start at P and keep walking along unused edges. The walk stops only when it is back at P, after 6 edges.
  - step: Three edges are unused, and they touch the circuit at U. A new walk from U along unused edges comes back to U.
  - step: Splice them: follow the first circuit to U, go around the second, then finish the first. One circuit uses all 9 edges.
Two things happened in that figure, and each needs a reason. The walker got stuck only at the starting vertex, which is the in and out count again. And the leftover edges touched the circuit somewhere, which is where connectedness is used.

**Theorem.** (Euler 1736, Hierholzer 1873.) Let $G$ be a connected graph with at least one edge.

- $G$ has an Euler circuit if and only if every vertex of $G$ has even degree.
- $G$ has an Euler trail that is not closed if and only if exactly two vertices of $G$ have odd degree. Every such trail starts at one of the two and ends at the other.

Euler proved the "only if" halves and stated the rest. The first published proof of the "if" halves is due to Carl Hierholzer, and it is the splicing argument. The "only if" halves are the necessity theorem above, so what remains is to construct the tours. We start with part 1.

**Proof.** (Part 1, "if".) Suppose $G$ is connected and every degree is even.

*Step 1: a walk along unused edges gets stuck only where it began.* Let $H$ be any graph in which every degree is even, and let $u$ be a vertex of $H$ with at least one edge. Start a trail at $u$ and extend it by one unused edge at a time for as long as possible. This must stop, because there are finitely many edges. Suppose the trail currently ends at a vertex $w \ne u$. By the count in the necessity proof, applied to the edges of the trail, the trail has used $2 \times (\text{inside appearances of } w) + 1$ edges at $w$, an odd number. Since $\deg(w)$ is even, some edge at $w$ is unused and the trail can be extended. So the trail can stop only at $u$, and when it does it is a circuit with at least one edge.

*Step 2: a longest circuit contains every edge.* $G$ has at least one edge, so Step 1, applied to $G$ and an end of that edge, shows that $G$ contains a circuit with at least one edge. Among all circuits in $G$ choose one, $C$, with the largest number of edges, and suppose that some edge $f$ of $G$ is not on $C$. Pick a vertex $c$ on $C$ and an end $x$ of $f$. Because $G$ is connected there is a walk from $c$ to $x$, and we extend it by $f$. This walk starts at a vertex of $C$ and contains an edge that is not on $C$. Let $g$ be the first such edge and $u$ the vertex just before it on the walk. Then $u$ is on $C$, because it is either $c$ or an end of an edge of $C$.

Remove the edges of $C$ from $G$ and call the resulting graph $H$. A circuit uses an even number of edges at each vertex (the count in the necessity proof again, with $v_0 = v_k$), so every degree in $H$ is still even, and $u$ has the edge $g$ in $H$. By Step 1 there is a circuit $D$ in $H$ that starts and ends at $u$ and has at least one edge. Now follow $C$ from its start until it reaches $u$, go around $D$, and then follow the rest of $C$. No edge is repeated, since $C$ and $D$ share none, so this is a circuit in $G$ with more edges than $C$. That contradicts the choice of $C$. Hence every edge of $G$ is on $C$, and $C$ is an Euler circuit.

Compare the proof with the figure. Step 1 is the walker returning to $P$. The walk from $c$ to $x$ is how we know the leftover triangle must touch the first circuit, and for the two separate triangles no such walk exists, which is exactly where the proof breaks for them.

## Two odd vertices: an open trail

Part 2 follows from part 1 by a trick worth remembering: change the problem into one already solved. Take figure (a), the house, whose two bottom corners are odd.

[Figure 9, steps: An Euler trail in the house. An extra edge between the two odd vertices makes every degree even, so there is an Euler circuit. Deleting the extra edge opens the circuit into a trail from one odd vertex to the other.]

  - step: The bottom corners a and b have degree 3. The other three vertices have even degree.
  - step: Add one new edge from a to b. Both odd degrees go up by one, so every degree is now even.
  - step: By part 1 the enlarged graph has an Euler circuit. This one starts by crossing the new edge from a to b.
  - step: Delete the new edge. The rest of the circuit is a trail from b to a that uses each of the 8 original edges once.
**Proof.** (Part 2, "if".) Suppose $G$ is connected and exactly two vertices, $x$ and $y$, have odd degree. Add a new edge $f$ joining $x$ and $y$, and call the enlarged graph $G'$. It is connected, and all its degrees are even, because only the degrees of $x$ and $y$ changed and each went up by one. By part 1, $G'$ has an Euler circuit. A circuit can be started at any point along it, so write this one starting with the edge $f$ from $x$ to $y$. After $f$ it uses every edge of $G$ exactly once and ends back at $x$. Deleting $f$ therefore leaves a trail in $G$ from $y$ to $x$ that contains every edge of $G$.

So figure (a) can be drawn, from one bottom corner to the other and in no other way. Figure (c) is connected with all degrees 4, so it has an Euler circuit starting anywhere. Numbering its vertices 1 to 5 around the pentagon, one such circuit is $1, 2, 3, 4, 5, 1, 3, 5, 2, 4, 1$: the outside first, then the star.

## Worked examples

**Worked example.** **The verdict on Königsberg.** The graph is connected and its degrees are 3, 3, 5, 3. Four vertices are odd. By part 1 there is no Euler circuit, and by part 2 there is no open Euler trail, since that would require exactly two odd vertices. No walk crosses each bridge exactly once.

*Check against experience.* Deleting the edge between $C$ and $D$ lowers both of their degrees by one and leaves degrees 3, 3, 4, 2, with two odd vertices. So six of the seven bridges can be crossed in one walk, which agrees with the best attempts above.

**Worked example.** **A ring of dominoes.** A double-six set has one domino for each pair of numbers from 0 to 6, including the seven doubles, which makes 28 dominoes. Can all 28 be laid in a closed ring so that touching ends match?

Set the doubles aside. We want the dominoes to be edges, so let the vertices be the numbers $0, \dots, 6$ and let the domino with ends $a \ne b$ be an edge joining $a$ and $b$. A chain of dominoes with matching ends is then a trail, and a closed ring that uses all 21 non-doubles is an Euler circuit. Each number is paired once with each of the other six numbers, so every degree is 6, and the graph is connected because every two vertices are joined. By part 1 an Euler circuit exists. Each double, say the double 4, can then be slipped into the ring at a place where two 4s meet, and the circuit visits every vertex, so all 28 dominoes form a ring.

For a double-five set, with numbers 0 to 5, every degree is 5. All six vertices are odd, so the 15 non-doubles cannot form a ring, nor even a single line.

## Common mistakes

**Common mistake.** **Checking degrees and forgetting connectedness.** Two separate triangles have all degrees even and no Euler circuit. The theorem is about connected graphs, and the proof used the hypothesis at one precise point: to show that leftover edges touch the circuit already built. When you apply the theorem, say why the graph is connected.

**Common mistake.** **Confusing edges with vertices.** An Euler circuit uses every edge once and may visit a vertex many times. A circuit that visits every vertex once, called a Hamilton cycle, is a different thing, and the degree test says nothing about it. The square with both diagonals has a Hamilton cycle (go around the square) and no Euler trail. For Hamilton cycles no test as simple as counting degrees is known.

## Stepping back

The hard part of the Königsberg puzzle was that the number of possible routes is large and trying them teaches nothing. Euler's move was to stop looking at routes and look at one vertex at a time, where a route has to pair off the edges. That turned a search into a count. The same count now decides the question for any map, any pen-and-paper figure and a set of dominoes.

Proving that something cannot be done by finding a quantity that every attempt must respect, here the parity of a degree, is a method you will meet again. The [pigeonhole principle](@discrete-math/pigeonhole-principle) is another example of a count that forces a conclusion. Part 1 can also be proved by [induction](@discrete-math/induction) on the number of edges: remove a circuit and apply the hypothesis to the pieces that remain.

**Check yourself.** A connected graph has six vertices, with degrees 2, 2, 3, 3, 4, 4. What can you conclude?
Answer: It has an Euler trail that starts at one vertex of degree 3 and ends at the other, and no Euler circuit Exactly two vertices are odd and the graph is connected, so part 2 of the theorem applies.

**Recap.** - A graph has vertices and edges. The degree of a vertex is the number of edges with an end there, and the degrees add up to twice the number of edges, so the number of odd vertices is even.
- A trail repeats no edge. An Euler trail uses every edge, and an Euler circuit is an Euler trail that ends where it began.
- Passing through a vertex uses two of its edges. So an Euler circuit forces every degree to be even, and an open Euler trail forces exactly two odd vertices, its ends.
- Conversely, a connected graph with all degrees even has an Euler circuit. Walk until stuck, which happens only at the start, and splice in circuits made of leftover edges.
- A connected graph with exactly two odd vertices has an Euler trail between them: add an edge joining them, take an Euler circuit, delete the edge.
- Königsberg has degrees 3, 3, 5, 3, so the walk does not exist.

## Problems

Problems 1 to 3 apply the theorem directly. Problems 4 and 5 combine it with other counts. Problems 6 and 7 extend the lesson.

**Problem 1.** A graph has vertices $a, b, c, d, e, f$ and edges $ab, bc, cd, de, ef, fa, ac, ce, ea$. Find the degree of each vertex, check the handshake lemma, and decide whether the graph has an Euler circuit. If it does, write one down.

**Solution.** Counting appearances in the list: $a$ is in $ab, fa, ac, ea$, so $\deg(a) = 4$. Likewise $\deg(c) = 4$ (from $bc, cd, ac, ce$) and $\deg(e) = 4$ (from $de, ef, ce, ea$), while $b$, $d$ and $f$ have degree 2. The sum is $4 + 4 + 4 + 2 + 2 + 2 = 18 = 2 \times 9$. The graph is connected, since $ab, bc, cd, de, ef$ link all six vertices, and every degree is even, so there is an Euler circuit. Going around the hexagon and then the triangle: $a, b, c, d, e, f, a, c, e, a$. This uses $ab, bc, cd, de, ef, fa, ac, ce, ea$, all nine edges.

**Problem 2.** Two of the seven bridges were destroyed in the Second World War and others were rebuilt, and by the usual account five bridges now stand on the old sites: one from each bank to the island $C$, one from each bank to the eastern land $D$, and one between $C$ and $D$. Is the walk possible today? Where can it start?

**Solution.** The edges are $AC, BC, AD, BD, CD$. The degrees are $\deg(A) = 2$, $\deg(B) = 2$, $\deg(C) = 3$, $\deg(D) = 3$, with sum $10 = 2 \times 5$. The graph is connected and exactly two vertices are odd, so by part 2 there is an Euler trail, and it must start at $C$ or $D$ and end at the other. One such walk is $C, A, D, B, C, D$. A walk that returns to its starting point is still impossible.

**Problem 3.** Go back to the original seven bridges. What is the smallest number of new bridges the town would have had to build to make possible (a) a walk crossing every bridge once, (b) such a walk that also returns to its start?

**Solution.** All four vertices are odd. A new bridge raises the degree of each of its two ends by one, so it changes the parity of exactly two vertices. (a) We need at most two odd vertices. Zero new bridges leave four, so at least one is needed, and one is enough: a bridge from $A$ to $B$ makes the degrees 4, 4, 5, 3, and the walk then runs between $C$ and $D$. (b) We need all four vertices to become even. One bridge changes only two parities, so at least two bridges are needed. Two are enough: bridges from $A$ to $B$ and from $C$ to $D$ give degrees 4, 4, 6, 4, all even, and the graph is still connected.

**Problem 4.** The complete graph $K_n$ has $n$ vertices and exactly one edge between every two of them. For which $n \ge 2$ does $K_n$ have an Euler circuit? For which $n$ does it have an Euler trail that is not closed?

**Solution.** $K_n$ is connected, and each vertex is joined to the other $n - 1$, so every degree is $n - 1$. There is an Euler circuit exactly when $n - 1$ is even, that is, when $n$ is odd (for instance $K_5$, figure (c) of the lesson). When $n$ is even all $n$ vertices are odd, and an open Euler trail needs exactly two odd vertices, which happens only for $n = 2$. Indeed $K_2$ is a single edge, which is its own Euler trail, while $K_4$, figure (b), has four odd vertices and no Euler trail.

**Problem 5.** (a) Nine people are in a room. Is it possible that each of them is friends with exactly three of the others? (Friendship is mutual.) (b) What if there are eight people?

**Solution.** (a) Make the people vertices and each friendship an edge. Every degree would be 3, so the sum of the degrees would be $9 \times 3 = 27$. By the handshake lemma the sum is twice the number of edges, which is even, and 27 is odd. So it is impossible. (b) The sum would be $8 \times 3 = 24$, so the lemma raises no objection, with 12 friendships. An example confirms it: put the eight people at the corners of a cube and let the 12 edges of the cube be the friendships. Each corner of a cube lies on exactly three edges.

**Problem 6.** A student claims: "In a connected graph with all degrees even, start anywhere and keep walking along unused edges. You can only get stuck at your starting vertex, so when you stop you have an Euler circuit." Show by an example with six edges that this is wrong, and say which part of the claim is true.

**Solution.** Take two triangles that share one vertex $u$: the first has vertices $u, x, y$ and the second $u, s, t$. The degrees are 4 at $u$ and 2 elsewhere, and the graph is connected. Start at $x$ and walk $x, u, y, x$. Every step uses an unused edge, and the walker is now at $x$ with both edges at $x$ used, so the walk stops after 3 of the 6 edges. The true part is that the walk can only stop at its starting vertex (Step 1 of the proof). The false part is the conclusion that all edges have been used by then. The repair is the splice: the unused triangle $u, s, t, u$ is inserted when the walk first reaches $u$, giving $x, u, s, t, u, y, x$.

**Problem 7.** A connected graph has exactly $2k$ vertices of odd degree, where $k \ge 1$. Prove that its edges can be split among $k$ trails, with every edge on exactly one trail, and that fewer than $k$ trails never suffice. How many strokes of the pen does the Königsberg graph need?

**Solution.** *$k$ trails suffice.* Pair up the odd vertices as $x_1, y_1$, then $x_2, y_2$, up to $x_k, y_k$, and add a new edge joining each pair. Every odd degree goes up by one, so the enlarged graph has all degrees even, and it is still connected. By part 1 it has an Euler circuit. Delete the $k$ new edges from this circuit. They cut it into $k$ pieces, each a trail made of original edges. No piece is empty: two new edges never share an end, because the $2k$ odd vertices are all different, so two new edges are never consecutive on the circuit. Every original edge is on exactly one piece.

*Fewer do not.* Suppose the edges are split among some trails. Let $v$ be a vertex that is not the first or last vertex of any of them. Then each trail passes through $v$ using two edges at a time, as in the necessity proof, so $\deg(v)$ is even. Hence each of the $2k$ odd vertices is the first or last vertex of at least one trail. A trail has only two such positions, so there are at least $k$ trails.

Königsberg has four odd vertices, so $k = 2$: the seven bridges need two separate walks, for example $A, C, B, D, C, A, D$ (six bridges) and then the remaining bridge $B, C$.
