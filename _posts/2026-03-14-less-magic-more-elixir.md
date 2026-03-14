---
layout: post
title: "Less Magic, More Elixir"
---

If you spend most of your time in React and TypeScript, you've already internalized something the frontend took years to settle on. Types as contracts, state that flows predictably, components that fail loudly. It scales because the rules are consistent. The backend doesn't always offer the same clarity.

A typical setup works fine until the problem stops being CRUD. Add real-time requirements and you're suddenly assembling pieces. A job queue here, a pub/sub layer there, more failure surfaces to defend. It works. It's just a lot to hold together.

If you've internalized why TypeScript matters, Elixir's pattern matching will feel familiar in spirit.

```elixir
def handle_response({:ok, user}), do: render_user(user)
def handle_response({:error, reason}), do: log_and_recover(reason)
```

You're not checking types, you're matching on shape. Unhandled cases fail loudly and early. Elixir also has typespecs, so you can annotate function signatures and struct attributes directly. Pair that with Dialyzer and you get static analysis too. Not a compiler-enforced type system, but closer than what most backends offer.

```elixir
@type user :: %{id: integer(), name: String.t()}
@spec find_user(integer()) :: {:ok, user()} | {:error, String.t()}
def find_user(id) do
  # ...
end
```

The explicitness goes further than types. Coming from a heavy-handed Ruby codebase, tracing a method call meant jumping across multiple files, mixins, and implicit magic. In Ruby, `include` dumps methods into your class with no indication of where they came from. In Elixir, modules are aliased explicitly and the origin of every function is visible at a glance. The pipe operator means you can read a chain of logic top to bottom without losing the thread.

```ruby
# Ruby — origin of methods is unclear, return value is implicit
class OrderService
  include Discountable
  include Notifiable

  def process(order)
    apply_discount(order)   # where is this defined?
    notify_user(order)      # and this?
  end
end
```

```elixir
# Elixir — imports are explicit, return shape is part of the contract
alias MyApp.Discounts
alias MyApp.Notifications

def process(order) do
  order
  |> Discounts.apply()
  |> Notifications.send_confirmation()
end

# Bang vs non-bang signals intent at the call site
Discounts.apply(order)   # returns {:ok, order} or {:error, reason}
Discounts.apply!(order)  # raises on failure — you chose that explicitly
```

Functions are explicit. Return shapes are part of the contract. There's no hunting across files to understand what a function does or where it came from.

If you're adding a real-time feature, building something that needs to fan out across many concurrent workers, or just tired of assembling four tools to do what one should, Elixir is worth your time. Phoenix will feel approachable. The functional style takes a week or two to stop fighting. After that, it starts to feel less like a tradeoff and more like what a backend should have been all along.
