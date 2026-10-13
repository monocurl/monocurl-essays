# The cycle double cover conjecture: bridges and paint

> Can cycles be laid on a graph so that every edge is used exactly twice? What the conjecture says, why bridges block it, and how far three colors get.

Series: AI Proofs (https://www.monocurl.com/monocurl-essays/ai-proofs/)
Canonical: https://www.monocurl.com/monocurl-essays/ai-proofs/cycle-double-cover-conjecture/
Keywords: cycle double cover conjecture, cycle double cover, bridgeless graph, cubic graph, 3-edge-coloring, Petersen graph, snark, graph theory conjecture

[Figure 1, animation: The corners and edges of a cube, pressed flat. The boundaries of its six faces, counting the face around the outside, are six cycles, and every edge has exactly two of them running along it.]

Here is the graph formed by the corners and edges of a cube, pressed flat onto the page. I want to lay cycles on it, closed routes that never pass through a node twice, so that every edge is used by exactly two of them. For the cube there is an easy way, which is to take the boundary of each face. Pressed flat, the cube shows five faces and has a sixth around the outside, and every edge lies between two faces, so the six boundaries together use every edge exactly twice.

Whether this can be done on every graph was an open question for at least fifty years. One kind of edge plainly prevents it, and the conjecture was that nothing else does. In July 2026 OpenAI published a proof found by one of its models, and the argument is short enough to go through completely, using nothing beyond the arithmetic of odd and even. It takes three lessons. This one states the problem exactly, makes two simplifications that lose nothing, and then follows the oldest partial result as far as it goes.

## Graphs, cycles and double covers

The proof will count edges at nodes, so the definitions have to be exact.

**Definition.** A **graph** consists of a finite set of **nodes** (also called vertices) and a finite set of **edges**. Each edge joins two different nodes, called its **ends**, so no edge runs from a node back to itself. Two nodes may be joined by more than one edge, and such edges are called **parallel**; a graph in this sense is sometimes called a multigraph. The **degree** of a node is the number of edges that have it as an end.

A **cycle** is a closed route $v_1, e_1, v_2, e_2, \dots, v_k, e_k, v_1$ with $k \ge 2$, in which the nodes $v_1, \dots, v_k$ are all different, the edges $e_1, \dots, e_k$ are all different, and each edge joins the node before it to the node after it. Two parallel edges form a cycle with $k = 2$.

A **cycle double cover** of a graph is a list of cycles, in which the same cycle may be listed twice, such that every edge of the graph lies on exactly two cycles of the list.

Parallel edges are allowed because one of the simplifications below creates them. The clause to remember is that the nodes of a cycle are all different: a cycle that visits a node arrives by one edge and leaves by another, so it uses exactly two of the edges at that node.

For the cube the six face boundaries have four edges each, which makes $6 \times 4 = 24$ uses of an edge, and the cube has 12 edges, each used twice.

**Pause and try.** The graph $K_4$ has four nodes $a, b, c, d$ and an edge between every two of them, six edges in all. Find a cycle double cover of $K_4$. Then find a second one with a different number of cycles.

**Answer.** The four triangles $abc$, $abd$, $acd$, $bcd$ work: the edge $ab$ lies on the two triangles that contain both $a$ and $b$, and the same holds for every edge. So do the three cycles of length four, $abcd$, $abdc$ and $acbd$: the cycle $abcd$ misses only the edges $ac$ and $bd$, the cycle $abdc$ misses $ad$ and $bc$, and $acbd$ misses $ab$ and $cd$, so each edge is missed by one of the three and used by the other two. Both lists use an edge $12 = 2 \times 6$ times.

## Bridges are the obvious obstacle

[Figure 2, steps: A graph made of two triangles joined by one edge. Removing that edge disconnects the graph, and a route that crosses it has no other way back.]

  - step: This graph has seven edges. Look at the one in the middle.
  - step: Remove it and the graph falls into two pieces. An edge like that is called a bridge.
  - step: Put it back and send a route across. On the far side it can go round the triangle, but the only way home is the edge it has already used.
**Definition.** An edge $e$ of a graph is a **bridge** if, once $e$ is deleted, there is no route from one end of $e$ to the other. A graph with no bridge is **bridgeless**.

The figure suggests that no cycle can use a bridge. That is true, and so is the converse, which we will need more often.

**Theorem.** (Bridges and cycles.) An edge of a graph lies on some cycle if and only if it is not a bridge.

**Proof.** Let $e$ join the nodes $u$ and $v$. If $e$ lies on a cycle, then the rest of that cycle is a route from $v$ back to $u$ that avoids $e$, so $e$ is not a bridge. Conversely, suppose $e$ is not a bridge. Then some route from $v$ to $u$ avoids $e$; choose one with as few edges as possible. It visits no node twice, because the stretch between two visits to the same node could be cut out to leave a shorter route. Closing it with $e$ gives a cycle through $e$.

So a graph with a bridge has no cycle double cover: the bridge would have to lie on two cycles and lies on none. The conjecture is that this is the only thing that can go wrong.

**Theorem.** (Cycle double cover theorem.) Every bridgeless graph has a cycle double cover.

This statement is the goal of the three lessons. Everything in the proof will be shown in full except one theorem from the 1970s, which the [second lesson](@ai-proofs/nowhere-zero-flows) states exactly and sketches.

**History.** George Szekeres stated the conjecture in 1973 for graphs with three edges at every node, and Paul Seymour stated it in 1979 for all bridgeless graphs. Alon Itai and Michael Rodeh gave an equivalent form in 1978. In a 1987 letter W. T. Tutte wrote that the question had been passed around in conversation long before anyone printed it. The proof published by OpenAI in July 2026 credits the company's model GPT 5.6 Sol Ultra, and the [third lesson](@ai-proofs/cycle-double-cover-proof) says who proved which part of what it rests on.

## A graph with no faces to use

The face trick needs a drawing in which no two edges cross, so that there are faces. For a bridgeless graph drawn that way the method always works, after some care in the cases where a face boundary passes through a node twice. The graph below has no such drawing. (I will not prove that, and nothing later depends on it.) It is called the Petersen graph, and ideas about cycles are tested on it first because so many of them fail there.

[Figure 3, steps: A first attempt on the Petersen graph. The outer ring and the inner star are two cycles, and after them every ring and star edge still needs one more cycle and every spoke needs two.]

  - step: The Petersen graph has ten nodes and fifteen edges, three at every node. One cycle goes around the outer ring.
  - step: A second cycle follows the inner star.
  - step: The five spokes are on no cycle yet, and it is not clear what to do next.
Graphs come in every shape, which makes them hard to reason about. Before attacking the Petersen graph we tidy the problem twice.

## Reducing to three edges at every node

The first simplification is a **reduction**: we replace the problem by a narrower one and show that solving the narrower one solves everything.

**Definition.** A graph is **cubic** if every node has degree 3.

The cube, $K_4$ and the Petersen graph are all cubic. The claim is that these are the only graphs we need to handle.

**Theorem.** (Reduction to cubic graphs.) If every bridgeless cubic graph has a cycle double cover, then every bridgeless graph has one.

The idea is to change a graph one node at a time until it is cubic, in such a way that a cover of the new graph can be turned back into a cover of the old one. A node of degree 4 or more gets pulled apart.

[Figure 4, steps: Splitting a node of degree four into two nodes of degree three, and turning a cycle double cover of the new graph back into one of the old graph. Only the part of the graph near the node is drawn.]

  - step: A node with four edges.
  - step: Pull it apart into two nodes, with two of the old edges on each, and join the two with a new edge. Both nodes now have three edges.
  - step: Suppose the new graph has a cycle double cover. Near the new edge its cycles run in a pattern like this one, two along every edge.
  - step: Shrink the new edge back to nothing. Every cycle is still a closed route, and every old edge still has two cycles along it.
There is a catch. Pulling a node apart can create a bridge, and then the new graph has no cover to hand back.

**Pause and try.** The four edges at a node can be sorted into two pairs in three ways. In the graph below, two triangles share the middle node. Which of the three pairings turns the new edge into a bridge?

**Answer.** Only one: the pairing that puts both edges of the left triangle on one new node and both edges of the right triangle on the other. Then the new edge is the only connection between the two triangles. The other two pairings put one edge of each triangle on each new node, and the new edge lies on a cycle that goes out through one triangle and back.

[Figure 5, steps: Two triangles sharing a node. Pairing the four edges by the triangle they belong to creates a bridge, and pairing one edge from each triangle does not.]

  - step: The middle node has four edges. Two belong to the left triangle and two to the right one.
  - step: Pair the edges by triangle and pull the node apart. The new edge is a bridge, so the new graph has no cycle double cover.
  - step: Go back, and pair one edge from each triangle instead.
  - step: Now a cycle runs through the new edge, so it is not a bridge.
The proof has to show that a good pairing always exists, and it has to deal with nodes of degree 2 as well.

**Proof.** Let $G$ be a bridgeless graph. A node of degree 0 has no edges and can be ignored. No node has degree 1, because its one edge would be a bridge. We first split nodes of degree 4 or more, then remove nodes of degree 2.

*Splitting.* Let $v$ have degree at least 4. Delete $v$ and its edges; the rest of the graph falls into connected pieces, and each edge at $v$ leads into one of them. No piece receives exactly one edge from $v$, since that edge would be a bridge. Choose two edges $e_1, e_2$ at $v$ as follows. If some piece receives three or more edges from $v$, take two of those. Otherwise every piece that receives an edge from $v$ receives exactly two, so the four or more edges at $v$ lead into at least two pieces, and we take one edge into each of two different pieces. Either way, the piece that $e_1$ leads into also receives from $v$ an edge $e_3$ different from $e_1$ and $e_2$. Form $G'$ by adding a node $v'$, moving the ends of $e_1$ and $e_2$ from $v$ to $v'$, and joining $v'$ to $v$ by a new edge $n$.

*$G'$ is bridgeless.* By the theorem on bridges and cycles it is enough to put every edge on a cycle. For $n$: leave $v'$ along $e_1$, take a shortest route inside the piece to the far end of $e_3$, come back to $v$ along $e_3$, and close with $n$. Any other edge $f$ lies on a cycle $C$ of $G$. If $C$ uses both or neither of $e_1, e_2$, the same edges form a cycle of $G'$. If it uses exactly one, inserting $n$ beside it gives a cycle of $G'$.

*A cover comes back.* Take a cycle double cover of $G'$ and shrink $n$ to a point. A cycle through $n$ loses that edge and remains a cycle. A cycle that passes through $v'$ along $e_1, e_2$ and also through $v$ becomes a closed route that visits $v$ twice; cut it at $v$ into two cycles. Every other cycle keeps its edges and remains a cycle. Each edge of $G$ is still on exactly two cycles of the list.

Each split lowers the degree of $v$ by one and creates a node of degree 3, so after finitely many splits every node has degree 2 or 3.

*Degree 2.* Let $v$ have degree 2, with edges to $a$ and $b$. If $a \ne b$, replace $v$ and its two edges by a single edge from $a$ to $b$. Cycles through $v$ correspond exactly to cycles through the new edge, so the new graph is bridgeless, and a cover of it becomes a cover of the old graph when $v$ is put back. If $a = b$, the two edges are parallel. Then $a$, whose degree is 2 or 3, has no third edge: a cycle through a third edge would leave $a$ along one of the parallel edges and could only return from $v$ to $a$, a node it has already visited. So $a$, $v$ and the two parallel edges are a separate piece of the graph, and listing that two-edge cycle twice covers it.

When no node of degree 2 is left the graph is cubic and bridgeless, so by hypothesis it has a cycle double cover, and undoing the steps in reverse order gives one for $G$.

From here on, every graph is cubic and bridgeless.

## Trading cycles for paint

The second simplification changes what we search for. A cycle is awkward to hunt for, because whether a set of edges forms one cannot be checked by looking at one node. So give every cycle of a cover its own paint, and paint the edges it runs along. Two things are then true. Every edge has two coats, in two different paints. And at every node, each paint is on exactly two of the edges there, because its cycle arrives by one edge and leaves by another, or on none, because its cycle misses the node.

**Definition.** A **painting** of a graph assigns to every edge a set of exactly two paints, its two **coats**, so that at every node each paint is on exactly two of the edges at that node or on none of them.

Both rules can be checked one edge and one node at a time. The question is whether they are enough.

**Pause and try.** Suppose someone hands you a painting, and you want cycles. Stand on an edge that has some paint, walk to its end, and look for the same paint on another edge. Why is there exactly one choice? And why can the walk not run into a node it has already left, other than its starting node?

**Answer.** At the node you arrive at, the paint is on exactly two edges, the one you came along and one other, so the way on is forced. If the walk arrived at a node it had already passed through, that node would have the paint on three edges: the two used on the first visit and the one used to arrive now. That is against the rule. Since the graph is finite, the walk must repeat a node eventually, and the only node it can repeat is the one where it started.

[Figure 6, animation: Three paints on the cube, each on eight edges. A walker follows the purple paint from edge to edge and returns to its start after four edges. The purple paint that is left over gives a second cycle in the same way.]

**Theorem.** (Paint and cycles.) A graph has a cycle double cover if and only if it has a painting.

**Proof.** Given a cycle double cover, use one paint for each entry of the list and put it on the edges of that cycle. Each edge is on two entries, so it gets two different paints, and a cycle uses two edges or none at each node. That is a painting.

Given a painting, fix a paint $s$ and let $M$ be the set of edges that have it. Start at any edge $e_1$ of $M$, from one end $v_0$ to the other end $v_1$, and keep walking: from each node leave by the edge of $M$ other than the one just used. Let $v_j$ be the first node on the walk that equals an earlier one, $v_i$. If $i \ge 1$, the node $v_i$ already has two edges of $M$, the ones the walk used there, and the edge $e_j$ by which the walk arrives is a third. (It is not the edge from $v_i$ to $v_{i+1}$, since then $v_{j-1} = v_{i+1}$, which forces $j - 1 = i + 1$ and means the walk turned back along the edge it had just used. It is not the edge from $v_{i-1}$ to $v_i$, since then $v_{j-1} = v_{i-1}$ would be an earlier repeat.) Three edges of $M$ at one node is against the rule, so $i = 0$: the walk has returned to its start, and $v_0, \dots, v_{j-1}$ with the edges walked form a cycle. That cycle uses both edges of $M$ at each node it visits, so the edges of $M$ outside it still number two or none at every node, and the same walk can be repeated on them until $M$ is used up. Doing this for every paint gives a list of cycles in which each edge appears once for each of its two coats.

So for the rest of the proof we look for a painting. In a cubic graph the rules pin down what a painting looks like at a single node.

[Figure 7, image: One node of a cubic graph in a painting. The six coat ends at the node are shared out two to a paint, so exactly three paints meet there, one for each pair of edges.]

**Theorem.** (Three paints at a node.) In a painting of a cubic graph, exactly three paints appear at each node, and each of the three pairs of edges at the node shares exactly one of them.

**Proof.** The three edges at the node carry $3 \times 2 = 6$ coats. Each paint that appears there accounts for exactly two of the six, so three paints appear, each on two edges. Suppose two of them, $p$ and $q$, were on the same two edges. Those edges would each carry exactly $p$ and $q$. The third paint is on two of the three edges, so on at least one of those two, which would then have three coats. Hence the three paints are on three different pairs of edges, and there are only three pairs.

**Key idea.** For a bridgeless cubic graph, a cycle double cover is the same thing as a painting: two coats on every edge, and at every node three paints, one shared by each pair of edges.

## Three colors give three paints

For some cubic graphs a painting can be read off from a different and much older kind of coloring.

**Definition.** A **3-edge-coloring** of a cubic graph gives each edge one of three colors so that the three edges at every node have three different colors.

A coloring is not a painting. A coloring puts one color on an edge, and a painting puts two coats on it. Here is how one turns into the other on $K_4$.

[Figure 8, steps: A 3-edge-coloring of K_4 turned into a painting. Each pair of colors forms a cycle, which becomes one paint, and every edge ends up with two coats.]

  - step: Color each edge orange, blue or green so that every node sees all three colors. The two diagonals are green.
  - step: Keep the orange and blue edges. Every node has one of each, so they form a closed route. Call it the first paint.
  - step: Orange and green together give the second paint.
  - step: Blue and green give the third.
  - step: Put all three on. An orange edge is in orange with blue and in orange with green, so it has exactly two coats, and so has every other edge.
**Theorem.** (Szekeres, 1973.) A cubic graph with a 3-edge-coloring has a painting with three paints, and so a cycle double cover.

**Proof.** Call the colors 1, 2, 3 and the paints $A$, $B$, $C$. Give every edge of color 1 the coats $A, B$, every edge of color 2 the coats $A, C$, and every edge of color 3 the coats $B, C$. Each edge has two different coats. At a node there is exactly one edge of each color, so paint $A$ is on exactly two edges there, the ones colored 1 and 2, and likewise $B$ and $C$. This is a painting, and the theorem on paint and cycles turns it into a cycle double cover.

**Worked example.** **Three paints on the cube.** The edges of the flattened cube are of three kinds: the four horizontal edges of the two squares, their four vertical edges, and the four slanted edges that join the squares. Every node has one edge of each kind, so the kinds are a 3-edge-coloring. The paint for "horizontal with vertical" covers the outer square and the inner square. Those are two separate cycles in one paint, which is why the proof above had to allow a paint to be walked more than once. The paint for "horizontal with slanted" covers the top and bottom faces, and "vertical with slanted" covers the left and right faces. These are the three paints in the walking figure above.

*Check.* Each paint is on 8 edges, so there are $3 \times 8 = 24$ coats on 12 edges, two each.

**Worked example.** **A cubic graph that cannot be colored, for a simple reason.** Take $K_4$ and put a new node $m$ in the middle of one of its edges, so that $m$ has degree 2 and the other four nodes still have degree 3. Do the same to a second copy of $K_4$, with new node $m'$, and join $m$ to $m'$ by an edge. The result is a cubic graph with 10 nodes and 15 edges, and the edge from $m$ to $m'$ is a bridge. Does it have a 3-edge-coloring?

We could try colors, but the two theorems we have settle it without any search. A 3-edge-coloring would give a cycle double cover, by the theorem of Szekeres. A graph with a bridge has no cycle double cover, by the theorem on bridges and cycles. So there is no 3-edge-coloring. The same argument applies to every cubic graph with a bridge.

**Common mistake.** **Treating a color as a paint.** In a 3-edge-coloring the orange edges at different nodes never meet, so the orange edges alone do not form cycles. A paint is on two edges at every node it touches and does form cycles. Each paint here is a union of two colors.

**Common mistake.** **Testing for bridges by degrees.** It is tempting to think that a graph in which every node has degree 2 or more has no bridge. The two triangles joined by an edge show otherwise: their degrees are 2, 2, 3, 3, 2, 2. Whether an edge is a bridge depends on the routes around it, and has to be checked edge by edge.

## The Petersen graph has no 3-edge-coloring

If every bridgeless cubic graph had a 3-edge-coloring we would be finished. Try it on the Petersen graph, starting with the outer ring.

**Pause and try.** The outer ring has five edges. In a 3-edge-coloring, two ring edges that share a node have different colors. Show that some color is used on exactly one ring edge.

**Answer.** Two colors are not enough: going round the ring they would have to alternate, and after five edges the last would match the first, which it touches. So all three colors appear. A single color cannot be on three ring edges, because among any three of the five edges two share a node. So each color is on at most two edges, and the only way three colors can fill five edges is two, two and one.

[Figure 9, steps: An attempt to 3-edge-color the Petersen graph. After the outer ring is colored the spokes are forced, and then the two star edges at the top inner node cannot both be colored.]

  - step: Color the outer ring. One color is used once, here green, and the other two alternate.
  - step: At each outer node two colors are taken, so the spoke must have the third.
  - step: Three spokes are green. At the inner end of each, the two star edges must be orange and blue in some order. That accounts for all five star edges.
  - step: The top inner node has a blue spoke, so its two star edges need orange and green. Neither can be green, and they cannot both be orange.
**Theorem.** The Petersen graph has no 3-edge-coloring.

**Proof.** Number the outer nodes 0 to 4 around the ring and let $i'$ be the inner node joined to $i$ by a spoke. The star joins $0'$ to $2'$ and $3'$, joins $1'$ to $3'$ and $4'$, and $2'$ to $4'$. Suppose a 3-edge-coloring exists. By the exercise above, one color is on exactly one ring edge. Rotating the picture by a fifth of a turn carries the graph onto itself, so we may take that edge to be the one from 4 to 0, and by renaming colors we may call its color green and color the remaining ring edges orange, blue, orange, blue, starting from the edge from 0 to 1.

Each spoke has the color missing at its outer node. Node 0 has green and orange, so its spoke is blue. Nodes 1, 2 and 3 have orange and blue, so their spokes are green. Node 4 has blue and green, so its spoke is orange.

At $2'$ and $3'$ the spoke is green, so every star edge at $2'$ or $3'$ is orange or blue. The two star edges at $0'$ go to $2'$ and $3'$, so both are orange or blue. But the spoke at $0'$ is blue, so those two edges must be orange and green in some order. Neither can be green, and they cannot both be orange. This contradiction shows that no 3-edge-coloring exists.

A computer search agrees: the ring can be colored in 30 ways, and none of the 30 can be completed. Cubic bridgeless graphs with no 3-edge-coloring are called snarks, and the Petersen graph is the smallest.

## Where this leaves us

We have a precise target and two simplifications that cost nothing. The graph may be assumed cubic and bridgeless, and instead of cycles we look for a painting, which is a condition checked at one node at a time. A 3-edge-coloring gives a painting with three paints, but the Petersen graph has no such coloring, so it needs more paints. (A theorem recorded in François Jaeger's 1985 survey says that a cubic graph with a painting in four paints also has one in three, so the Petersen graph needs at least five. The last problem below proves the three-paint half of that.)

With more than three paints there is no coloring to start from, and searching for all the paint at once is hopeless. What is missing is a way to build a painting in two stages. The [next lesson](@ai-proofs/nowhere-zero-flows) gives each paint a code made of bits, records on every edge only how its two coats differ, and shows that such records always exist.

**Check yourself.** In a painting of a cubic graph, two of the three edges at a node carry the coats $\{1, 2\}$ and $\{2, 3\}$. What are the coats on the third edge?
Answer: $\{1, 3\}$ Paint 2 is already on two edges, so it is not on the third. Paints 1 and 3 are each on one edge so far and need a second, and the third edge is the only place left.

**Recap.** - A cycle double cover is a list of cycles with every edge on exactly two of them. An edge lies on a cycle exactly when it is not a bridge, so a graph with a bridge has no cover. The theorem to be proved is that every bridgeless graph has one.
- It is enough to prove this for cubic graphs: nodes of degree 4 or more are split along a pairing that creates no bridge, nodes of degree 2 are removed, and a cover of the result is carried back.
- A cycle double cover is the same thing as a painting: two coats on every edge, and at every node each paint on two edges or none. In a cubic graph exactly three paints meet at each node, one for each pair of edges.
- A 3-edge-coloring gives a painting with three paints (Szekeres). The Petersen graph has no 3-edge-coloring, so this route stops there.

## Problems

The first three repeat the moves of the lesson, the next two combine them, and the last two go a little further.

**Problem 1.** A graph has nodes $a, b, c, d, e$ and edges $ab$, $bc$, $ca$, $cd$, $de$, $ec$. Does it have a bridge? Find a cycle double cover or explain why there is none.

**Solution.** The graph is two triangles, $abc$ and $cde$, sharing the node $c$. Every edge lies on one of the triangles, so by the theorem on bridges and cycles there is no bridge. Listing each triangle twice gives a cycle double cover: every edge is on its own triangle, which appears twice. No other cover exists, because the only cycles in this graph are the two triangles (a cycle cannot pass through $c$ twice).

**Problem 2.** The prism has nodes $a_1, a_2, a_3, b_1, b_2, b_3$ and edges $a_1a_2$, $a_2a_3$, $a_3a_1$, $b_1b_2$, $b_2b_3$, $b_3b_1$, $a_1b_1$, $a_2b_2$, $a_3b_3$. Find a 3-edge-coloring, and write down the cycles of the three paints it gives.

**Solution.** Color $a_1a_2$ with 1, $a_2a_3$ with 2 and $a_3a_1$ with 3. Then $a_1$ has colors 1 and 3, so $a_1b_1$ gets 2; similarly $a_2b_2$ gets 3 and $a_3b_3$ gets 1. At $b_1$ color 2 is taken and at $b_2$ color 3, so $b_1b_2$ gets 1; in the same way $b_2b_3$ gets 2 and $b_3b_1$ gets 3. Every node now has all three colors. Colors 1 and 2 form the cycle $a_1 a_2 a_3 b_3 b_2 b_1$. Colors 1 and 3 form $a_1 a_2 b_2 b_1 b_3 a_3$. Colors 2 and 3 form $a_1 a_3 a_2 b_2 b_3 b_1$. Each is a single cycle of six edges, and $3 \times 6 = 18 = 2 \times 9$.

**Problem 3.** In a cycle double cover of a graph with $m$ edges, what do the lengths of the cycles add up to? The Petersen graph has 15 edges and no cycle with fewer than 5 edges. What is the largest number of cycles a cover of it could have, and what would such a cover consist of?

**Solution.** Each edge is counted once by each of the two cycles through it, so the lengths add up to $2m$. For the Petersen graph that is 30. Every cycle has at least 5 edges, so there are at most $30 / 5 = 6$ cycles, and a cover with six cycles would consist of six cycles of exactly five edges. (The third lesson finds one.)

**Problem 4.** Show that a cubic graph has an even number of nodes, and that in a 3-edge-coloring each color is on exactly half as many edges as there are nodes.

**Solution.** Count the ends of edges. Each of the $n$ nodes has three, so there are $3n$, and each edge has two, so $3n$ is twice the number of edges. Hence $3n$ is even, and so $n$ is even. In a 3-edge-coloring each node is an end of exactly one edge of a given color, and each such edge has two ends, so there are $n/2$ edges of that color.

**Problem 5.** A cubic graph has a bridge. Without using the theorem of Szekeres, show directly that it has no 3-edge-coloring. (Hint: look at one side of the bridge and count the ends of the edges of one color.)

**Solution.** Delete the bridge, colored orange say, and let $S$ be the set of nodes on one side. Consider the blue edges. None of them is the bridge, so every blue edge has both ends in $S$ or neither. Every node of $S$ is an end of exactly one blue edge, so the number of nodes in $S$ is twice the number of blue edges inside $S$, an even number. Now count orange edges the same way. Every node of $S$ is an end of exactly one orange edge, and all of these lie inside $S$ except the bridge, which has one end in $S$. So the number of nodes in $S$ is twice the number of orange edges inside $S$, plus one, an odd number. It cannot be both.

**Problem 6.** In the reduction, a cycle of the new graph $G'$ may pass through both $v'$ and $v$ without using the new edge. Take $G$ to be two triangles sharing a node $v$, split $v$ with one edge of each triangle on each new node, and find a cycle double cover of $G'$ that contains such a cycle. What does it become when the new edge is shrunk?

**Solution.** Call the triangles $v a b$ and $v c d$, and let $v'$ take the edges to $a$ and $c$, while $v$ keeps the edges to $b$ and $d$. In $G'$ the route $v', a, b, v, d, c$ and back to $v'$ is a cycle of six edges that uses every edge except the new one. The routes $v', a, b, v$ and $v', c, d, v$, each closed by the new edge, are two cycles of four edges. These three cycles are a cover: the new edge is on both four-edge cycles, and every other edge is on the six-edge cycle and on one four-edge cycle. Shrinking the new edge turns the four-edge cycles into the triangles $vab$ and $vcd$, and turns the six-edge cycle into a closed route through $v$ twice, which is cut at $v$ into the same two triangles. The result is each triangle listed twice.

**Problem 7.** Suppose a cubic graph has a painting that uses only three paints in total. Show that the graph has a 3-edge-coloring. Conclude that any painting of the Petersen graph uses at least four paints.

**Solution.** By the theorem on three paints at a node, exactly three paints meet at each node, so with only three paints available all three appear at every node, each on two of its three edges. Every edge has two of the three paints, so it is missing exactly one; color the edge by the paint it is missing. At a node, each paint is on two edges and missing from one, and the three paints are on three different pairs of edges, so they are missing from three different edges. Thus the three edges at each node get three different colors, which is a 3-edge-coloring. The Petersen graph has none, so no painting of it uses only three paints. A painting cannot use fewer than three either, since three paints meet at every node.
