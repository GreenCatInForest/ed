FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
ENV PYTHONPATH="/app"
RUN chmod +x scripts/run.sh
CMD ["sh", "scripts/run.sh"]
