# Truth tables: and, or, not as calculation

> The word "or" has two meanings in English. Truth tables fix one, and turn questions about what sentences mean into finite calculations you can check row by row.

Series: Logic and Proof (https://www.monocurl.com/monocurl-essays/logic/)
Canonical: https://www.monocurl.com/monocurl-essays/logic/truth-tables/
Keywords: truth table, logical connectives, and or not, De Morgan's laws, logical equivalence, tautology, disjunctive normal form, NAND gate

[Figure 1, animation: Two circuits, each with a battery, a lamp and two switches P and Q. With the switches in series (left) the lamp lights only when both are closed. With the switches in parallel (right) it lights when at least one is closed.]

A restaurant menu says that the set lunch comes with soup or salad. The manual of a fire alarm says that it sounds if it detects smoke or heat. Now let both things happen at once. Ask the waiter for soup and salad, and you will be told to choose one. Fill the kitchen with smoke and heat together, and nobody expects the alarm to stay quiet on the grounds that it was only promised one of them.

The same two-letter word did opposite jobs. On the menu, "or" ruled out having both, and in the manual it allowed both. English leaves the choice to context, and most of the time context is enough. It stops being enough when the sentence gets long ("the valve opens if the pressure is high and the pump is off or the override is set"), or when the sentence is a step in a proof and the wrong reading makes the proof false.

Logic repairs this in the bluntest way available. It lists every situation that could arise and records, for each one, whether the compound sentence counts as true. The list is called a truth table. Once sentences have tables, a question such as "do these two sentences say the same thing?" is settled by a finite calculation, and the ear is no longer consulted.

## Statements, and the two meanings of "or"

First we have to say which sentences are allowed in.

**Definition.** A **statement** (also called a **proposition**) is a sentence that is either true or false, and not both. Its **truth value** is T if it is true and F if it is false.

"7 is a prime number" is a statement, with truth value T, and "London is in France" is one with truth value F. "Every even number greater than 2 is a sum of two primes" is a statement even though nobody knows its truth value, because it has one. "Close the door" and "Is it raining?" are not statements. Neither is "$x > 3$", since whether it is true depends on an $x$ we have not been given; sentences with a free variable are handled later in this series, with [quantifiers](@logic/quantifiers).

Now take the alarm. Write $S$ for "there is smoke" and $H$ for "there is heat". At a given moment each is true or false, so there are four possible situations: both, smoke only, heat only, neither. What the alarm does is a decision in each of the four. Do the same for the menu, with "you take soup" and "you take salad", and put the two side by side.

[Figure 2, animation: Two truth tables filled in row by row. On the left, the alarm sounds when there is smoke or heat. On the right, the lunch order is allowed when it has soup or salad. The two columns of results differ in exactly one row, the one where both parts are true.]

The alarm's column is true in three rows and the menu's in two. They differ only in the first row, where both parts are true. Mathematicians had to pick one meaning for the bare word, and they picked the alarm's: in mathematics "or" always means "one or the other or both". This is the **inclusive or**. The menu's meaning is the **exclusive or**, and we will build it out of other pieces in a moment.

Two more small words get the same treatment. "There is smoke and there is heat" is true in the first row only. "There is no smoke" is true exactly when $S$ is false.

**Definition.** Let $P$ and $Q$ be statements.

- The **negation** $\lnot P$, read "not $P$", is true exactly when $P$ is false.
- The **conjunction** $P \land Q$, read "$P$ and $Q$", is true exactly when $P$ and $Q$ are both true.
- The **disjunction** $P \lor Q$, read "$P$ or $Q$", is true exactly when at least one of $P$, $Q$ is true.

| $P$ | $Q$ | $\lnot P$ | $P \land Q$ | $P \lor Q$ |
|---|---|---|---|---|
| T | T | F | T | T |
| T | F | F | F | T |
| F | T | T | F | T |
| F | F | T | F | F |

The table is the definition. It makes no appeal to what "and" means in conversation, and that has a cost you should see clearly. A connective defined by a table can see only the truth values of its parts. "It is smoky but not hot" becomes $S \land \lnot H$: the note of surprise in "but" is dropped, because it has no effect on whether the sentence is true. And "because" cannot be given a table at all: knowing that $S$ and $H$ are both true does not tell you whether one caused the other.

**Pause and try.** Using only $\land$, $\lor$ and $\lnot$, write a formula in $P$ and $Q$ that has the menu's column: true when exactly one of $P$, $Q$ is true. Check it in all four rows.

**Answer.** One answer is $(P \lor Q) \land \lnot(P \land Q)$, "at least one, and not both". In the row T, T it is $\text{T} \land \lnot \text{T}$, which is F. In the rows T, F and F, T it is $\text{T} \land \lnot \text{F}$, which is T. In the row F, F the first part is already F. Another answer is $(P \land \lnot Q) \lor (\lnot P \land Q)$, "the first without the second, or the second without the first". Both are right, and we will soon say what that means.

## Switches: a machine that computes the tables

The animation at the top of the page is these definitions built out of wire. A switch is closed or open, and the lamp is lit exactly when there is an unbroken path from the battery through the lamp and back. Let $P$ be the statement "switch $P$ is closed", and likewise $Q$.

When the switches are in series, the current must pass through both, so the lamp is lit exactly when $P \land Q$ is true. When they are in parallel, either branch will carry the current, so the lamp is lit exactly when $P \lor Q$ is true. Compare the tiles under each circuit with the columns of the definition. For $\lnot P$, use a switch that is sprung the other way round, so that it is closed when its button is *not* pressed.

The circuit is a **model** of the table: a system with one part for each statement, two states for each part, and a behavior that agrees with the table in every row. Nothing about electricity enters the logic. What the model gives us is a second way to compute. In 1937 Claude Shannon observed that relay circuits obey exactly these tables, and digital circuits have been designed by this algebra ever since.

## The table of a compound statement

Connectives can be nested, with parentheses to show the order, as in $\lnot(P \land Q)$. By convention $\lnot$ applies to the shortest thing after it, so $\lnot P \lor Q$ means $(\lnot P) \lor Q$. Between $\land$ and $\lor$ I will always write the parentheses.

A formula with $n$ different letters has a table with $2^n$ rows, because each letter is independently T or F: 4 rows for two letters, 8 for three. To fill in the table, work from the inside out, one column at a time, each new column computed from columns already there.

Here is a case that matters. An inspector reports of the kitchen: "it is not the case that there is both smoke and heat". That is $\lnot(S \land H)$. What does it tell us about smoke and heat separately?

**Pause and try.** Which of these is the same as $\lnot(P \land Q)$: (a) $\lnot P \land \lnot Q$, or (b) $\lnot P \lor \lnot Q$? Before computing whole tables, test both in the single row where $P$ is true and $Q$ is false.

**Answer.** In that row $P \land Q$ is F, so $\lnot(P \land Q)$ is T. Formula (a) gives $\text{F} \land \text{T}$, which is F, so (a) is not the same. Formula (b) gives $\text{F} \lor \text{T}$, which is T. One row can rule a candidate out but cannot rule one in; the figure checks (b) in the other three rows.

[Figure 3, steps: The truth table of \lnot(P \land Q) built one column at a time, then compared with two candidates. The guess \lnot P \land \lnot Q is wrong in the two middle rows. The formula \lnot P \lor \lnot Q has the same column in every row.]

  - step: Start with the four rows and the innermost part, P and Q. It is true in the first row only.
  - step: Negate that column, flipping each entry. This is the column of not (P and Q).
  - step: The tempting guess, (not P) and (not Q), is true only in the last row. It disagrees in rows two and three.
  - step: The formula (not P) or (not Q) matches in all four rows.
The natural guess is to push the "not" inside the way a minus sign goes through a sum, and it fails. In words: "not both smoky and hot" does not say that the kitchen is neither. It says that at least one of the two is missing, and when a $\lnot$ moves inside the parentheses the $\land$ has to turn into $\lor$.

## Logical equivalence

We have now twice met two formulas with the same column: the two formulas for the menu's "or", and the pair in the figure. That relationship deserves a name.

**Definition.** Two compound statements built from the same letters are **logically equivalent**, written $A \equiv B$, if they have the same truth value in every row of the truth table, that is, for every assignment of truth values to the letters. A compound statement is a **tautology** if it is true in every row, and a **contradiction** if it is false in every row.

For example $P \lor \lnot P$ is a tautology and $P \land \lnot P$ is a contradiction; each has only two rows to check. Note that $\equiv$ is not a fourth connective. $A \equiv B$ is a claim *about* two formulas, and it is either established by comparing tables or refuted by a single row. Because a connective sees only truth values, a part of a formula may always be replaced by an equivalent part without changing the table of the whole. That is what makes the following laws usable as rules of algebra.

**Theorem.** For all statements $P$, $Q$, $R$:

- (Double negation) $\lnot\lnot P \equiv P$.
- (De Morgan's laws) $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$ and $\lnot(P \lor Q) \equiv \lnot P \land \lnot Q$.
- (Distributive laws) $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$ and $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$.

**Proof.** Each claim is a finite check.

(1) There are two rows. If $P$ is T then $\lnot P$ is F and $\lnot\lnot P$ is T. If $P$ is F then $\lnot P$ is T and $\lnot\lnot P$ is F.

(2) The first law is the figure above: both columns read T only in the last three rows. For the second, $P \lor Q$ has column T, T, T, F, so $\lnot(P \lor Q)$ has column F, F, F, T. And $\lnot P \land \lnot Q$ is $\text{F} \land \text{F}$, $\text{F} \land \text{T}$, $\text{T} \land \text{F}$, $\text{T} \land \text{T}$ in the four rows, which is F, F, F, T.

(3) The first distributive law is the eight-row table in the next figure. The second needs no new table. Write $P \lor (Q \land R)$ as the negation of its own negation and push the inner $\lnot$ through with De Morgan's laws. That leaves a conjunction inside, to which the first distributive law applies with $\lnot P$, $\lnot Q$, $\lnot R$ in place of $P$, $Q$, $R$. De Morgan and double negation then remove the negations again:

$$
P \lor (Q \land R) \equiv \lnot\bigl(\lnot P \land \lnot(Q \land R)\bigr) \equiv \lnot\bigl(\lnot P \land (\lnot Q \lor \lnot R)\bigr) \equiv \lnot\bigl((\lnot P \land \lnot Q) \lor (\lnot P \land \lnot R)\bigr)
$$

$$
\equiv \lnot(\lnot P \land \lnot Q) \land \lnot(\lnot P \land \lnot R) \equiv (P \lor Q) \land (P \lor R).
$$

[Figure 4, animation: The eight-row truth table that proves the first distributive law, filled in row by row. The column for P \land (Q \lor R) and the column for (P \land Q) \lor (P \land R) agree in all eight rows.]

A table is a proof because it is exhaustive: the rows cover every case there is, and each entry follows from the definitions.

The first distributive law has the shape of $a(b + c) = ab + ac$, with $\land$ as multiplication and $\lor$ as addition. The second has no counterpart in arithmetic, where $a + bc$ is not $(a + b)(a + c)$.

The switch model shows the first law as a fact about wiring. Build one circuit for each side and try all eight switch positions.

[Figure 5, animation: Two circuits for the two sides of the distributive law, run through all eight positions of the switches P, Q, R. The two switches marked P move together. The lamps are lit in exactly the same positions.]

To an engineer the equivalence says the two circuits are interchangeable, and the left one is cheaper, with three switches where the right one needs four.

## Venn diagrams are truth tables too

There is a third way to see these laws, and it is the one most people meet first. Draw a box for all the situations under discussion, a circle enclosing those in which $P$ is true, and a second circle enclosing those in which $Q$ is true. Then $P \land Q$ is the overlap of the circles, $P \lor Q$ is everything inside at least one of them, and $\lnot P$ is everything outside the circle for $P$.

[Figure 6, steps: De Morgan's law on a Venn diagram. The two circles cut the box into four regions, one for each row of the truth table. The region for \lnot(P \land Q) is everything except the overlap, and so is "outside P" together with "outside Q".]

  - step: The circles cut the box into four regions, labeled with the truth values of P and Q.
  - step: P and Q is true in the overlap, the region T T.
  - step: Its negation is true everywhere else: the other three regions.
  - step: Start again. Not P is the two regions outside the circle for P.
  - step: Add the regions outside the circle for Q. Together they cover everything except the overlap.
The picture is a proof, provided you see why. The four regions are the four rows, and shading a region is writing T in that row. A Venn argument is a truth table drawn in the plane, so it can be trusted exactly when the drawing contains a region for every combination of truth values. Two overlapping circles give all 4 combinations, and three in the usual arrangement give all 8. Four circles cannot give all 16, because four circles divide the plane into at most 14 regions, so for four letters the circle picture breaks down while the table carries on.

## Worked examples

**Worked example.** **Compute a table and find a simpler equivalent: $(P \lor Q) \land \lnot P$.**

Work inside out. In the four rows (T, T), (T, F), (F, T), (F, F) the column of $P \lor Q$ is T, T, T, F and the column of $\lnot P$ is F, F, T, T. Their conjunction is true only where both are true, giving F, F, T, F.

A column with a single T, in the row where $P$ is false and $Q$ is true, is the column of $\lnot P \land Q$. So $(P \lor Q) \land \lnot P \equiv \lnot P \land Q$.

*Check by the laws.* Distribute $\lnot P$ over the disjunction: $\lnot P \land (P \lor Q) \equiv (\lnot P \land P) \lor (\lnot P \land Q)$. The first bracket is a contradiction, and "F or $X$" has the truth value of $X$, so what remains is $\lnot P \land Q$.

**Worked example.** **Negate a rule.** A safety rule reads: "the door is locked, and the alarm is set or a guard is on duty". When is the rule violated?

Write $L$, $A$, $G$ for the three parts. The rule is $L \land (A \lor G)$, and it is violated when its negation is true. Apply De Morgan to the outer $\land$, then to the inner $\lor$:

$$
\lnot\bigl(L \land (A \lor G)\bigr) \equiv \lnot L \lor \lnot(A \lor G) \equiv \lnot L \lor (\lnot A \land \lnot G).
$$

In words: the door is not locked, or else the alarm is off and no guard is on duty.

*Check one row.* Take $L$ true, $A$ false, $G$ false. The rule is $\text{T} \land (\text{F} \lor \text{F})$, which is F, and our formula gives $\text{F} \lor (\text{T} \land \text{T})$, which is T, as it should.

## Every truth table has a formula

We have three connectives. The number of possible tables is much larger: a table on two letters has 4 rows, each of which may be T or F, so there are $2^4 = 16$ different columns, and on three letters there are $2^8 = 256$. Are some of them out of reach of $\land$, $\lor$ and $\lnot$?

The exclusive or shows what to do. Its column is true in the rows (T, F) and (F, T). The formula $P \land \lnot Q$ is true in the row (T, F) and in no other row. The formula $\lnot P \land Q$ is true in the row (F, T) and in no other. Join them with "or" and the result is true in exactly those two rows. The same recipe works on any column whatever. Here it is on a column with three letters: a vote among three sensors, true when at least two of them fire.

[Figure 7, steps: Building a formula for a given truth table: true when at least two of P, Q, R are true. Each true row gets a conjunction that is true in that row only, and their disjunction reproduces the column.]

  - step: A table that was not produced by a formula: the wanted column is true when at least two of the three letters are true.
  - step: Pick out the rows where the wanted value is T. There are four.
  - step: For each such row write an AND of three pieces: the letter where the row has T, its negation where it has F.
  - step: Join the four ANDs with OR. The result is true in exactly the four chosen rows, so it has the wanted column.
**Theorem.** Let $n \ge 1$. Every truth table on the letters $P_1, \dots, P_n$, meaning every way of assigning T or F to each of the $2^n$ rows, is the truth table of some formula built from the letters using only $\land$, $\lor$ and $\lnot$.

**Proof.** For a row $r$, let $M_r$ be the conjunction of $n$ pieces, where the $k$-th piece is $P_k$ if $P_k$ is T in row $r$ and $\lnot P_k$ if $P_k$ is F in row $r$.

*Claim: $M_r$ is true in row $r$ and false in every other row.* In row $r$ every piece is true by the way it was chosen, so the conjunction is true. Any other row $s$ differs from $r$ in the value of at least one letter $P_k$, the $k$-th piece of $M_r$ is false in row $s$, and a conjunction with a false piece is false.

Now take any table. If it has at least one T, let $A$ be the disjunction of the formulas $M_r$ over all rows $r$ where the table has T. In such a row $r$, the piece $M_r$ is true, so $A$ is true. In a row $s$ where the table has F, every $M_r$ in the disjunction has $r \ne s$ and so is false in row $s$, which makes $A$ false. Hence $A$ has the given table. If the table has no T at all, the formula $P_1 \land \lnot P_1$ has it.

The formula produced by this proof is called the **disjunctive normal form** of the table. For the vote it is

$$
(P \land Q \land R) \lor (P \land Q \land \lnot R) \lor (P \land \lnot Q \land R) \lor (\lnot P \land Q \land R).
$$

The theorem promises a formula and makes no promise of a short one. The vote is also given by $(P \land Q) \lor (P \land R) \lor (Q \land R)$, which is less than half as long. A set of connectives that can express every truth table is called **functionally complete**, and the theorem says that $\{\land, \lor, \lnot\}$ is such a set.

**Pause and try.** Write the disjunctive normal form for the table on $P$, $Q$ whose column, in the usual order of rows, is T, F, T, T. Then find a shorter formula with the same column.

**Answer.** The true rows are (T, T), (F, T) and (F, F), so the normal form is $(P \land Q) \lor (\lnot P \land Q) \lor (\lnot P \land \lnot Q)$. For something shorter, look at the single false row instead: the column is false exactly when $P$ is true and $Q$ is false, so it is $\lnot(P \land \lnot Q)$, which by De Morgan and double negation is $\lnot P \lor Q$. This column belongs to "if $P$ then $Q$", the subject of the [next lesson](@logic/implication).

## One connective is enough

Three connectives suffice, and fewer will do. De Morgan's second law, negated on both sides, gives $P \lor Q \equiv \lnot(\lnot P \land \lnot Q)$, so every $\lor$ can be traded for $\land$ and $\lnot$, and the pair $\{\land, \lnot\}$ is already complete. We cannot drop $\lnot$ and keep going (a problem below asks you to prove it), but we can fuse the two survivors into one. Define a new connective, written $P \uparrow Q$ and called **NAND** for "not and", by

$$
P \uparrow Q \;=\; \lnot(P \land Q).
$$

Its column is F, T, T, T: false only when both parts are true.

**Theorem.** Every truth table is the truth table of a formula built from letters using $\uparrow$ alone.

**Proof.** By the previous theorem it is enough to express $\lnot$, $\land$ and $\lor$ with $\uparrow$, and then to replace each connective in a disjunctive normal form by its expression.

*Not.* $P \uparrow P = \lnot(P \land P)$, and $P \land P$ has the truth value of $P$. So $\lnot P \equiv P \uparrow P$.

*And.* By the line above, $(P \uparrow Q) \uparrow (P \uparrow Q) \equiv \lnot(P \uparrow Q) = \lnot\lnot(P \land Q) \equiv P \land Q$.

*Or.* $(P \uparrow P) \uparrow (Q \uparrow Q) \equiv \lnot P \uparrow \lnot Q = \lnot(\lnot P \land \lnot Q) \equiv \lnot\lnot P \lor \lnot\lnot Q \equiv P \lor Q$, by De Morgan and double negation.

[Figure 8, steps: The NAND gate and the three constructions from the proof. One gate with its pins joined gives NOT, two gates give AND, three give OR. Each table is computed from the wiring shown.]

  - step: A NAND gate: its output is F only when both inputs are T.
  - step: Connect one input to both pins. The output is the negation of the input.
  - step: Follow a NAND gate with a gate wired as NOT. The negations cancel, leaving P and Q.
  - step: Negate each input with its own gate, then NAND the results. By De Morgan the output is P or Q.
Chip designers care, because one kind of gate is the easiest thing to manufacture in bulk. The Apollo guidance computer was built entirely from a three-input relative of NAND called NOR, which a problem below investigates.

## Where truth tables stop

A sentence must have a truth value before it can enter a table. "This sentence is false" has none that is consistent, since if it is true then it is false, and if it is false then it is true. And words such as "because" or "probably" are not connectives of this kind at all.

Tables grow fast. Twenty letters need $2^{20} = 1{,}048{,}576$ rows, and 300 letters need more rows than there are atoms in the observable universe. For formulas of that size, equivalences are established by algebra with the laws above.

**Common mistake.** **Moving a "not" inside without flipping the connective.** Writing $\lnot(P \land Q)$ as $\lnot P \land \lnot Q$ treats $\lnot$ like a minus sign in front of a sum. Test it in the row where $P$ is true and $Q$ is false: the first is T and the second is F. "She is not both rich and famous" allows her to be rich; "she is not rich and not famous" does not.

**Common mistake.** **Reading "or" as "one but not both".** A student who is told "$n$ is even or $n$ is a multiple of 3" and then finds that $n = 6$ sometimes concludes the claim was false. It is true: $P \lor Q$ is true when both parts are. In the same way $3 \le 3$ is true.

## Stepping back

The hard part of this subject is at the very start: agreeing to let a table, and nothing else, say what a connective means. After that everything was computation. Equivalence became "same column", proof became "check every row", and De Morgan's laws became facts about small tables that can be used as algebra on large formulas. The reusable idea is that a claim about finitely many cases can be settled by listing the cases, and that a circuit or a Venn diagram proves something exactly when it is such a list in disguise. The [next lesson](@logic/implication) applies the same method to the connective that people most often get wrong: "if ... then".

**Check yourself.** Which formula is logically equivalent to $\lnot(P \lor Q)$?
Answer: $\lnot P \land \lnot Q$ "Not (at least one is true)" says both are false. The columns are both F, F, F, T.

**Recap.** - A statement is a sentence that is true or false. The connectives $\lnot$, $\land$, $\lor$ are defined by their truth tables, and $\lor$ is inclusive: true when at least one part is true.
- A formula with $n$ letters has a table with $2^n$ rows, computed column by column from the inside out.
- $A \equiv B$ means the same truth value in every row. A tautology is true in every row, a contradiction in none.
- Double negation: $\lnot\lnot P \equiv P$. De Morgan: $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$ and $\lnot(P \lor Q) \equiv \lnot P \land \lnot Q$. Each of $\land$, $\lor$ distributes over the other.
- Switch circuits (series is "and", parallel is "or") and Venn diagrams (regions are rows) are models of the tables.
- Every truth table has a formula in $\land$, $\lor$, $\lnot$: one conjunction for each true row, joined by "or". NAND alone can express all three.

## Problems

Problems 1 and 2 repeat the moves of the lesson. Problems 3 and 4 ask you to combine them. Problems 5 and 6 go further.

**Problem 1.** Compute the truth table of $P \land (\lnot P \lor Q)$ and find a shorter equivalent formula. Then get the same answer with the distributive law.

**Solution.** In the rows (T, T), (T, F), (F, T), (F, F) the column of $\lnot P \lor Q$ is T, F, T, T. Taking "and" with the column of $P$, which is T, T, F, F, gives T, F, F, F. That is the column of $P \land Q$. By the distributive law, $P \land (\lnot P \lor Q) \equiv (P \land \lnot P) \lor (P \land Q)$; the first bracket is a contradiction, and "F or $X$" has the value of $X$, leaving $P \land Q$.

**Problem 2.** Use De Morgan's laws to write the negation of each without a "not" in front of the whole thing. (a) "$n$ is even and $n$ is greater than 10." (b) "I will take the bus or I will walk." (c) $\lnot P \lor Q$.

**Solution.** (a) $\lnot(E \land G) \equiv \lnot E \lor \lnot G$: "$n$ is odd or $n$ is at most 10". (b) $\lnot(B \lor W) \equiv \lnot B \land \lnot W$: "I will not take the bus and I will not walk". (c) $\lnot(\lnot P \lor Q) \equiv \lnot\lnot P \land \lnot Q \equiv P \land \lnot Q$, using De Morgan and then double negation. Check (c) in the row $P$ true, $Q$ false: $\lnot P \lor Q$ is F, so its negation is T, and $P \land \lnot Q$ is $\text{T} \land \text{T}$, which is T.

**Problem 3.** A column on $P$, $Q$, $R$ is true exactly when an odd number of the three letters are true. Write its disjunctive normal form, and verify it in the rows (T, F, F) and (T, T, F).

**Solution.** The rows with an odd number of T's are (T, T, T), (T, F, F), (F, T, F) and (F, F, T). So the normal form is

$$
(P \land Q \land R) \lor (P \land \lnot Q \land \lnot R) \lor (\lnot P \land Q \land \lnot R) \lor (\lnot P \land \lnot Q \land R).
$$

In the row (T, F, F) the second conjunction is $\text{T} \land \text{T} \land \text{T}$, so the formula is T, as wanted. In the row (T, T, F) the first conjunction fails at $R$, the second at $\lnot Q$, and the third and fourth at $\lnot P$, so the formula is F, as wanted.

**Problem 4.** The connective **NOR** is defined by $P \downarrow Q = \lnot(P \lor Q)$. Express $\lnot P$, $P \lor Q$ and $P \land Q$ using $\downarrow$ alone, and conclude that NOR by itself is functionally complete.

**Solution.** *Not:* $P \downarrow P = \lnot(P \lor P) \equiv \lnot P$, because $P \lor P$ has the value of $P$. *Or:* $(P \downarrow Q) \downarrow (P \downarrow Q) \equiv \lnot(P \downarrow Q) = \lnot\lnot(P \lor Q) \equiv P \lor Q$. *And:* $(P \downarrow P) \downarrow (Q \downarrow Q) \equiv \lnot P \downarrow \lnot Q = \lnot(\lnot P \lor \lnot Q) \equiv \lnot\lnot P \land \lnot\lnot Q \equiv P \land Q$, by De Morgan and double negation. Since every truth table has a formula in $\land$, $\lor$, $\lnot$, and each of those can be rewritten with $\downarrow$, every truth table has a formula in $\downarrow$ alone.

**Problem 5.** Find the error. "Claim: $P \lor (Q \land R) \equiv (P \lor Q) \land R$. Proof: when all three letters are true both sides are true, and when all three are false both sides are false. So the two sides agree." Give a row in which the two sides differ, and state the correct law.

**Solution.** The proof checks two rows out of eight. Take $P$ true, $Q$ false, $R$ false. The left side is $\text{T} \lor (\text{F} \land \text{F})$, which is T. The right side is $(\text{T} \lor \text{F}) \land \text{F}$, which is F. So the claim is false. The correct law distributes $P$ to both parts: $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$. In the same row the right side of that is $\text{T} \land \text{T}$, which is T.

**Problem 6.** Prove that $\{\land, \lor\}$ without $\lnot$ is not functionally complete. (Hint: what is the truth value of a formula built from letters with only $\land$ and $\lor$ in the row where every letter is true?)

**Solution.** We show that every formula built from letters using only $\land$ and $\lor$ is true in the row where all letters are true. Argue by [induction](@discrete-math/induction) on the number of connectives: prove it for formulas with none, and show that if it holds for all formulas with fewer than $k$ connectives then it holds for those with $k$. A formula with no connectives is a single letter, which is true in that row. A formula with $k \ge 1$ connectives is $A \land B$ or $A \lor B$, where $A$ and $B$ have fewer connectives, so both are true in that row, and then $A \land B$ and $A \lor B$ are true there too. Now the column of $\lnot P$ has F in the row where $P$ is true. No formula in $\land$ and $\lor$ alone has an F in the all-true row, so none has the table of $\lnot P$.
