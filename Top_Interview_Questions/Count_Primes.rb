# Description:

# Count the number of prime numbers less than a non-negative number, n.

def count_primes(n)
  primes = (0..n).to_a
  primes[0] = nil
  primes[1] = nil

  primes.each do |current_num|
    next if current_num == nil
    break if current_num > Math.sqrt(n)
    (current_num**2).step(n, current_num) { |interval| primes[interval] = nil }
  end

  primes.compact.take_while { |num| num < n }.size
end
