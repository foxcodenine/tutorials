# RabbitMQ CLI – Quick Notes

## Enter RabbitMQ Container

```bash
docker exec -it iotrack-live_rabbitmq bash
```

- `-i` → interactive mode  
- `-t` → allocate a pseudo-TTY (terminal)

---

## Node & Cluster Status

```bash
rabbitmqctl status
```
Shows node health, memory usage, alarms, and runtime info.

```bash
rabbitmq-diagnostics status
```
Container-friendly diagnostic command (preferred in Docker).

```bash
rabbitmqctl list_users
```
Lists configured RabbitMQ users.

---

## Queues & Exchanges

```bash
rabbitmqctl list_queues
```
Lists all queues.

```bash
rabbitmqctl list_exchanges
```
Lists all exchanges.

```bash
rabbitmqctl list_queues name type leader members
```
Useful for quorum queues:
- `type` → classic / quorum  
- `leader` → current leader node  
- `members` → replica nodes  

---

## Queue Monitoring (Very Useful)

```bash
rabbitmqctl list_queues name messages consumers
```
Shows:
- message backlog
- number of active consumers

```bash
rabbitmqctl list_queues name messages_ready messages_unacknowledged
```
Helps detect:
- slow consumers
- stuck/unacked messages

---

## Connections & Channels

```bash
rabbitmqctl list_connections
```
Lists active client connections.

```bash
rabbitmqctl list_channels
```
Lists channels opened by connections (too many = potential memory issue).

---

## Plugins

```bash
rabbitmq-plugins list
```
Lists all available plugins.

```bash
rabbitmq-plugins enable rabbitmq_management
```
Enables the Management UI (`:15672`).

```bash
rabbitmq-plugins disable rabbitmq_management
```
Disables the Management UI.

---

## Notes

- CLI is mainly for **inspection & debugging**, not daily operations.
- Prefer the **Management UI** for metrics and graphs.
- Avoid destructive commands in production unless you fully understand them.
