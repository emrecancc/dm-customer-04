import re


def process(lines):
    """Process an iterable of lines and return a dictionary of key-value pairs.

    Each line is expected to be in the format ``key=value`` where ``value`` is an
    integer. Lines that do not match this pattern are ignored.
    """
    result = {}
    for line in lines:
        m = re.match(r'(\w+)=(\d+)', line)
        if m:
            key, value = m.group(1), int(m.group(2))
            result[key] = value
    return result
